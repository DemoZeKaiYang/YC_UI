"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./style/index.css");const u=e.defineComponent({name:"ea-button"}),r=e.defineComponent({...u,props:{type:null},setup(n){const t=n,o=e.computed(()=>({[`ea-button--${t.type}`]:t.type}));return(s,c)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["ea-button",e.unref(o)])},"测试按钮1",2))}});exports.default=r;