import {createRouter, createWebHistory} from "vue-router"

const route = createRouter({
    history:createWebHistory(),
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