"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("./src/index.js"),o=require("./src/button/index.js"),i=require("./src/icon/index.js");console.log(e);const u={install:t=>{for(let n in e)t.use(e[n])}};exports.Button=o.Button;exports.Icon=i.Icon;exports.default=u;