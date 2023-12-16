import _Icon from './icon.vue'
import type { Plugin, App } from 'vue'
type SFCWithInstall<T> = T & Plugin
const withInstall = <T>(comp: T) => {
  //给comp添加install方法
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name
    app.component(name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}
export const Icon = withInstall(_Icon)
export default Icon
