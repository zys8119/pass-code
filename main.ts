import {createApp} from "vue"
import App from "./App.vue"

const app = createApp(App)

import route from "@/route"
app.use(route)

app.mount("#root")