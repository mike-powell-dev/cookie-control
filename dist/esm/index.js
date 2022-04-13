import e,{createContext as n,useContext as o,useState as t,useEffect as l,useMemo as i,useRef as c}from"react";import a,{css as r,ThemeProvider as d}from"styled-components";import s from"react-dom";const u=n({analytics:!1,defaultCookiePreferences:{analytics:!1,functional:!1,marketing:!1},functional:!1,marketing:!1,set:()=>{},showCookieControl:!1,showUpdatePreferences:!1,toggleShowUpdatePreferences:()=>{}}),p=()=>{const e=o(u),[n,c]=t(e.analytics),[a,r]=t(e.functional),[d,s]=t(e.marketing),[p,v]=t(!1),m=()=>{v(!0)};return l((()=>{c(e.analytics),r(e.functional),s(e.marketing)}),[e]),l((()=>{p&&(e.set({analytics:n,functional:a,marketing:d}),v(!1))}),[n,e,a,d,p]),i((()=>({acceptAll:()=>{c(!0),r(!0),s(!0),m()},analytics:n,declineAll:()=>{c(!1),r(!1),s(!1),m()},defaultCookiePreferences:e.defaultCookiePreferences,functional:a,marketing:d,setAnalytics:c,setFunctional:r,setMarketing:s,showUpdatePreferences:e.showUpdatePreferences,showCookieControl:e.showCookieControl,toggleShowUpdatePreferences:e.toggleShowUpdatePreferences,updatePreferences:m})),[n,e,a,d])},v=a.button``,m=({className:n,label:o="Cookie Preferences"})=>{const{showCookieControl:t,toggleShowUpdatePreferences:l}=p();return t?null:e.createElement(v,{"aria-haspopup":"dialog",className:n,id:"zen-cc-tup",onClick:()=>l()},o)},f=e=>{const n=(()=>{var e;if("undefined"==typeof window)return{};const n=null===(e=document.cookie)||void 0===e?void 0:e.trim();return n.length>0?n.split(";").reduce(((e,n)=>{const o=n.split("="),t=o[0].trim(),l=o[1].trim();return Object.assign(Object.assign({},e),{[t]:l})}),{}):{}})();return n[e]},g=(e,n,o)=>{if("undefined"!=typeof window&&navigator.cookieEnabled)if(0===o)document.cookie=`${e} = ${n}`;else{const t=new Date;t.setTime(t.getTime()+24*(o||1)*60*60*1e3);const l="expires="+t.toUTCString();document.cookie=`${e} = ${n}; ${l}`}};const h={background:"#fff",button:{borderRadius:"2px",borderWidth:"1px",borderColor:"#1d5fc2",color:"#1d5fc2",fontSize:"16px",lineHeight:"24px",padding:"16px 24px",solid:{background:"#1d5c90",color:"#fff",hover:{background:"#00304d",color:"#fff"}}},containerWidth:"1280px",divideColor:"#ddd",focusOutlineColor:"#4c9aff",h1:{color:"#002033",fontFamily:"Poppins, Arial, sans-serif",fontSize:"30px",fontWeight:"600",lineHeight:"56px"},h2:{color:"#002033",fontFamily:"Poppins, Arial, sans-serif",fontSize:"20px",fontWeight:"500",lineHeight:"24px"},iconColor:"#444",linkColor:"#1d5fc2",text:{color:"#444",fontFamily:"Poppins, Arial, sans-serif",fontSize:"16px",fontWeight:"400",lineHeight:"24px"},toggle:{off:{background:"#ccc",hover:"#999"},on:{background:"#1d5c90",hover:"#00304d"}},zIndex:99999},b=r`
  height: 1px;
  left: -10000px;
  overflow: hidden;
  position: absolute;
  top: auto;
  width: 1px;
`,x=a.div`
  ${({theme:e})=>{var n,o,t,l,i;return r`
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
      font-size: ${null===(t=null==e?void 0:e.text)||void 0===t?void 0:t.fontSize};
      font-weight: ${null===(l=null==e?void 0:e.text)||void 0===l?void 0:l.fontWeight};
      line-height: ${null===(i=null==e?void 0:e.text)||void 0===i?void 0:i.lineHeight};
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
      ${b}
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
`,k=a.span`
  ${({theme:e})=>{var n,o,t,l,i,c,a,d;return r`
    display: inline-block;
    min-height: 24px;
    position: relative;
    left: -4px;

    input {
      ${b}
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
        background: ${null===(l=null===(t=null==e?void 0:e.toggle)||void 0===t?void 0:t.on)||void 0===l?void 0:l.background};
      }
      label::after {
        left: 24px;
      }

      &:hover {
        label::before {
          background: ${null===(c=null===(i=null==e?void 0:e.toggle)||void 0===i?void 0:i.on)||void 0===c?void 0:c.hover};
        }
      }
    }

    &:hover {
      label::before {
        /* outline-color: blue; */
        background: ${null===(d=null===(a=null==e?void 0:e.toggle)||void 0===a?void 0:a.off)||void 0===d?void 0:d.hover};
      }
    }

    input:focus + label {
      outline: transparent;
      box-shadow: ${null==e?void 0:e.focusOutlineColor} 0px 0px 0px 3px;
    }
  `}}
`,_=({id:n,isChecked:o,label:t,onClick:l})=>e.createElement(k,{className:"zen-cc-toggle "+(o?"checked":"")},e.createElement("input",{checked:o,className:"zen-cc-toggle__checkbox",id:n,onChange:e=>l(),type:"checkbox"}),e.createElement("label",{className:"zen-cc-toggle__label",htmlFor:n},t)),y=a.button`
  ${({theme:e})=>{var n,o,t,l,i,c,a,d,s,u,p,v,m,f,g,h,b,x;return e.button.customStyles?r`
          ${e.button.customStyles}
        `:r`
          background: none;
          border-radius: 2px;
          border: ${null===(n=null==e?void 0:e.button)||void 0===n?void 0:n.borderWidth} solid
            ${null===(o=null==e?void 0:e.button)||void 0===o?void 0:o.borderColor};
          color: ${null===(t=null==e?void 0:e.button)||void 0===t?void 0:t.color};
          cursor: pointer;
          display: inline-block;
          font-size: ${null===(l=null==e?void 0:e.button)||void 0===l?void 0:l.fontSize};
          font-weight: ${null===(i=null==e?void 0:e.button)||void 0===i?void 0:i.fontWeight};
          line-height: ${null===(c=null==e?void 0:e.button)||void 0===c?void 0:c.lineHeight};
          margin: 0px;
          padding: ${null===(a=null==e?void 0:e.button)||void 0===a?void 0:a.padding};
          text-decoration: none;
          transition: all 300ms ease 0s;

          &.solid {
            background: ${null===(s=null===(d=null==e?void 0:e.button)||void 0===d?void 0:d.solid)||void 0===s?void 0:s.background};
            color: ${null===(p=null===(u=null==e?void 0:e.button)||void 0===u?void 0:u.solid)||void 0===p?void 0:p.color};

            &:hover {
              background: ${null===(f=null===(m=null===(v=null==e?void 0:e.button)||void 0===v?void 0:v.solid)||void 0===m?void 0:m.hover)||void 0===f?void 0:f.background};
              color: ${null===(b=null===(h=null===(g=null==e?void 0:e.button)||void 0===g?void 0:g.solid)||void 0===h?void 0:h.hover)||void 0===b?void 0:b.color};
            }
          }

          &.hollow {
            &:hover {
              box-shadow: ${null===(x=null==e?void 0:e.button)||void 0===x?void 0:x.borderColor} 0px 0px 0px 1px inset;
            }
          }
        `}}
`,w=({label:n,onClick:o,type:t="solid"})=>e.createElement(y,{className:`zen-cc-button ${t}`,onClick:o},n),z=a.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;

  &:focus {
    outline: 3px solid ${e=>{var n;return null===(n=null==e?void 0:e.theme)||void 0===n?void 0:n.focusOutlineColor}};
  }

  .close__icon::before {
    color: ${e=>{var n;return null===(n=e.theme)||void 0===n?void 0:n.iconColor}};
    content: '\\2716';
    display: block;
    font-size: 32px;
    line-height: 40px;
  }

  .close__label {
    ${b}
  }
`,C=({onClick:n})=>e.createElement(z,{onClick:n},e.createElement("span",{"aria-hidden":"true",className:"close__icon"}),e.createElement("span",{className:"close__label"},"Close")),E=({content:n})=>{const{acceptAll:o,analytics:t,declineAll:i,defaultCookiePreferences:a,functional:r,marketing:d,setAnalytics:s,setFunctional:u,setMarketing:v,showCookieControl:m,updatePreferences:f}=p(),g=c(null);return l((()=>{m&&(s(a.analytics),u(a.functional),v(a.marketing))}),[m]),l((()=>{var e;g.current&&(null===(e=document.getElementById("cc-marketing"))||void 0===e||e.focus())}),[g.current]),m?e.createElement(x,{className:"zen-cc-cc",ref:g},e.createElement("div",{className:"zen-cc-cc__inner"},e.createElement("div",{className:"zen-cc-cc__close"},e.createElement(C,{onClick:()=>f()})),e.createElement("div",{className:"zen-cc-cc__flex"},e.createElement("div",null,n&&e.createElement("div",{className:"zen-cc-cc__content",dangerouslySetInnerHTML:{__html:n}}),e.createElement("fieldset",{className:"zen-cc-cc__toggles"},e.createElement("legend",{className:"zen-cc-cc__legend"},"Set cookie preferences"),e.createElement(_,{id:"cc-marketing",isChecked:d,label:"Marketing",onClick:()=>v((e=>!e))}),e.createElement(_,{id:"cc-functional",isChecked:r,label:"Functional",onClick:()=>u((e=>!e))}),e.createElement(_,{id:"cc-analytics",isChecked:t,label:"Analytics",onClick:()=>s((e=>!e))}))),e.createElement("div",{className:"zen-cc-cc__buttons"},e.createElement("div",{className:"zen-cc-cc__button-wrap"},e.createElement(w,{label:"Accept all",onClick:()=>o(),type:"hollow"})),e.createElement("div",{className:"zen-cc-cc__button-wrap"},e.createElement(w,{label:"Decline all",onClick:()=>i(),type:"hollow"})),e.createElement("div",{className:"zen-cc-cc__button-wrap"},e.createElement(w,{label:"Save preferences",onClick:()=>f()})))))):null},$=a.div`
  ${({theme:e})=>{var n,o,t,l,i,c,a,d,s,u,p,v,m,f,g;return r`
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
      font-size: ${null===(t=null==e?void 0:e.h1)||void 0===t?void 0:t.fontSize};
      font-weight: ${null===(l=null==e?void 0:e.h1)||void 0===l?void 0:l.fontWeight};
      line-height: ${null===(i=null==e?void 0:e.h1)||void 0===i?void 0:i.lineHeight};
      margin: 0;
    }

    .zen-cc-up__section {
      border-bottom: 1px solid ${null==e?void 0:e.divideColor};
      padding: 24px 0;
    }

    .zen-cc-up__heading {
      color: ${null===(c=null==e?void 0:e.h2)||void 0===c?void 0:c.color};
      font-family: ${null===(a=null==e?void 0:e.h2)||void 0===a?void 0:a.fontFamily};
      font-size: ${null===(d=null==e?void 0:e.h2)||void 0===d?void 0:d.fontSize};
      font-weight: ${null===(s=null==e?void 0:e.h2)||void 0===s?void 0:s.fontWeight};
      line-height: ${null===(u=null==e?void 0:e.h2)||void 0===u?void 0:u.lineHeight};
    }

    .zen-cc-up__summary,
    .zen-cc-up__content {
      color: ${null===(p=null==e?void 0:e.text)||void 0===p?void 0:p.color};
      font-family: ${null===(v=null==e?void 0:e.text)||void 0===v?void 0:v.fontFamily};
      font-size: ${null===(m=null==e?void 0:e.text)||void 0===m?void 0:m.fontSize};
      font-weight: ${null===(f=null==e?void 0:e.text)||void 0===f?void 0:f.fontWeight};
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
`,N=({isChecked:n,label:o,onClick:t,summary:l,title:i})=>l||o?e.createElement("div",{className:"zen-cc-up__section"},e.createElement("h3",{className:"zen-cc-up__heading"},i),l&&e.createElement("div",{className:"zen-cc-up__summary",dangerouslySetInnerHTML:{__html:l}}),o&&t&&e.createElement(_,{id:`cp-${o.toLowerCase().replace(/ /g,"-")}`,isChecked:!!n,label:o,onClick:t})):null,P=()=>"undefined"!=typeof window,S=e=>{const[n,o]=t(null),[i,c]=t(null);t((()=>{}));let a=()=>{};l((()=>{document.removeEventListener("keydown",a,!1),(null==n?void 0:n.current)&&(a=(({el:e,escapeFunction:n,focusEl:o})=>{var t;const l=null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, [tabindex="0"], [contenteditable]'),i=l[0],c=l[l.length-1];return((null==o?void 0:o.current)||i).focus(),e=>{"Escape"===e.code&&n&&n(),"Tab"===e.code&&(e.shiftKey&&document.activeElement===i?(e.preventDefault(),null==c||c.focus()):e.shiftKey||document.activeElement!==c||(e.preventDefault(),null==i||i.focus()))}})({el:n,escapeFunction:()=>{r(),e&&e()},focusEl:i}),document.addEventListener("keydown",a,!1))}),[null==n?void 0:n.current,null==i?void 0:i.current]);const r=()=>document.removeEventListener("keydown",a,!1);return l((()=>()=>r()),[]),{initFocustTrap:(e,n)=>{o(e),n&&c(n)},destroyFocusTrap:r}},O=n=>{const{analytics:o,marketing:i,functional:a,setAnalytics:r,setMarketing:d,setFunctional:u,showUpdatePreferences:v,toggleShowUpdatePreferences:m,updatePreferences:f}=p(),g=P()&&document.getElementById("zen-cc-app-root"),h=P()&&document.getElementById("zen-cc-modal-root"),b=P()&&document.getElementById("zen-cc-tup"),{initFocustTrap:x,destroyFocusTrap:k}=S((()=>O())),_=c(null),[y,z]=t(!1),E=e=>{(_.current&&!_.current.contains(e.target)&&v||["A"].includes(e.target.nodeName))&&O()},O=()=>{document.removeEventListener("click",E,!1),z(!1),setTimeout((()=>{k(),m(),g&&(g.setAttribute("tabindex","0"),g.setAttribute("aria-hidden","false")),b&&b.focus()}),400)};return l((()=>{v&&setTimeout((()=>{g&&(g.setAttribute("tabindex","-1"),g.setAttribute("aria-hidden","true")),document.addEventListener("click",E,!1),x(_),z(!0)}),100)}),[v]),l((()=>()=>O()),[]),v&&h?s.createPortal(e.createElement($,{"aria-modal":"true",className:"zen-cc-up "+(y?"open":"closed"),role:"dialog"},e.createElement("div",{className:"zen-cc-up__modal",ref:_},e.createElement("div",{className:"zen-cc-up__inner"},e.createElement("div",{className:"zen-cc-up__close"},e.createElement(C,{onClick:()=>O()})),e.createElement("h2",{className:"zen-cc-up__title"},"Cookie Preferences"),n.content&&e.createElement("div",{className:"zen-cc-up__section",dangerouslySetInnerHTML:{__html:n.content}}),e.createElement(N,{summary:n.necessary,title:"Necessary Cookies"}),e.createElement(N,{isChecked:a,label:"Functional",onClick:()=>u(!a),summary:n.functional,title:"Functional Cookies"}),e.createElement(N,{isChecked:o,label:"Analytics",onClick:()=>r(!o),summary:n.analytics,title:"Analytical Cookies"}),e.createElement(N,{isChecked:i,label:"Marketing",onClick:()=>d(!i),summary:n.marketing,title:"Marketing Cookies"}),e.createElement("div",{className:"zen-cc-up__save"},e.createElement(w,{label:"Save Preferences",onClick:()=>{f(),O()}}))))),h):null},A=({cookieControl:n,defaultCookiePreferences:o,updatePreferences:c,theme:a})=>r=>s=>{var p=
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
function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(o[t[l]]=e[t[l]])}return o}(s,[]);const[v,m]=t(!1),[b,x]=t(!1),[k,_]=t(!1),[y,w]=t(!1),[z,C]=t(!1),[$,N]=t([]);l((()=>{const e=f("zen-cc");if(e){const{analytics:n,functional:o,marketing:t}=JSON.parse(e);m(!!n),x(!!o),_(!!t)}else w(!0)}),[]),l((()=>{if("undefined"!=typeof window&&2===$.length){const e=$[0],n=$[1];$&&Object.keys(e).some((o=>e[o]&&!n[o]))&&window.location.reload(),N((e=>[...e.slice(1)]))}}),[$]);const P=i((()=>({analytics:v,defaultCookiePreferences:o,marketing:k,functional:b,set:({analytics:e,functional:n,marketing:o})=>{m(e),x(n),_(o),w(!1),g("zen-cc",JSON.stringify({analytics:e,functional:n,marketing:o}),90),N((t=>[...t,{analytics:e,functional:n,marketing:o}]))},showCookieControl:y,showUpdatePreferences:z,toggleShowUpdatePreferences:()=>C((e=>!e))})),[v,b,k,y,z]);return e.createElement(u.Provider,{value:P},e.createElement("div",{id:"zen-cc-app-root"},e.createElement(d,{theme:Object.assign(Object.assign({},h),a)},e.createElement(E,Object.assign({},n))),e.createElement(r,Object.assign({},p))),e.createElement("div",{id:"zen-cc-modal-root"}),e.createElement(d,{theme:Object.assign(Object.assign({},h),a)},e.createElement(O,Object.assign({},c))))};export{m as ToggleUpdatePreferences,f as getCookieValue,g as setCookieValue,p as useCookieControl,A as withCookieProvider};
//# sourceMappingURL=index.js.map
