import{a}from"./vendor-bb737cb9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();r()||l();function r(){return JSON.parse(localStorage.getItem("in-cart"))}function l(e=[]){localStorage.setItem("in-cart",JSON.stringify(e))}function L(e){const s=r();s.includes(e)||l([...s,e])}function P(){l([])}function S(e){const s=r();l(s.filter(n=>n!==e))}function E(){const e=document.getElementById("cart-quantity");e&&(e.innerText=`cart (${r().length})`);const s=document.getElementById("cart-quantity-title");s&&(s.innerText=`cart (${r().length})`)}a.defaults.baseURL="https://food-boutique.b.goit.study/api/";function C(e){return a.get("products",{params:e})}async function k(){return(await a.get("products/categories")).data}async function B(e){return(await a.get(`products/${e}`)).data}const M="/FoodBoutique/images/svg/icons.svg",d="/images/png/vegetables-basket-phone.png",m="/images/png/vegetables-basket-phone@2x.png",f="/images/png/vegetables-basket-tablet.png",h="/images/png/vegetables-basket-tablet@2x.png",b="",y="/images/svg/icons.svg#icon-close";function w(){return`
    <div class="footer-modal-window">
        <p class="title">Thanks for subscribing for <span class="title-span">new</span> products</p>
        <p class="message">We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>

        
        <picture>
            <source srcset="${d}, ${m} 2x">

            <source media="(min-width: 768px)" srcset="${f}, ${h} 2x">
  
            <img class="image" src="${d}" alt="${b}" width="335" height="144"/>
        </picture>

        <svg class="close-icon" width="22" height="22">
            <use href="${y}"></use>
        </svg>
    </div>
    `}const v="/images/svg/icons.svg#icon-close";function x(){return`
    <div class="footer-error-modal-window">
        <p class="title">This <span class="title-span">email address</span> has already been entered</p>
        <p class="message">You have already subscribed to our new products. Watch for offers at the mailing address.</p>

        <svg class="close-icon" width="22" height="22">
            <use href="${v}"></use>
        </svg>
    </div>
    `}const g=document.querySelector("form.subscribe-form");g.addEventListener("submit",I);let u;async function I(e){e.preventDefault();const n={email:document.querySelector("input.subscribe-form-email-field").value};g.reset();const i=await $(n);let t,o;i===201?(t=w(),o=".footer-modal-window .close-icon"):(t=x(),o=".footer-error-modal-window .close-icon"),u=basicLightbox.create(t),u.show(),document.querySelector(o).addEventListener("click",u.close),document.addEventListener("keydown",p)}function p(e){e.key==="Escape"&&(u.close(),document.removeEventListener("keydown",p))}async function $(e){const s="https://food-boutique.b.goit.study/api/subscription";try{return(await a.post(s,e)).status}catch(n){return n.response.status}}export{B as a,k as b,P as c,S as d,L as e,C as f,r as g,M as i,E as s};
//# sourceMappingURL=footer-c23ca7c5.js.map
