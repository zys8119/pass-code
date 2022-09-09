import {createApp} from "vue"
import App from "./App.vue"

const app = createApp(App)

import route from "@/route"
app.use(route)

import "@/assets/less/index.less"

app.mount("#root")