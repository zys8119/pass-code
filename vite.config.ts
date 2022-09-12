import {defineConfig} from "vite"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

export default defineConfig({
    base:"",
    build:{
      outDir:"./docs"
    },
    plugins:[
        vue(),
        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/, /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            imports:[
                "vue",
                "vue-router"
            ],
            dts:true
        }),
        Components()
    ],
    resolve:{
        alias:{
            "@":resolve(__dirname,"./src")
        }
    }
})
