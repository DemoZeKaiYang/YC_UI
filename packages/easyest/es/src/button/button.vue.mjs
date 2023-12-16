import { defineComponent as e, computed as r, openBlock as u, createElementBlock as a, normalizeClass as c, unref as p } from "vue";
import "./style/index.less.mjs";
const s = e({
  name: "ea-button"
}), f = /* @__PURE__ */ e({
  ...s,
  props: {
    type: null
  },
  setup(n) {
    const t = n, o = r(() => ({
      [`ea-button--${t.type}`]: t.type
    }));
    return (l, m) => (u(), a("button", {
      class: c(["ea-button", p(o)])
    }, "测试按钮1", 2));
  }
});
export {
  f as default
};
