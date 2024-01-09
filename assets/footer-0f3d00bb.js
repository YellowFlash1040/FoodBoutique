import{a}from"./vendor-bb737cb9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();r()||l();function r(){return JSON.parse(localStorage.getItem("in-cart"))}function l(e=[]){localStorage.setItem("in-cart",JSON.stringify(e))}function L(e){const s=r();s.includes(e)||l([...s,e])}function P(){l([])}function S(e){const s=r();l(s.filter(n=>n!==e))}function E(){const e=document.getElementById("cart-quantity");e&&(e.innerText=`cart (${r().length})`);const s=document.getElementById("cart-quantity-title");s&&(s.innerText=`cart (${r().length})`)}a.defaults.baseURL="https://food-boutique.b.goit.study/api/";function k(e){return a.get("products",{params:e})}async function C(){return(await a.get("products/categories")).data}async function M(e){return(await a.get(`products/${e}`)).data}const p="/FoodBoutique/images/svg/icons.svg",d="/FoodBoutique/images/png/vegetables-basket-phone.png",g="/FoodBoutique/images/png/vegetables-basket-phone@2x.png",h="/FoodBoutique/images/png/vegetables-basket-tablet.png",b="/FoodBoutique/images/png/vegetables-basket-tablet@2x.png",y="Vegetables-basket",w=`${p}#icon-close`;function v(){return`
    <div class="footer-modal-window">
        <p class="title">Thanks for subscribing for <span class="title-span">new</span> products</p>
        <p class="message">We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>

        
        <picture>
            <source srcset="${d}, ${g} 2x">

            <source media="(min-width: 768px)" srcset="${h}, ${b} 2x">
  
            <img class="image" src="${d}" alt="${y}" width="335" height="144"/>
        </picture>

        <svg class="close-icon" width="22" height="22">
            <use href="${w}"></use>
        </svg>
    </div>
    `}const q=`${p}#icon-close`;function x(){return`
    <div class="footer-error-modal-window">
        <p class="title">This <span class="title-span">email address</span> has already been entered</p>
        <p class="message">You have already subscribed to our new products. Watch for offers at the mailing address.</p>

        <svg class="close-icon" width="22" height="22">
            <use href="${q}"></use>
        </svg>
    </div>
    `}const m=document.querySelector("form.subscribe-form");m.addEventListener("submit",$);let u;async function $(e){e.preventDefault();const n={email:document.querySelector("input.subscribe-form-email-field").value};m.reset();const i=await I(n);let t,o;i===201?(t=v(),o=".footer-modal-window .close-icon"):(t=x(),o=".footer-error-modal-window .close-icon"),u=basicLightbox.create(t),u.show(),document.querySelector(o).addEventListener("click",u.close),document.addEventListener("keydown",f)}function f(e){e.key==="Escape"&&(u.close(),document.removeEventListener("keydown",f))}async function I(e){const s="https://food-boutique.b.goit.study/api/subscription";try{return(await a.post(s,e)).status}catch(n){return n.response.status}}export{M as a,C as b,P as c,S as d,L as e,k as f,r as g,p as i,E as s};
//# sourceMappingURL=footer-0f3d00bb.js.map
