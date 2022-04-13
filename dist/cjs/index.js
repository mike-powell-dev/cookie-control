"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components"),n=require("react-dom");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=o(e),i=o(t),a=o(n);const c=e.createContext({analytics:!1,defaultCookiePreferences:{analytics:!1,functional:!1,marketing:!1},functional:!1,marketing:!1,set:()=>{},showCookieControl:!1,showUpdatePreferences:!1,toggleShowUpdatePreferences:()=>{}}),r=()=>{const t=e.useContext(c),[n,o]=e.useState(t.analytics),[l,i]=e.useState(t.functional),[a,r]=e.useState(t.marketing),[d,u]=e.useState(!1),s=()=>{u(!0)};return e.useEffect((()=>{o(t.analytics),i(t.functional),r(t.marketing)}),[t]),e.useEffect((()=>{d&&(t.set({analytics:n,functional:l,marketing:a}),u(!1))}),[n,t,l,a,d]),e.useMemo((()=>({acceptAll:()=>{o(!0),i(!0),r(!0),s()},analytics:n,declineAll:()=>{o(!1),i(!1),r(!1),s()},defaultCookiePreferences:t.defaultCookiePreferences,functional:l,marketing:a,setAnalytics:o,setFunctional:i,setMarketing:r,showUpdatePreferences:t.showUpdatePreferences,showCookieControl:t.showCookieControl,toggleShowUpdatePreferences:t.toggleShowUpdatePreferences,updatePreferences:s})),[n,t,l,a])},d=i.default.button``,u=e=>{const t=(()=>{var e;if("undefined"==typeof window)return{};const t=null===(e=document.cookie)||void 0===e?void 0:e.trim();return t.length>0?t.split(";").reduce(((e,t)=>{const n=t.split("="),o=n[0].trim(),l=n[1].trim();return Object.assign(Object.assign({},e),{[o]:l})}),{}):{}})();return t[e]},s=(e,t,n)=>{if("undefined"!=typeof window&&navigator.cookieEnabled)if(0===n)document.cookie=`${e} = ${t}`;else{const o=new Date;o.setTime(o.getTime()+24*(n||1)*60*60*1e3);const l="expires="+o.toUTCString();document.cookie=`${e} = ${t}; ${l}`}};const f={background:"#fff",button:{borderRadius:"2px",borderWidth:"1px",borderColor:"#1d5fc2",color:"#1d5fc2",fontSize:"16px",lineHeight:"24px",padding:"16px 24px",solid:{background:"#1d5c90",color:"#fff",hover:{background:"#00304d",color:"#fff"}}},containerWidth:"1280px",divideColor:"#ddd",focusOutlineColor:"#4c9aff",h1:{color:"#002033",fontFamily:"Poppins, Arial, sans-serif",fontSize:"30px",fontWeight:"600",lineHeight:"56px"},h2:{color:"#002033",fontFamily:"Poppins, Arial, sans-serif",fontSize:"20px",fontWeight:"500",lineHeight:"24px"},iconColor:"#444",linkColor:"#1d5fc2",text:{color:"#444",fontFamily:"Poppins, Arial, sans-serif",fontSize:"16px",fontWeight:"400",lineHeight:"24px"},toggle:{off:{background:"#ccc",hover:"#999"},on:{background:"#1d5c90",hover:"#00304d"}},zIndex:99999},p=t.css`
  height: 1px;
  left: -10000px;
  overflow: hidden;
  position: absolute;
  top: auto;
  width: 1px;
`,v=i.default.div`
  ${({theme:e})=>{var n,o,l,i,a;return t.css`
    *:focus {
      outline: transparent;
      box-shadow: ${null==e?void 0:e.focusOutlineColor} 0px 0px 0px 3px;
    }

    background: ${null==e?void 0:e.background};
    bottom: 0;
    box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.4);
    left: 0;
    max-height: 70vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 16px;
    position: fixed;
    right: 0;
    z-index: ${null==e?void 0:e.zIndex};

    .zen-cc-cc__inner {
      margin: auto;
      max-width: ${null==e?void 0:e.containerWidth};
      width: 100%;
    }

    .zen-cc-cc__close {
      text-align: right;
    }

    .zen-cc-cc__flex {
      margin-top: 8px;
      @media only screen and (min-width: 800px) {
        display: flex;
        align-items: flex-start;

        > *:first-child {
          padding-right: 32px;
        }
      }
    }

    .zen-cc-cc__content {
      color: ${null===(n=null==e?void 0:e.text)||void 0===n?void 0:n.color};
      font-family: ${null===(o=null==e?void 0:e.text)||void 0===o?void 0:o.fontFamily};
      font-size: ${null===(l=null==e?void 0:e.text)||void 0===l?void 0:l.fontSize};
      font-weight: ${null===(i=null==e?void 0:e.text)||void 0===i?void 0:i.fontWeight};
      line-height: ${null===(a=null==e?void 0:e.text)||void 0===a?void 0:a.lineHeight};
      max-width: 800px;

      a {
        color: ${null==e?void 0:e.linkColor};
      }
    }

    .zen-cc-cc__toggles {
      margin: 8px -16px 0 -16px;
      display: flex;
      flex-wrap: wrap;
      border: none;
      padding: 0;

      .zen-cc-toggle {
        margin: 16px 16px 0 16px;
      }
    }

    .zen-cc-cc__legend {
      ${p}
    }

    .zen-cc-cc__buttons {
      margin: 8px -16px 0 -16px;
      display: flex;
      flex-wrap: wrap;

      @media only screen and (min-width: 800px) {
        margin-top: -8px;
      }
    }

    .zen-cc-cc__button-wrap {
      margin: 16px 16px 0 16px;

      @media only screen and (min-width: 800px) {
        display: flex;
        flex-basis: 50%;
        margin: 16px 0 0 0;

        &:last-child {
          flex-basis: 100%;
        }

        button {
          flex-basis: 100%;
          margin: 0 16px;
        }
      }
    }
  `}}
`,m=i.default.span`
  ${({theme:e})=>{var n,o,l,i,a,c,r,d;return t.css`
    display: inline-block;
    min-height: 24px;
    position: relative;
    left: -4px;

    input {
      ${p}
    }

    label {
      cursor: pointer;
      display: block;
      font-size: 16px;
      line-height: 24px;
      padding: 4px 4px 4px 52px;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      &::before {
        background: ${null===(o=null===(n=null==e?void 0:e.toggle)||void 0===n?void 0:n.off)||void 0===o?void 0:o.background};
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 3px 0 inset;
        height: 24px;
        left: 4px;
        outline: 2px solid transparent;
        transition: all 250ms ease-in-out;
        width: 40px;
      }

      &::after {
        background: #fff;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.9) 1px 1px 3px 0;
        height: 16px;
        left: 8px;
        transition: left 200ms ease-in-out;
        width: 16px;
      }
    }

    &.checked {
      label::before {
        background: ${null===(i=null===(l=null==e?void 0:e.toggle)||void 0===l?void 0:l.on)||void 0===i?void 0:i.background};
      }
      label::after {
        left: 24px;
      }

      &:hover {
        label::before {
          background: ${null===(c=null===(a=null==e?void 0:e.toggle)||void 0===a?void 0:a.on)||void 0===c?void 0:c.hover};
        }
      }
    }

    &:hover {
      label::before {
        /* outline-color: blue; */
        background: ${null===(d=null===(r=null==e?void 0:e.toggle)||void 0===r?void 0:r.off)||void 0===d?void 0:d.hover};
      }
    }

    input:focus + label {
      outline: transparent;
      box-shadow: ${null==e?void 0:e.focusOutlineColor} 0px 0px 0px 3px;
    }
  `}}
`,g=({id:e,isChecked:t,label:n,onClick:o})=>l.default.createElement(m,{className:"zen-cc-toggle "+(t?"checked":"")},l.default.createElement("input",{checked:t,className:"zen-cc-toggle__checkbox",id:e,onChange:e=>o(),type:"checkbox"}),l.default.createElement("label",{className:"zen-cc-toggle__label",htmlFor:e},n)),h=i.default.button`
  ${({theme:e})=>{var n,o,l,i,a,c,r,d,u,s,f,p,v,m,g,h,x,b;return e.button.customStyles?t.css`
          ${e.button.customStyles}
        `:t.css`
          background: none;
          border-radius: 2px;
          border: ${null===(n=null==e?void 0:e.button)||void 0===n?void 0:n.borderWidth} solid
            ${null===(o=null==e?void 0:e.button)||void 0===o?void 0:o.borderColor};
          color: ${null===(l=null==e?void 0:e.button)||void 0===l?void 0:l.color};
          cursor: pointer;
          display: inline-block;
          font-size: ${null===(i=null==e?void 0:e.button)||void 0===i?void 0:i.fontSize};
          font-weight: ${null===(a=null==e?void 0:e.button)||void 0===a?void 0:a.fontWeight};
          line-height: ${null===(c=null==e?void 0:e.button)||void 0===c?void 0:c.lineHeight};
          margin: 0px;
          padding: ${null===(r=null==e?void 0:e.button)||void 0===r?void 0:r.padding};
          text-decoration: none;
          transition: all 300ms ease 0s;

          &.solid {
            background: ${null===(u=null===(d=null==e?void 0:e.button)||void 0===d?void 0:d.solid)||void 0===u?void 0:u.background};
            color: ${null===(f=null===(s=null==e?void 0:e.button)||void 0===s?void 0:s.solid)||void 0===f?void 0:f.color};

            &:hover {
              background: ${null===(m=null===(v=null===(p=null==e?void 0:e.button)||void 0===p?void 0:p.solid)||void 0===v?void 0:v.hover)||void 0===m?void 0:m.background};
              color: ${null===(x=null===(h=null===(g=null==e?void 0:e.button)||void 0===g?void 0:g.solid)||void 0===h?void 0:h.hover)||void 0===x?void 0:x.color};
            }
          }

          &.hollow {
            &:hover {
              box-shadow: ${null===(b=null==e?void 0:e.button)||void 0===b?void 0:b.borderColor} 0px 0px 0px 1px inset;
            }
          }
        `}}
`,x=({label:e,onClick:t,type:n="solid"})=>l.default.createElement(h,{className:`zen-cc-button ${n}`,onClick:t},e),b=i.default.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;

  &:focus {
    outline: 3px solid ${e=>{var t;return null===(t=null==e?void 0:e.theme)||void 0===t?void 0:t.focusOutlineColor}};
  }

  .close__icon::before {
    color: ${e=>{var t;return null===(t=e.theme)||void 0===t?void 0:t.iconColor}};
    content: '\\2716';
    display: block;
    font-size: 32px;
    line-height: 40px;
  }

  .close__label {
    ${p}
  }
`,k=({onClick:e})=>l.default.createElement(b,{onClick:e},l.default.createElement("span",{"aria-hidden":"true",className:"close__icon"}),l.default.createElement("span",{className:"close__label"},"Close")),_=({content:t})=>{const{acceptAll:n,analytics:o,declineAll:i,defaultCookiePreferences:a,functional:c,marketing:d,setAnalytics:u,setFunctional:s,setMarketing:f,showCookieControl:p,updatePreferences:m}=r(),h=e.useRef(null);return e.useEffect((()=>{p&&(u(a.analytics),s(a.functional),f(a.marketing))}),[p]),e.useEffect((()=>{var e;h.current&&(null===(e=document.getElementById("cc-marketing"))||void 0===e||e.focus())}),[h.current]),p?l.default.createElement(v,{className:"zen-cc-cc",ref:h},l.default.createElement("div",{className:"zen-cc-cc__inner"},l.default.createElement("div",{className:"zen-cc-cc__close"},l.default.createElement(k,{onClick:()=>m()})),l.default.createElement("div",{className:"zen-cc-cc__flex"},l.default.createElement("div",null,t&&l.default.createElement("div",{className:"zen-cc-cc__content",dangerouslySetInnerHTML:{__html:t}}),l.default.createElement("fieldset",{className:"zen-cc-cc__toggles"},l.default.createElement("legend",{className:"zen-cc-cc__legend"},"Set cookie preferences"),l.default.createElement(g,{id:"cc-marketing",isChecked:d,label:"Marketing",onClick:()=>f((e=>!e))}),l.default.createElement(g,{id:"cc-functional",isChecked:c,label:"Functional",onClick:()=>s((e=>!e))}),l.default.createElement(g,{id:"cc-analytics",isChecked:o,label:"Analytics",onClick:()=>u((e=>!e))}))),l.default.createElement("div",{className:"zen-cc-cc__buttons"},l.default.createElement("div",{className:"zen-cc-cc__button-wrap"},l.default.createElement(x,{label:"Accept all",onClick:()=>n(),type:"hollow"})),l.default.createElement("div",{className:"zen-cc-cc__button-wrap"},l.default.createElement(x,{label:"Decline all",onClick:()=>i(),type:"hollow"})),l.default.createElement("div",{className:"zen-cc-cc__button-wrap"},l.default.createElement(x,{label:"Save preferences",onClick:()=>m()})))))):null},y=i.default.div`
  ${({theme:e})=>{var n,o,l,i,a,c,r,d,u,s,f,p,v,m,g;return t.css`
    *:focus {
      outline: transparent;
      box-shadow: ${null==e?void 0:e.focusOutlineColor} 0px 0px 0px 3px;
    }

    .zen-cc-up__modal {
      background: ${null==e?void 0:e.background};
      bottom: 0;
      box-shadow: -5px 0 10px rgba(0, 0, 0, 0.4);
      left: 100%;
      max-width: 90vw;
      overflow: hidden;
      padding: 16px 0;
      position: fixed;
      top: 0;
      transition: transform 400ms ease-in-out;
      width: 350px;
      z-index: ${null==e?void 0:e.zIndex};
    }

    &.open {
      &::before {
        background: rgba(0, 0, 0, 0.25);
        bottom: 0;
        content: '';
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: ${null==e?void 0:e.zIndex};
      }
      & > .zen-cc-up__modal {
        transform: translateX(-100%);
      }
    }

    &.closed > .zen-cc-up__modal {
      transform: translateX(0);
    }

    .zen-cc-up__inner {
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 0 16px;
    }

    .zen-cc-up__close {
      text-align: right;
    }

    .zen-cc-up__title {
      color: ${null===(n=null==e?void 0:e.h1)||void 0===n?void 0:n.color};
      font-family: ${null===(o=null==e?void 0:e.h1)||void 0===o?void 0:o.fontFamily};
      font-size: ${null===(l=null==e?void 0:e.h1)||void 0===l?void 0:l.fontSize};
      font-weight: ${null===(i=null==e?void 0:e.h1)||void 0===i?void 0:i.fontWeight};
      line-height: ${null===(a=null==e?void 0:e.h1)||void 0===a?void 0:a.lineHeight};
      margin: 0;
    }

    .zen-cc-up__section {
      border-bottom: 1px solid ${null==e?void 0:e.divideColor};
      padding: 24px 0;
    }

    .zen-cc-up__heading {
      color: ${null===(c=null==e?void 0:e.h2)||void 0===c?void 0:c.color};
      font-family: ${null===(r=null==e?void 0:e.h2)||void 0===r?void 0:r.fontFamily};
      font-size: ${null===(d=null==e?void 0:e.h2)||void 0===d?void 0:d.fontSize};
      font-weight: ${null===(u=null==e?void 0:e.h2)||void 0===u?void 0:u.fontWeight};
      line-height: ${null===(s=null==e?void 0:e.h2)||void 0===s?void 0:s.lineHeight};
    }

    .zen-cc-up__summary,
    .zen-cc-up__content {
      color: ${null===(f=null==e?void 0:e.text)||void 0===f?void 0:f.color};
      font-family: ${null===(p=null==e?void 0:e.text)||void 0===p?void 0:p.fontFamily};
      font-size: ${null===(v=null==e?void 0:e.text)||void 0===v?void 0:v.fontSize};
      font-weight: ${null===(m=null==e?void 0:e.text)||void 0===m?void 0:m.fontWeight};
      line-height: ${null===(g=null==e?void 0:e.text)||void 0===g?void 0:g.lineHeight};
      margin-top: 16px;

      a {
        color: ${null==e?void 0:e.linkColor};
      }
    }

    .zen-cc-toggle {
      margin-top: 16px;
    }

    .zen-cc-up__save {
      margin-top: 24px;
    }
  `}}
`,C=({isChecked:e,label:t,onClick:n,summary:o,title:i})=>o||t?l.default.createElement("div",{className:"zen-cc-up__section"},l.default.createElement("h3",{className:"zen-cc-up__heading"},i),o&&l.default.createElement("div",{className:"zen-cc-up__summary",dangerouslySetInnerHTML:{__html:o}}),t&&n&&l.default.createElement(g,{id:`cp-${t.toLowerCase().replace(/ /g,"-")}`,isChecked:!!e,label:t,onClick:n})):null,w=()=>"undefined"!=typeof window,E=t=>{const[n,o]=e.useState(null),[l,i]=e.useState(null);e.useState((()=>{}));let a=()=>{};e.useEffect((()=>{document.removeEventListener("keydown",a,!1),(null==n?void 0:n.current)&&(a=(({el:e,escapeFunction:t,focusEl:n})=>{var o;const l=null===(o=null==e?void 0:e.current)||void 0===o?void 0:o.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, [tabindex="0"], [contenteditable]'),i=l[0],a=l[l.length-1];return((null==n?void 0:n.current)||i).focus(),e=>{"Escape"===e.code&&t&&t(),"Tab"===e.code&&(e.shiftKey&&document.activeElement===i?(e.preventDefault(),null==a||a.focus()):e.shiftKey||document.activeElement!==a||(e.preventDefault(),null==i||i.focus()))}})({el:n,escapeFunction:()=>{c(),t&&t()},focusEl:l}),document.addEventListener("keydown",a,!1))}),[null==n?void 0:n.current,null==l?void 0:l.current]);const c=()=>document.removeEventListener("keydown",a,!1);return e.useEffect((()=>()=>c()),[]),{initFocustTrap:(e,t)=>{o(e),t&&i(t)},destroyFocusTrap:c}},z=t=>{const{analytics:n,marketing:o,functional:i,setAnalytics:c,setMarketing:d,setFunctional:u,showUpdatePreferences:s,toggleShowUpdatePreferences:f,updatePreferences:p}=r(),v=w()&&document.getElementById("zen-cc-app-root"),m=w()&&document.getElementById("zen-cc-modal-root"),g=w()&&document.getElementById("zen-cc-tup"),{initFocustTrap:h,destroyFocusTrap:b}=E((()=>P())),_=e.useRef(null),[z,$]=e.useState(!1),S=e=>{(_.current&&!_.current.contains(e.target)&&s||["A"].includes(e.target.nodeName))&&P()},P=()=>{document.removeEventListener("click",S,!1),$(!1),setTimeout((()=>{b(),f(),v&&(v.setAttribute("tabindex","0"),v.setAttribute("aria-hidden","false")),g&&g.focus()}),400)};return e.useEffect((()=>{s&&setTimeout((()=>{v&&(v.setAttribute("tabindex","-1"),v.setAttribute("aria-hidden","true")),document.addEventListener("click",S,!1),h(_),$(!0)}),100)}),[s]),e.useEffect((()=>()=>P()),[]),s&&m?a.default.createPortal(l.default.createElement(y,{"aria-modal":"true",className:"zen-cc-up "+(z?"open":"closed"),role:"dialog"},l.default.createElement("div",{className:"zen-cc-up__modal",ref:_},l.default.createElement("div",{className:"zen-cc-up__inner"},l.default.createElement("div",{className:"zen-cc-up__close"},l.default.createElement(k,{onClick:()=>P()})),l.default.createElement("h2",{className:"zen-cc-up__title"},"Cookie Preferences"),t.content&&l.default.createElement("div",{className:"zen-cc-up__section",dangerouslySetInnerHTML:{__html:t.content}}),l.default.createElement(C,{summary:t.necessary,title:"Necessary Cookies"}),l.default.createElement(C,{isChecked:i,label:"Functional",onClick:()=>u(!i),summary:t.functional,title:"Functional Cookies"}),l.default.createElement(C,{isChecked:n,label:"Analytics",onClick:()=>c(!n),summary:t.analytics,title:"Analytical Cookies"}),l.default.createElement(C,{isChecked:o,label:"Marketing",onClick:()=>d(!o),summary:t.marketing,title:"Marketing Cookies"}),l.default.createElement("div",{className:"zen-cc-up__save"},l.default.createElement(x,{label:"Save Preferences",onClick:()=>{p(),P()}}))))),m):null};exports.ToggleUpdatePreferences=({className:e,label:t="Cookie Preferences"})=>{const{showCookieControl:n,toggleShowUpdatePreferences:o}=r();return n?null:l.default.createElement(d,{"aria-haspopup":"dialog",className:e,id:"zen-cc-tup",onClick:()=>o()},t)},exports.getCookieValue=u,exports.setCookieValue=s,exports.useCookieControl=r,exports.withCookieProvider=({cookieControl:n,defaultCookiePreferences:o,updatePreferences:i,theme:a})=>r=>d=>{var p=
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n}(d,[]);const[v,m]=e.useState(!1),[g,h]=e.useState(!1),[x,b]=e.useState(!1),[k,y]=e.useState(!1),[C,w]=e.useState(!1),[E,$]=e.useState([]);e.useEffect((()=>{const e=u("zen-cc");if(e){const{analytics:t,functional:n,marketing:o}=JSON.parse(e);m(!!t),h(!!n),b(!!o)}else y(!0)}),[]),e.useEffect((()=>{if("undefined"!=typeof window&&2===E.length){const e=E[0],t=E[1];E&&Object.keys(e).some((n=>e[n]&&!t[n]))&&window.location.reload(),$((e=>[...e.slice(1)]))}}),[E]);const S=e.useMemo((()=>({analytics:v,defaultCookiePreferences:o,marketing:x,functional:g,set:({analytics:e,functional:t,marketing:n})=>{m(e),h(t),b(n),y(!1),s("zen-cc",JSON.stringify({analytics:e,functional:t,marketing:n}),90),$((o=>[...o,{analytics:e,functional:t,marketing:n}]))},showCookieControl:k,showUpdatePreferences:C,toggleShowUpdatePreferences:()=>w((e=>!e))})),[v,g,x,k,C]);return l.default.createElement(c.Provider,{value:S},l.default.createElement("div",{id:"zen-cc-app-root"},l.default.createElement(t.ThemeProvider,{theme:Object.assign(Object.assign({},f),a)},l.default.createElement(_,Object.assign({},n))),l.default.createElement(r,Object.assign({},p))),l.default.createElement("div",{id:"zen-cc-modal-root"}),l.default.createElement(t.ThemeProvider,{theme:Object.assign(Object.assign({},f),a)},l.default.createElement(z,Object.assign({},i))))};
//# sourceMappingURL=index.js.map
