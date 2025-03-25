/* [create-plugin] version: 5.19.0 */
define(["@grafana/ui","@emotion/css","module","@grafana/runtime","@grafana/data","react"],((e,t,i,a,r,n)=>(()=>{"use strict";var o={7:t=>{t.exports=e},89:e=>{e.exports=t},308:e=>{e.exports=i},531:e=>{e.exports=a},781:e=>{e.exports=r},959:e=>{e.exports=n}},s={};function l(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return o[e](i,i.exports,l),i.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="public/plugins/sa-plugin1-panel/";var u={};l.r(u),l.d(u,{plugin:()=>v});var c=l(308),p=l.n(c);l.p=p()&&p().uri?p().uri.slice(0,p().uri.lastIndexOf("/")+1):"public/plugins/sa-plugin1-panel/";var d=l(781),f=l(959),h=l(89),g=l(7),m=l(531);const x=()=>({wrapper:h.css`
      font-family: Open Sans;
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    `,svgContainer:h.css`
      position: relative;
      width: 100%;
      height: calc(100% - 80px); /* Reserve space for the text box and button */
      overflow: hidden;
      display: flex;
      background-color: #000;
      align-items: center;
      justify-content: center;
    `,svg:h.css`
      width: 100%;
      height: 100%;
      background-color: #000;

      & > div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      & svg {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
      }
    `,controlsContainer:h.css`
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10px;
      display: flex;
      justify-content: center;
      gap: 10px;
      z-index: 10;
    `,jsonDisplay:h.css`
      background: rgba(0, 0, 0, 0.05);
      padding: 8px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 12px;
      max-height: 200px;
      overflow-y: auto;
      white-space: pre-wrap;
    `}),v=new d.PanelPlugin((({options:e,data:t,width:i,height:a,fieldConfig:r,id:n})=>{const o=(0,g.useStyles2)(x),[s,l]=(0,f.useState)("red"),u=(0,f.useRef)(null),[c,p]=(0,f.useState)([]);if(0===t.series.length)return f.createElement(m.PanelDataErrorView,{fieldConfig:r,panelId:n,data:t,needsStringField:!0});var d={};t.series.forEach((e=>{e.fields.forEach((e=>{"id"==e.name&&e.values.forEach(((e,t)=>{d[e]={_index:t}}))}))})),t.series.forEach((e=>{e.fields.forEach((e=>{"id"!=e.name&&e.values.forEach(((t,i)=>{for(var a in d)d[a]._index==i&&(d[a][e.name]=t)}))}))})),(0,f.useEffect)((()=>{c.forEach((e=>{e.id in d&&("text"==e.type&&(e.element.textContent=d[e.id][e.field]+" "+e.unit),"rect"==e.type&&(e.element.style.fill=d[e.id][e.field]?"lime":"#FF0000"))}))}),[d,c]),(0,f.useEffect)((()=>{fetch("/public/plugins/sa-plugin1-panel/img/scada.svg").then((e=>e.text())).then((e=>{u.current&&(u.current.innerHTML=e,b(u.current),v(u.current,s))})).catch((e=>console.error("Error loading SVG:",e)))}),[]);const v=(e,t)=>{if(!e)return;const i=e.querySelector("svg");i&&(i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("preserveAspectRatio","xMidYMid meet"))},b=e=>{if(!e)return;const t=e.querySelectorAll("*");var i=[];t.forEach(((e,t)=>{if("rect"==e.tagName){var a=e.attributes["inkscape:label"];if(a&&a.value.startsWith("%")){var r=a.value.split("@")[1],n=a.value.split("@")[0].replace("%","");i.push({element:e,id:n,field:r,type:"rect"})}}if("text"==e.tagName){var o=e.textContent;if(o.startsWith("%")){n=o.split("@")[0].replace("%",""),r=o.split("@")[1].split("#")[0];var s=o.split("@")[1].split("#")[1];i.push({element:e,id:n,field:r,type:"text",unit:s}),e.textContent=""}}})),p(i)};return f.createElement("div",{className:(0,h.cx)(o.wrapper,h.css`
          width: ${i}px;
          height: ${a}px;
        `)},f.createElement("div",{ref:u,className:o.svgContainer}),f.createElement("div",{className:o.controlsContainer},f.createElement(g.Button,{variant:"primary",onClick:()=>{u.current.querySelectorAll("*").forEach(((e,t)=>{if(e.attributes["inkscape:label"])if("text"==e.tagName){const t=e.querySelector("tspan");if(t){(new Date).getSeconds();t.textContent=(new Date).getSeconds()}}else e.style.fill=s})),l("red"===s?"blue":"red")}},"Change to ","red"===s?"Blue":"Red")))})).setPanelOptions((e=>e.addTextInput({path:"text",name:"Simple text option",description:"Description of panel option",defaultValue:"Default value of text input option"}).addBooleanSwitch({path:"showSeriesCount",name:"Show series counter",defaultValue:!1}).addRadio({path:"seriesCountSize",defaultValue:"sm",name:"Series counter size",settings:{options:[{value:"sm",label:"Small"},{value:"md",label:"Medium"},{value:"lg",label:"Large"}]},showIf:e=>e.showSeriesCount})));return u})()));
//# sourceMappingURL=module.js.map