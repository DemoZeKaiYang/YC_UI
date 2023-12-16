import * as o from "./src/index.mjs";
import { Button as s } from "./src/button/index.mjs";
import { Icon as i } from "./src/icon/index.mjs";
console.log(o);
const n = {
  install: (t) => {
    for (let e in o)
      t.use(o[e]);
  }
};
export {
  s as Button,
  i as Icon,
  n as default
};
