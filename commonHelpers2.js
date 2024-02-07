import{b as lt,i as r,g as m,e as C,s as g,d as k,f as ut}from"./assets/footer-85beda38.js";import{a as E}from"./assets/vendor-bb737cb9.js";const F=document.getElementById("categories");async function dt(){const t=await lt();pt(t)}function pt(t){const e=[];for(const n of t){const i=document.createElement("li");i.className="categories-item",i.value=n;const s=document.createElement("button");s.type="button",s.className="categories-btn",s.setAttribute("data-value",n),s.innerText=n.replaceAll("_"," "),i.appendChild(s),e.push(i)}F.append(...e),F.innerHTML+=`
    <li class="categories-item">
      <button class="categories-btn" data-value="">
        Show all
      </button>
    </li>
  `}const gt=document.getElementById("keyword-input"),_=document.getElementById("category-select"),b=p();b?(gt.value=b.keyword,b.category?_.options[0].innerText=b.category.replaceAll("_"," "):_.options[0].innerText="Show all"):d({keyword:null,category:null,page:1,limit:6});function d(t){localStorage.setItem("filters",JSON.stringify(t))}function p(){return JSON.parse(localStorage.getItem("filters"))}const q=`${r}#icon-check`,H=`${r}#icon-shopping-cart`;function y(t,e){const n=document.querySelectorAll(`li[data-id="${t}"], li[data-product-id="${t}"]`);for(let i of n){let s,l,o,c;e?(s=q,l=H,o="svg-stroke-container",c="svg-fill-container"):(s=H,l=q,o="svg-fill-container",c="svg-stroke-container");const a=i.querySelector(`use[href="${s}"]`);a&&(a.setAttribute("href",l),a.parentElement.parentElement.classList.remove(o),a.parentElement.parentElement.classList.add(c))}}const mt=`${r}#icon-shopping-cart`,ft=`${r}#icon-close`;let L;async function S(t){const e=await wt(t),n=$t(e,t);ht(n)}function ht(t){const e={onClose:Pt};L=basicLightbox.create(t,e),document.addEventListener("keydown",O)}function O(t){t.key==="Escape"&&(L.close(),document.removeEventListener("keydown",O))}function vt(t){return m().includes(t)}function yt(t){const e=t.currentTarget.dataset.id;vt(e)?(k(e),g(),Lt(),y(e,!0)):(C(e),g(),bt(),y(e,!1))}let $;function bt(){const t=$.querySelector("span");t.textContent="Remove from"}function Lt(){const t=$.querySelector("span");t.textContent="Add to"}function $t({name:t,category:e,size:n,popularity:i,desc:s,price:l,img:o},c){e=e.replace(/_/g," ");let a;return m().includes(c)?a="Remove from":a="Add to",`
    <div class="detailed-product-info-modal-window">

        <div class="image-container">
            <img class="image" src="${o}" alt="${t}" width="160" height="160"/>
        </div>

        <div class="product-info-container">
        <p class="productName">${t}</p>

        <ul class="product-characteristics-list">
            <li class="product-characteristic"><span class="span">Category:</span> ${e}</li>
            <li class="product-characteristic"><span class="span">Size:</span> ${n}</li>
            <li class="product-characteristic"><span class="span">Popularity:</span> ${i}</li>
        </ul>

        <p class="product-description">${s}</p>
        </div>

        <div class="cart-price-panel-container">
            <p class="product-price">$${l}</p>
            <button class="addToCart-button" type="button" data-id="${c}">
                <span>${a}</span>
                <svg class="cart-icon" width="18" height="18">
                    <use href="${mt}"></use>
                </svg>
            </button>
        </div>

        <svg class="close-icon" width="22" height="22">
            <use href="${ft}"></use>
        </svg>
    </div>
    `}async function wt(t){const e=`https://food-boutique.b.goit.study/api/products/${t}`;return(await E.get(e)).data}function M(){L.show();const t="disableBodyScroll";bodyScrollLock[t](document.body);const e=".detailed-product-info-modal-window .close-icon";document.querySelector(e).addEventListener("click",L.close),$=document.querySelector(".detailed-product-info-modal-window .addToCart-button"),$.addEventListener("click",yt)}function Pt(){const t="enableBodyScroll";bodyScrollLock[t](document.body)}const It=document.getElementById("keyword-input"),T=document.getElementById("products"),z=document.getElementById("pages-panel"),R=document.getElementById("previous"),j=document.getElementById("next"),J=document.getElementById("nothing-found");async function h(){const t=p(),e=document.getElementById("category-select");t.category?e.options[0].innerText=t.category.replaceAll("_"," "):e.options[0].innerText="Show all";const n=await Bt(t);n.length>0?(Ct(),Tt(n)):kt(),t.page===1?K():At(),t.page===f()?Q():xt(),f()<=1?z.classList.add("display-none"):(z.classList.remove("display-none"),Mt(t))}async function Bt(t){const e=await ut(t);return St(e.data.totalPages),e.data.results}function Ct(){J.classList.add("display-none"),R.classList.remove("display-none"),j.classList.remove("display-none")}function kt(){T.innerHTML="",J.classList.remove("display-none"),R.classList.add("display-none"),j.classList.add("display-none")}function U(){const t=It.value.trim();d({...p(),keyword:t,page:1}),h()}function Tt(t){const e=[];for(const o of t){const c=document.createElement("li");c.className="products-item",c.setAttribute("data-product-id",o._id);let a=`data-product-id="${o._id}"`,x=r+"#icon-shopping-cart",N="";m().includes(o._id)&&(a="",x=r+"#icon-check",N="stroke"),c.innerHTML=`
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
          <button class="circle-btn cart-btn product ${N}" type="button" ${a}>
            <svg class="btn-svg product">
              <use href="${x}"></use>
            </svg>
          </button>
        </div>
      </div>
    `,e.push(c)}T.innerHTML="",T.append(...e);const n=document.querySelectorAll("button[data-product-id]");for(const o of n)o.addEventListener("click",i);function i(o){const c=o.currentTarget,a=c.getAttribute("data-product-id");s(a)?(k(a),g(),c.innerHTML=`
        <svg class="btn-svg product">
          <use href="${r}#icon-shopping-cart"></use>
        </svg>
      `,c.classList.remove("stroke")):(C(a),g(),c.innerHTML=`
        <svg class="btn-svg product">
          <use href="${r}#icon-check"></use>
        </svg>
      `,c.classList.add("stroke"))}function s(o){return m().includes(o)}const l=document.querySelectorAll("li.products-item");for(const o of l)o.addEventListener("click",c=>{const a=c.target.nodeName.toLowerCase();a==="button"||a==="svg"||a==="use"||S(o.getAttribute("data-product-id")).then(()=>{M()})})}const w=document.getElementById("to-the-start"),P=document.getElementById("previous"),D=document.getElementById("pages-list"),I=document.getElementById("next"),B=document.getElementById("to-the-end");let G=null,v=null,u=1;function Et(t){u=t}function f(){return G}function St(t){G=t}function Mt(t){const e=[],n=Math.min(f(),v),i=n+u-1,s=t.page-i;s>0&&(u+=s);for(let l=u;l<n+u;l++){let a=function(){d({...t,page:l}),h()};const o=document.createElement("li");o.className="pages-item";const c=document.createElement("button");c.type="button",c.className="circle-btn number-btn "+(t.page===l?"current":""),c.innerHTML=l,c.addEventListener("click",a),o.appendChild(c),e.push(o)}D.innerHTML="",D.append(...e)}function K(){w.classList.add("disabled"),P.classList.add("disabled"),P.removeEventListener("click",V),w.removeEventListener("click",Y)}function At(){w.classList.remove("disabled"),P.classList.remove("disabled"),P.addEventListener("click",V),w.addEventListener("click",Y)}function Q(){B.classList.add("disabled"),I.classList.add("disabled"),I.removeEventListener("click",X),B.removeEventListener("click",Z)}function xt(){B.classList.remove("disabled"),I.classList.remove("disabled"),I.addEventListener("click",X),B.addEventListener("click",Z)}function V(){const t=p();t.page--,d(t),u-1===t.page&&u--,t.page===1&&K(),h()}function X(){const t=p();t.page++,d(t);const e=Math.min(f(),v);u+e===t.page&&u++,t.page===f()&&Q(),h()}function Y(){const t=p();t.page=1,d(t),u=1,h()}function Z(){const t=p();t.page=f(),d(t);const e=Math.min(f(),v);u=t.page-e+1,h()}function tt(){let t=window.innerWidth;t>=1440?(d({...p(),limit:9}),v=5):t>=768?(d({...p(),limit:8}),v=5):(d({...p(),limit:6}),v=3),h()}g();dt().then(()=>{tt()});const et=document.getElementById("filters-form"),Nt=document.getElementById("category-select"),A=document.getElementById("categories");et.addEventListener("submit",nt);et.addEventListener("input",nt);async function nt(t){t.preventDefault(),Et(1),U()}Nt.addEventListener("mousedown",Ft);function Ft(t){t.preventDefault(),A.classList.toggle("display-none")}A.addEventListener("click",_t);function _t(t){const e=t.target;e.nodeName.toLowerCase()==="button"&&(d({...p(),category:e.getAttribute("data-value")}),A.classList.add("display-none"),U())}let W=null;window.addEventListener("resize",qt);function qt(){clearTimeout(W),W=setTimeout(()=>{tt()},100)}const st=document.querySelector("ul.popular-products-list");Rt();st.addEventListener("click",Ht);async function Ht(t){let e=t.target;const n=e.nodeName.toLowerCase(),i=e;for(;e&&!e.classList.contains("popular-products-list-item");)e=e.parentElement;const s=e.dataset.id;n==="button"||n==="svg"||n==="use"?zt(s)?(k(s),g(),Ot(i),y(s,!0)):(C(s),g(),Dt(i),y(s,!1)):(await S(s),M())}function zt(t){return m().includes(t)}const ot=`${r}#icon-check`,ct="popular-product-shopping-cart-button";function Dt(t){for(;t&&!t.classList.contains(ct);)t=t.parentElement;t.classList.remove("svg-fill-container"),t.classList.add("svg-stroke-container"),t.firstElementChild.firstElementChild.setAttribute("href",ot)}const Wt=`${r}#icon-shopping-cart`;function Ot(t){for(;t&&!t.classList.contains(ct);)t=t.parentElement;t.classList.remove("svg-stroke-container"),t.classList.add("svg-fill-container"),t.firstElementChild.firstElementChild.setAttribute("href",Wt)}async function Rt(){const t=await Jt(),e=Ut(t);jt(e)}function jt(t){st.innerHTML=t}async function Jt(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await E.get(t)).data}catch(e){console.log(e.message)}}function Ut(t){return t.map(n=>Gt(n)).join("")}function Gt(t){const e={src:t.img,alt:t.name},n={name:t.name,category:t.category,size:t.size,popularity:t.popularity};return`<li class="popular-products-list-item" data-id="${t._id}">
    ${Kt(e)}
    ${Qt(n)}
    ${Xt(t._id)}
    </li>`}function Kt({src:t,alt:e}){return`<div class="popular-product-image-container">
    <img src="${t}" alt="${e}" width="56" height="56" />
    </div>`}function Qt({name:t,category:e,size:n,popularity:i}){return e=e.replace(/_/g," "),`<div class="popular-product-info-container">
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
        <span class="popular-product-characteristic-value">${i}</span>
        </li>
    </ul>
    </div>`}const Vt=`${r}#icon-shopping-cart`;function Xt(t){let e,n;return m().includes(t)?(e=ot,n="svg-stroke-container"):(e=Vt,n="svg-fill-container"),`<button class="popular-product-shopping-cart-button ${n}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="12" height="12">
        <use href="${e}"></use>
        </svg>
    </button>`}const Yt=2,at=document.querySelector("ul.discount-products-list");oe();at.addEventListener("click",Zt);async function Zt(t){let e=t.target;const n=e.nodeName.toLowerCase(),i=e;for(;e&&!e.classList.contains("discount-products-list-item");)e=e.parentElement;const s=e.dataset.id;n==="button"||n==="svg"&&t.target.parentElement.nodeName.toLowerCase()==="button"||n==="use"&&t.target.parentElement.nodeName.toLowerCase()==="button"?te(s)?(k(s),g(),se(i),y(s,!0)):(C(s),g(),ee(i),y(s,!1)):(await S(s),M())}function te(t){return m().includes(t)}const it=`${r}#icon-check`,rt="discount-product-shopping-cart-button";function ee(t){for(;t&&!t.classList.contains(rt);)t=t.parentElement;t.classList.remove("svg-fill-container"),t.classList.add("svg-stroke-container"),t.firstElementChild.firstElementChild.setAttribute("href",it)}const ne=`${r}#icon-shopping-cart`;function se(t){for(;t&&!t.classList.contains(rt);)t=t.parentElement;t.classList.remove("svg-stroke-container"),t.classList.add("svg-fill-container"),t.firstElementChild.firstElementChild.setAttribute("href",ne)}async function oe(){let t=await ce();t=t.slice(0,Yt);const e=ae(t);ie(e)}async function ce(){const t="https://food-boutique.b.goit.study/api/products/discount";try{return(await E.get(t)).data}catch(e){console.log(e.message)}}function ae(t){return t.map(n=>le(n)).join("")}function ie(t){at.innerHTML=t}const re=`${r}#icon-shopping-cart`;function le(t){const e={src:t.img,alt:t.name},n={name:t.name,price:t.price};return`<li class="discount-products-list-item" data-id="${t._id}">
    ${pe(e)}
    ${ue(n,t._id)}
    </li>`}function ue(t,e){return`<div class="discount-product-bottom-panel-container">
    ${ge(t)}
    ${me(e)}
    </div>`}const de=`${r}#icon-discount`;function pe({src:t,alt:e}){return`<div class="discount-product-image-container">
    <img src="${t}" alt="${e}" width="114" height="114" />
        <div class="discount-icon-container">
            <svg class="discount-icon" width="54" height="54">
                <use href="${de}"></use>
            </svg>
        </div>
    </div>`}function ge({name:t,price:e}){return`<div class="discount-product-info-container">
    <span>${t}</span>
    <span>$${e}</span>
    </div>`}function me(t){let e,n;return m().includes(t)?(e=it,n="svg-stroke-container"):(e=re,n="svg-fill-container"),`<button class="discount-product-shopping-cart-button ${n}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="18" height="18">
        <use href="${e}"></use>
        </svg>
    </button>`}
//# sourceMappingURL=commonHelpers2.js.map
