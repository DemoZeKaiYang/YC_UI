import * as components from "./src/index";
export * from "./src/index";
//这是一个类型
import { App } from "vue";
export default {
  install: (app: App) => {
    for (let c in components) {
      app.use(components[c]);
    }
  },
};
