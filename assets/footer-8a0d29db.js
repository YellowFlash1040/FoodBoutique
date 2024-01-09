import{a as i}from"./vendor-bb737cb9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();a()||l();function a(){return JSON.parse(localStorage.getItem("in-cart"))}function l(e=[]){localStorage.setItem("in-cart",JSON.stringify(e))}function P(e){const s=a();s.includes(e)||l([...s,e])}function q(){l([])}function S(e){const s=a();l(s.filter(n=>n!==e))}function C(){const e=document.getElementById("cart-quantity");e&&(e.innerText=`cart (${a().length})`);const s=document.getElementById("cart-quantity-title");s&&(s.innerText=`cart (${a().length})`)}i.defaults.baseURL="https://food-boutique.b.goit.study/api/";function L(e){return i.get("products",{params:e})}async function M(){return(await i.get("products/categories")).data}async function O(e){return(await i.get(`products/${e}`)).data}const u="/images/png/vegetables-basket-phone.png",p="/images/png/vegetables-basket-phone@2x.png",g="/images/png/vegetables-basket-tablet.png",m="/images/png/vegetables-basket-tablet@2x.png",f="",h="/images/svg/icons.svg#icon-close";function b(){return`
    <div class="footer-modal-window">
        <p class="title">Thanks for subscribing for <span class="title-span">new</span> products</p>
        <p class="message">We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>

        
        <picture>
            <source srcset="${u}, ${p} 2x">

            <source media="(min-width: 768px)" srcset="${g}, ${m} 2x">
  
            <img class="image" src="${u}" alt="${f}" width="335" height="144"/>
        </picture>

        <svg class="close-icon" width="22" height="22">
            <use href="${h}"></use>
        </svg>
    </div>
    `}const y="/images/svg/icons.svg#icon-close";function w(){return`
    <div class="footer-error-modal-window">
        <p class="title">This <span class="title-span">email address</span> has already been entered</p>
        <p class="message">You have already subscribed to our new products. Watch for offers at the mailing address.</p>

        <svg class="close-icon" width="22" height="22">
            <use href="${y}"></use>
        </svg>
    </div>
    `}const d=document.querySelector("form.subscribe-form");d.addEventListener("submit",v);async function v(e){e.preventDefault();const n={email:document.querySelector("input.subscribe-form-email-field").value};d.reset();const c=await x(n);let t,o;c===201?(t=b(),o=".footer-modal-window .close-icon"):(t=w(),o=".footer-error-modal-window .close-icon");const r=basicLightbox.create(t);r.show(),document.querySelector(o).addEventListener("click",r.close)}async function x(e){const s="https://food-boutique.b.goit.study/api/subscription";try{return(await i.post(s,e)).status}catch(n){return n.response.status}}export{O as a,M as b,q as c,S as d,P as e,L as f,a as g,C as s};
//# sourceMappingURL=footer-8a0d29db.js.map
