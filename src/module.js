
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
                    
                    const moduleNameMatcher = new RegExp('^/?' + moduleName);

                    let routes = r.default.routes;          
                    routes.forEach((item) => {
                        const tn = moduleNameMatcher.exec(item.name)                        
                        if (!tn) {
                            throw "invalid route config"
                        }
                        const tp = moduleNameMatcher.exec(item.path)                        
                        if (!tp) {
                            throw "invalid route config"
                        }
                    })                 
                    baseRouter.addRoutes(routes)
                    
                    const store = r.default.store;
                    if (!store.namespaced) {
                        throw "invalid store config"
                    }                    
                    baseStore.registerModule(moduleName, store) 

                    modules.push(moduleName)
                    
                    next()
                }
            })
        } else {
            next()
        }  
    })
}
