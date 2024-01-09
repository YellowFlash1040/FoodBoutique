import{a as i}from"./vendor-bb737cb9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();a()||u();function a(){return JSON.parse(localStorage.getItem("in-cart"))}function u(e=[]){localStorage.setItem("in-cart",JSON.stringify(e))}function P(e){const o=a();o.includes(e)||u([...o,e])}function C(){u([])}function E(e){const o=a();u(o.filter(n=>n!==e))}function M(){const e=document.getElementById("cart-quantity");e&&(e.innerText=`cart (${a().length})`);const o=document.getElementById("cart-quantity-title");o&&(o.innerText=`cart (${a().length})`)}i.defaults.baseURL="https://food-boutique.b.goit.study/api/";function O(e){return i.get("products",{params:e})}async function W(){return(await i.get("products/categories")).data}async function F(e){return(await i.get(`products/${e}`)).data}const p="/FoodBoutique/images/svg/icons.svg",d="/FoodBoutique/images/png/vegetables-basket-phone.png",b="/FoodBoutique/images/png/vegetables-basket-phone@2x.png",h="/FoodBoutique/images/png/vegetables-basket-tablet.png",y="/FoodBoutique/images/png/vegetables-basket-tablet@2x.png",w="Vegetables-basket",v=`${p}#icon-close`;function q(){return`
    <div class="footer-modal-window">
        <p class="title">Thanks for subscribing for <span class="title-span">new</span> products</p>
        <p class="message">We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>

        
        <picture>
            <source srcset="${d}, ${b} 2x">

            <source media="(min-width: 768px)" srcset="${h}, ${y} 2x">
  
            <img class="image" src="${d}" alt="${w}" width="335" height="144"/>
        </picture>

        <svg class="close-icon" width="22" height="22">
            <use href="${v}"></use>
        </svg>
    </div>
    `}const L=`${p}#icon-close`;function S(){return`
    <div class="footer-error-modal-window">
        <p class="title">This <span class="title-span">email address</span> has already been entered</p>
        <p class="message">You have already subscribed to our new products. Watch for offers at the mailing address.</p>

        <svg class="close-icon" width="22" height="22">
            <use href="${L}"></use>
        </svg>
    </div>
    `}const m=document.querySelector("form.subscribe-form");m.addEventListener("submit",x);let l;async function x(e){e.preventDefault();const n={email:document.querySelector("input.subscribe-form-email-field").value};m.reset();const c=await B(n);let t,s;c===201?(t=q(),s=".footer-modal-window .close-icon"):(t=S(),s=".footer-error-modal-window .close-icon");const r={onClose:$};l=basicLightbox.create(t,r);const g="disableBodyScroll";bodyScrollLock[g](document.body),l.show(),document.querySelector(s).addEventListener("click",l.close),document.addEventListener("keydown",f)}function $(){const e="enableBodyScroll";bodyScrollLock[e](document.body)}function f(e){e.key==="Escape"&&(l.close(),document.removeEventListener("keydown",f))}async function B(e){const o="https://food-boutique.b.goit.study/api/subscription";try{return(await i.post(o,e)).status}catch(n){return n.response.status}}export{F as a,W as b,C as c,E as d,P as e,O as f,a as g,p as i,M as s};
//# sourceMappingURL=footer-bb5af028.js.map
