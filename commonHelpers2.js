import{b as nt,g as P,i as u,e as k,s as h,f as ot}from"./assets/footer-bb5af028.js";import{a as C}from"./assets/vendor-bb737cb9.js";const A=document.getElementById("categories");async function st(){const t=await nt();ct(t)}function ct(t){const e=[];for(const n of t){const c=document.createElement("li");c.className="categories-item",c.value=n;const s=document.createElement("button");s.type="button",s.className="categories-btn",s.setAttribute("data-value",n),s.innerText=n.replaceAll("_"," "),c.appendChild(s),e.push(c)}A.append(...e),A.innerHTML+=`
    <li class="categories-item">
      <button class="categories-btn" data-value="">
        Show all
      </button>
    </li>
  `}const at=document.getElementById("keyword-input"),x=document.getElementById("category-select"),v=d();v?(at.value=v.keyword,v.category?x.options[0].innerText=v.category.replaceAll("_"," "):x.options[0].innerText="Show all"):l({keyword:null,category:null,page:1,limit:6});function l(t){localStorage.setItem("filters",JSON.stringify(t))}function d(){return JSON.parse(localStorage.getItem("filters"))}const y=document.getElementById("to-the-start"),b=document.getElementById("previous"),N=document.getElementById("pages-list"),L=document.getElementById("next"),$=document.getElementById("to-the-end");let q=null,f=null,r=1;function it(t){r=t}function m(){return q}function rt(t){q=t}function lt(t){const e=[],n=Math.min(m(),f),c=n+r-1,s=t.page-c;s>0&&(r+=s);for(let o=r;o<n+r;o++){let p=function(){l({...t,page:o}),g()};const a=document.createElement("li");a.className="pages-item";const i=document.createElement("button");i.type="button",i.className="circle-btn number-btn "+(t.page===o?"current":""),i.innerHTML=o,i.addEventListener("click",p),a.appendChild(i),e.push(a)}N.innerHTML="",N.append(...e)}function z(){y.classList.add("disabled"),b.classList.add("disabled"),b.removeEventListener("click",W),y.removeEventListener("click",O)}function dt(){y.classList.remove("disabled"),b.classList.remove("disabled"),b.addEventListener("click",W),y.addEventListener("click",O)}function H(){$.classList.add("disabled"),L.classList.add("disabled"),L.removeEventListener("click",D),$.removeEventListener("click",R)}function ut(){$.classList.remove("disabled"),L.classList.remove("disabled"),L.addEventListener("click",D),$.addEventListener("click",R)}function W(){const t=d();t.page--,l(t),r-1===t.page&&r--,t.page===1&&z(),g()}function D(){const t=d();t.page++,l(t);const e=Math.min(m(),f);r+e===t.page&&r++,t.page===m()&&H(),g()}function O(){const t=d();t.page=1,l(t),r=1,g()}function R(){const t=d();t.page=m(),l(t);const e=Math.min(m(),f);r=t.page-e+1,g()}function j(){let t=window.innerWidth;t>=1440?(l({...d(),limit:9}),f=5):t>=768?(l({...d(),limit:8}),f=5):(l({...d(),limit:6}),f=3),g()}const pt=`${u}#icon-shopping-cart`,gt=`${u}#icon-close`;let w;async function I(t){const e=await yt(t),n=vt(e,t);mt(n)}function mt(t){const e={onClose:bt};w=basicLightbox.create(t,e),document.addEventListener("keydown",J)}function J(t){t.key==="Escape"&&(w.close(),document.removeEventListener("keydown",J))}function ft(t){const e=t.currentTarget.dataset.id;k(e),h(),ht()}let B;function ht(){const t=B.querySelector("span");t.textContent="Remove from"}function vt({name:t,category:e,size:n,popularity:c,desc:s,price:o,img:a},i){e=e.replace(/_/g," ");let p;return P().includes(i)?p="Remove from":p="Add to",`
    <div class="detailed-product-info-modal-window">

        <div class="image-container">
            <img class="image" src="${a}" alt="${t}" width="160" height="160"/>
        </div>

        <div class="product-info-container">
        <p class="productName">${t}</p>

        <ul class="product-characteristics-list">
            <li class="product-characteristic"><span class="span">Category:</span> ${e}</li>
            <li class="product-characteristic"><span class="span">Size:</span> ${n}</li>
            <li class="product-characteristic"><span class="span">Popularity:</span> ${c}</li>
        </ul>

        <p class="product-description">${s}</p>
        </div>

        <div class="cart-price-panel-container">
            <p class="product-price">$${o}</p>
            <button class="addToCart-button" type="button" data-id="${i}">
                <span>${p}</span>
                <svg class="cart-icon" width="18" height="18">
                    <use href="${pt}"></use>
                </svg>
            </button>
        </div>

        <svg class="close-icon" width="22" height="22">
            <use href="${gt}"></use>
        </svg>
    </div>
    `}async function yt(t){const e=`https://food-boutique.b.goit.study/api/products/${t}`;return(await C.get(e)).data}function T(){w.show();const t="disableBodyScroll";bodyScrollLock[t](document.body);const e=".detailed-product-info-modal-window .close-icon";document.querySelector(e).addEventListener("click",w.close),B=document.querySelector(".detailed-product-info-modal-window .addToCart-button"),B.addEventListener("click",ft)}function bt(){const t="enableBodyScroll";bodyScrollLock[t](document.body)}const Lt=document.getElementById("keyword-input"),E=document.getElementById("products"),_=document.getElementById("pages-panel"),U=document.getElementById("previous"),G=document.getElementById("next"),K=document.getElementById("nothing-found");async function g(){const t=d(),e=document.getElementById("category-select");t.category?e.options[0].innerText=t.category.replaceAll("_"," "):e.options[0].innerText="Show all";const n=await $t(t);n.length>0?(wt(),kt(n)):Pt(),t.page===1?z():dt(),t.page===m()?H():ut(),m()<=1?_.classList.add("display-none"):(_.classList.remove("display-none"),lt(t))}async function $t(t){const e=await ot(t);return rt(e.data.totalPages),e.data.results}function wt(){K.classList.add("display-none"),U.classList.remove("display-none"),G.classList.remove("display-none")}function Pt(){E.innerHTML="",K.classList.remove("display-none"),U.classList.add("display-none"),G.classList.add("display-none")}function Q(){const t=Lt.value.trim();l({...d(),keyword:t,page:1}),g()}function kt(t){const e=[];for(const o of t){const a=document.createElement("li");a.className="products-item",a.setAttribute("data-product-id",o._id);let i=`data-product-id="${o._id}"`,p=u+"#icon-shopping-cart",M="";P().includes(o._id)&&(i="",p=u+"#icon-check",M="stroke"),a.innerHTML=`
      <div class="card-img-container">
        <img class="prodact-img" src="${o.img}" alt="${o.name}" />
      </div>
      <h3 class="product-title">${o.name}</h3>
      <div class="properties-and-price-continer">
        <ul class="product-properties-list">
          <li class="product-properties-item">
            Category:
            <span class="property-value">${o.category.replaceAll("_"," ")}</span>
          </li>
          <li class="product-properties-item">
            Size: <span class="property-value">${o.size}</span>
          </li>
          <li class="product-properties-item">
            Popularity: <span class="property-value">${o.popularity}</span>
          </li>
        </ul>

        <div class="price-and-buy-btn">
          <span class="price">$${o.price}</span>
          <button class="circle-btn cart-btn product ${M}" type="button" ${i}>
            <svg class="btn-svg product">
              <use href="${p}"></use>
            </svg>
          </button>
        </div>
      </div>
    `,e.push(a)}E.innerHTML="",E.append(...e);const n=document.querySelectorAll("button[data-product-id]");for(const o of n)o.addEventListener("click",c);function c(o){const a=o.currentTarget,i=a.getAttribute("data-product-id");k(i),h(),a.innerHTML=`
      <svg class="btn-svg product">
        <use href="${u}#icon-check"></use>
      </svg>
    `,a.removeEventListener("click",c),a.classList.add("stroke")}const s=document.querySelectorAll("li.products-item");for(const o of s)o.addEventListener("click",a=>{const i=a.target.nodeName.toLowerCase();i==="button"||i==="svg"||i==="use"||I(o.getAttribute("data-product-id")).then(()=>{T()})})}h();st().then(()=>{j(),g()});const V=document.getElementById("filters-form"),Bt=document.getElementById("category-select"),S=document.getElementById("categories");V.addEventListener("submit",X);V.addEventListener("input",X);async function X(t){t.preventDefault(),it(1),Q()}Bt.addEventListener("mousedown",Et);function Et(t){t.preventDefault(),S.classList.toggle("display-none")}S.addEventListener("click",Ct);function Ct(t){const e=t.target;e.nodeName.toLowerCase()==="button"&&(l({...d(),category:e.getAttribute("data-value")}),S.classList.add("display-none"),Q())}let F=null;window.addEventListener("resize",It);function It(){clearTimeout(F),F=setTimeout(()=>{j()},100)}const Y=document.querySelector("ul.popular-products-list");At();Y.addEventListener("click",Tt);async function Tt(t){let e=t.target;const n=e.nodeName.toLowerCase(),c=e;for(;e&&!e.classList.contains("popular-products-list-item");)e=e.parentElement;const s=e.dataset.id;n==="button"||n==="svg"||n==="use"?(k(s),h(),Mt(c)):(await I(s),T())}const Z=`${u}#icon-check`,St="popular-product-shopping-cart-button";function Mt(t){for(;t&&!t.classList.contains(St);)t=t.parentElement;t.classList.remove("svg-fill-container"),t.classList.add("svg-stroke-container"),t.firstElementChild.firstElementChild.setAttribute("href",Z)}async function At(){const t=await Nt(),e=_t(t);xt(e)}function xt(t){Y.innerHTML=t}async function Nt(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await C.get(t)).data}catch(e){console.log(e.message)}}function _t(t){return t.map(n=>Ft(n)).join("")}function Ft(t){const e={src:t.img,alt:t.name},n={name:t.name,category:t.category,size:t.size,popularity:t.popularity};return`<li class="popular-products-list-item" data-id="${t._id}">
    ${qt(e)}
    ${zt(n)}
    ${Wt(t._id)}
    </li>`}function qt({src:t,alt:e}){return`<div class="popular-product-image-container">
    <img src="${t}" alt="${e}" width="56" height="56" />
    </div>`}function zt({name:t,category:e,size:n,popularity:c}){return e=e.replace(/_/g," "),`<div class="popular-product-info-container">
    <p class="popular-product-title">${t}</p>
    <ul class="popular-product-characteristics-list">
        <li class="popular-product-characteristic">
        Category:
        <span class="popular-product-characteristic-value">${e}</span>
        </li>
        <li class="popular-product-characteristic">
        Size:
        <span class="popular-product-characteristic-value">${n}</span>
        </li>
        <li class="popular-product-characteristic">
        Popularity:
        <span class="popular-product-characteristic-value">${c}</span>
        </li>
    </ul>
    </div>`}const Ht=`${u}#icon-shopping-cart`;function Wt(t){let e,n;return P().includes(t)?(e=Z,n="svg-stroke-container"):(e=Ht,n="svg-fill-container"),`<button class="popular-product-shopping-cart-button ${n}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="12" height="12">
        <use href="${e}"></use>
        </svg>
    </button>`}const Dt=2,tt=document.querySelector("ul.discount-products-list");Jt();tt.addEventListener("click",Ot);async function Ot(t){let e=t.target;const n=e.nodeName.toLowerCase(),c=e;for(;e&&!e.classList.contains("discount-products-list-item");)e=e.parentElement;const s=e.dataset.id;n==="button"||n==="svg"&&t.target.parentElement.nodeName.toLowerCase()==="button"||n==="use"&&t.target.parentElement.nodeName.toLowerCase()==="button"?(k(s),h(),jt(c)):(await I(s),T())}const et=`${u}#icon-check`,Rt="discount-product-shopping-cart-button";function jt(t){for(;t&&!t.classList.contains(Rt);)t=t.parentElement;t.classList.remove("svg-fill-container"),t.classList.add("svg-stroke-container"),t.firstElementChild.firstElementChild.setAttribute("href",et)}async function Jt(){let t=await Ut();t=t.slice(0,Dt);const e=Gt(t);Kt(e)}async function Ut(){const t="https://food-boutique.b.goit.study/api/products/discount";try{return(await C.get(t)).data}catch(e){console.log(e.message)}}function Gt(t){return t.map(n=>Vt(n)).join("")}function Kt(t){tt.innerHTML=t}const Qt=`${u}#icon-shopping-cart`;function Vt(t){const e={src:t.img,alt:t.name},n={name:t.name,price:t.price};return`<li class="discount-products-list-item" data-id="${t._id}">
    ${Zt(e)}
    ${Xt(n,t._id)}
    </li>`}function Xt(t,e){return`<div class="discount-product-bottom-panel-container">
    ${te(t)}
    ${ee(e)}
    </div>`}const Yt=`${u}#icon-discount`;function Zt({src:t,alt:e}){return`<div class="discount-product-image-container">
    <img src="${t}" alt="${e}" width="114" height="114" />
        <div class="discount-icon-container">
            <svg class="discount-icon" width="54" height="54">
                <use href="${Yt}"></use>
            </svg>
        </div>
    </div>`}function te({name:t,price:e}){return`<div class="discount-product-info-container">
    <span>${t}</span>
    <span>$${e}</span>
    </div>`}function ee(t){let e,n;return P().includes(t)?(e=et,n="svg-stroke-container"):(e=Qt,n="svg-fill-container"),`<button class="discount-product-shopping-cart-button ${n}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="18" height="18">
        <use href="${e}"></use>
        </svg>
    </button>`}
//# sourceMappingURL=commonHelpers2.js.map
