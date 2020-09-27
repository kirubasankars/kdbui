
export function moduleInitializer(baseRouter, baseStore) {
    const modules = [];
    const moduleMatcher = /^\/?(\w+)/;

    baseRouter.beforeEach((to, from, next) => {
        let moduleName = "";
        const matches = moduleMatcher.exec(to.path)
        if (matches.length === 2) {
            moduleName = matches[1];
        }
        
        import('@/modules/' + moduleName + '/module.js').then(() => {
            next()
        })

        if (modules.indexOf(moduleName) === -1) {
            import('@/modules/' + moduleName + '/module.js').then((r) => {                   
                if (modules.indexOf(moduleName) === -1) {                    
                    modules.push(moduleName)             
                           
                    const moduleNameMatcher = new RegExp('^/?' + moduleName);

                    let routes = r.default.routes;   
                    routes.forEach((item) => {
                        const tn = moduleNameMatcher.exec(item.name)                        
                        if (!tn) {
                            throw "invalid route name, missing module name prefix"
                        }
                        const tp = moduleNameMatcher.exec(item.path)                        
                        if (!tp) {
                            throw "invalid route path, missing module name prefix"
                        }
                    })                 
                    baseRouter.addRoutes(routes)
                                       
                    const store = r.default.store || { };
                    if (!store.namespaced) {
                         throw "invalid store config, missing attribute namespaced: true"
                    }
                    baseStore.registerModule(moduleName, store)
                                                                               
                    next()
                }
            })
        } else {
            next()
        }  
    })
}
