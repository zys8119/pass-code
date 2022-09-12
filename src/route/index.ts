import {createRouter, createWebHashHistory} from "vue-router"

const route = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home",
            component:()=>import("@/view/Home/Home.vue")
        }
    ]
})

export default route
