import { createStore } from "vuex";

import db from "./modules/db";

const store = createStore({
    modules: {
        db
    }
})

export default store