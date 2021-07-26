!function(){"use strict";function e(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}function t(e,t){const n=document.querySelector(e);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",t&&clearInterval(t)}window.addEventListener("DOMContentLoaded",(function(){const n=setTimeout((()=>t(".modal",n)),5e4);(function(e,t,n,o){const s=document.querySelectorAll(e),r=document.querySelectorAll(t),a=document.querySelector(n);function c(){r.forEach((e=>{e.classList.add("hide","fade"),e.classList.remove("show")})),s.forEach((e=>{e.classList.remove(o)}))}function i(e=0){r[e].classList.add("show","fade"),r[e].classList.remove("hide"),s[e].classList.add(o)}c(),i(),a.addEventListener("click",(t=>{const n=t.target;n&&n.classList.contains(e.slice(1))&&s.forEach(((e,t)=>{n==e&&(c(),i(t))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,o,s){const r=document.querySelectorAll(n),a=document.querySelector(o);r.forEach((e=>{e.addEventListener("click",(()=>t(o,s)))})),a.addEventListener("click",(t=>{t.target!==a&&""!=t.target.getAttribute("data-close")||e(o)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&a.classList.contains("show")&&e(o)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(t(o,s),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",n),function(e,t){function n(e){return e>=0&&e<10?`0${e}`:e}!function(e,t){const o=document.querySelector(e),s=o.querySelector("#days"),r=o.querySelector("#hours"),a=o.querySelector("#minutes"),c=o.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const e=function(e){const t=Date.parse(e)-Date.parse(new Date);return{total:t,days:Math.floor(t/864e5%24),hours:Math.floor(t/36e5%60),minutes:Math.floor(t/6e4%60),seconds:Math.floor(t/1e3%60)}}(t);e.total<=0&&clearInterval(i),s.innerHTML=n(e.days),r.innerHTML=n(e.hours),a.innerHTML=n(e.minutes),c.innerHTML=n(e.seconds)}l()}(e,t)}(".timer","2021-11-24"),function(){class e{constructor(e,t,n,o,s,r,...a){this.src=e,this.alt=t,this.title=n,this.descr=o,this.price=s,this.classes=a,this.parent=document.querySelector(r),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const e=document.createElement("div");0===this.classes.length?(this.classes="menu__item",e.classList.add(this.classes)):this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,this.parent.append(e)}}(async function(e){let t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((({img:t,altimg:n,title:o,descr:s,price:r})=>{new e(t,n,o,s,r,".menu .container").render()}))}))}(),function(){const e=document.querySelector(".calculating__result span");let t,n,o,s,r;function a(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-radio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function c(){e.textContent=t&&n&&o&&s&&r?"female"==t?Math.round((447.6+9.2*o+3.1*n-4.3*s)*r):Math.round((88.36+13.4*o+4.8*n-5.7*s)*r):"____"}function i(e,n){const o=document.querySelectorAll(e);o.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-radio")?(r=+e.target.getAttribute("data-radio"),localStorage.setItem("ratio",+e.target.getAttribute("data-radio"))):(t=e.target.getAttribute("id"),localStorage.setItem("sex",e.target.getAttribute("id"))),o.forEach((e=>e.classList.remove(n))),e.target.classList.add(n),c()}))}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(e=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":n=+t.value;break;case"weight":o=+t.value;break;case"age":s=+t.value}c()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex","female")),localStorage.getItem("radio")?r=localStorage.getItem("radio"):(r=1.375,localStorage.setItem("ratio",1.375)),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),c(),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age"),c()}(),function(n,o){function s(n){const s=document.querySelector(".modal__dialog");s.classList.add("hide"),t(".modal",o);const r=document.createElement("div");r.classList.add("modal__dialog"),r.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${n}</div>\n            </div>\n        `,document.querySelector(".modal").append(r),setTimeout((()=>{r.remove(),s.classList.add("show"),s.classList.remove("hide"),e(".modal")}),4e3)}document.querySelectorAll(n).forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();let n=document.createElement("img");n.src="./img/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",t.insertAdjacentElement("afterend",n);const o=new FormData(t);(async(e,t)=>{let n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:t});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((e=>{console.log(e),s("Спасибо! Скоро мы с вами свяжемся"),n.remove()})).catch((()=>{s("Что-то пошло не так...")})).finally((()=>{t.reset()}))}))}))}("form",n),function({container:e,slide:t,nextArrow:n,prevArrow:o,totalCounter:s,currentCounter:r,wrapper:a,field:c}){const i=document.querySelectorAll(t),l=document.querySelector(o),d=document.querySelector(n),u=document.querySelector(r),m=document.querySelector(s),h=document.querySelector(a),g=document.querySelector(c),f=window.getComputedStyle(g).width,y=document.querySelector(e);let p=1,v=0;i.length<10?(m.textContent=`0${i.length}`,u.textContent=`0${p}`):(m.textContent=i.length,u.textContent=p),g.style.width=100*i.length+"%",g.style.display="flex",g.style.transition="0.5s all",h.style.overflow="hidden",i.forEach((e=>{e.style.width=g.style.width})),y.style.position="relative";const _=document.createElement("ol"),w=[];_.classList.add(".carousel-indicators"),_.style.cssText="\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 15;\n    display: flex;\n    justify-content: center;\n    margin-right: 15%;\n    margin-left: 15%;\n    list-style: none;\n    ",y.prepend(_);for(let e=0;e<i.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.style.cssText="\n        box-sizing: content-box;\n        flex: 0 1 auto;\n        width: 30px;\n        height: 6px;\n        margin-right: 3px;\n        margin-left: 3px;\n        cursor: pointer;\n        background-color: #fff;\n        background-clip: padding-box;\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        opacity: .5;\n        transition: opacity .6s ease;",0==e&&t.style.opacity,_.append(t),w.push(t)}function L(e){return+e.replace(/\D/g,"")}d.addEventListener("click",(()=>{v===L(f)*(i.length-1)?v=0:v+=L(f),g.style.transform=`translateX(-${v}px)`,p==i.length?p=1:p++,i.length<10?u.textContent=`0${p}`:u.textContent=p,w.forEach((e=>e.style.opacity=".5")),w[p-1].style.opacity=1})),l.addEventListener("click",(()=>{0==v?v=L(f)*(i.length-1):v-=L(f),g.style.transform=`translateX(-${v}px)`,1==p?p=i.length:p--,i.length<10?u.textContent=`0${p}`:u.textContent=p,w.forEach((e=>e.style.opacity=".5")),w[p-1].style.opacity=1})),w.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-slide-to");p=t,v=parseInt(f)*(t-1),g.style.transform=`translateX(-${v}px)`,i.length<10?u.textContent=`0${p}`:u.textContent=p,w.forEach((e=>e.style.opacity=".5")),w[p-1].style.opacity=1}))}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))}();
//# sourceMappingURL=bundle.js.map