import { App } from 'vue'
import IndexFeature from './index.vue'
IndexFeature.install = (app: App) => {
  app.component(IndexFeature.name, IndexFeature)
}

export default IndexFeature
