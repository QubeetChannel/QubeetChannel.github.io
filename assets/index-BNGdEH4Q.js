import{r as m,a as x,L as u,R as j,b as a,c as y,B as R}from"./react-vendor-DDuJh3bP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=c(r);fetch(r.href,t)}})();var p={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=m,v=Symbol.for("react.element"),b=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,O=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function h(i,o,c){var s,r={},t=null,n=null;c!==void 0&&(t=""+c),o.key!==void 0&&(t=""+o.key),o.ref!==void 0&&(n=o.ref);for(s in o)g.call(o,s)&&!E.hasOwnProperty(s)&&(r[s]=o[s]);if(i&&i.defaultProps)for(s in o=i.defaultProps,o)r[s]===void 0&&(r[s]=o[s]);return{$$typeof:v,type:i,key:t,ref:n,props:r,_owner:O.current}}l.Fragment=b;l.jsx=h;l.jsxs=h;p.exports=l;var e=p.exports,d={},f=x;d.createRoot=f.createRoot,d.hydrateRoot=f.hydrateRoot;const L=()=>e.jsxs("div",{children:[e.jsx("h1",{children:"Home Page"}),e.jsx("p",{children:"Welcome to the home page!"})]}),P=()=>e.jsxs("div",{children:[e.jsx("h1",{children:"About Page"}),e.jsx("p",{children:"This is the about page."})]}),S=()=>e.jsx("header",{children:e.jsx("h1",{children:"Qubeet"})}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{}),e.jsx("nav",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(u,{to:"/",children:"Home"})}),e.jsx("li",{children:e.jsx(u,{to:"/about",children:"About"})})]})}),e.jsxs(j,{children:[e.jsx(a,{path:"/",element:e.jsx(L,{})}),e.jsx(a,{path:"/about",element:e.jsx(P,{})})]})]});d.createRoot(document.getElementById("root")).render(e.jsx(y.StrictMode,{children:e.jsx(R,{children:e.jsx(w,{})})}));
