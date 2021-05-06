/* eslint-disable */
import {App} from 'vue'

import './main.css'   // 引入样式
import TestBricks from './components/testBricks'

const components = [
    TestBricks
]

// 全局导入
const install = (app: App) => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}

// 局部导入
export {
    TestBricks,
    install
}
export default {
    install
}
