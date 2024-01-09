import{b as et,g as w,e as P,s as h,f as nt,i as p}from"./assets/footer-c23ca7c5.js";import{a as E}from"./assets/vendor-bb737cb9.js";const S=document.getElementById("categories");async function st(){const t=await et();ot(t)}function ot(t){const e=[];for(const n of t){const c=document.createElement("li");c.className="categories-item",c.value=n;const o=document.createElement("button");o.type="button",o.className="categories-btn",o.setAttribute("data-value",n),o.innerText=n.replaceAll("_"," "),c.appendChild(o),e.push(c)}S.append(...e),S.innerHTML+=`
    <li class="categories-item">
      <button class="categories-btn" data-value="">
        Show all
      </button>
    </li>
  `}const ct=document.getElementById("keyword-input"),A=u();A?ct.value=A.keyword:l({keyword:null,category:null,page:1,limit:6});function l(t){localStorage.setItem("filters",JSON.stringify(t))}function u(){return JSON.parse(localStorage.getItem("filters"))}const v=document.getElementById("to-the-start"),y=document.getElementById("previous"),N=document.getElementById("pages-list"),b=document.getElementById("next"),L=document.getElementById("to-the-end");let _=null,f=null,r=1;function at(t){r=t}function m(){return _}function it(t){_=t}function rt(t){const e=[],n=Math.min(m(),f),c=n+r-1,o=t.page-c;o>0&&(r+=o);for(let s=r;s<n+r;s++){let d=function(){l({...t,page:s}),g()};const a=document.createElement("li");a.className="pages-item";const i=document.createElement("button");i.type="button",i.className="circle-btn number-btn "+(t.page===s?"current":""),i.innerHTML=s,i.addEventListener("click",d),a.appendChild(i),e.push(a)}N.innerHTML="",N.append(...e)}function q(){v.classList.add("disabled"),y.classList.add("disabled"),y.removeEventListener("click",H),v.removeEventListener("click",D)}function lt(){v.classList.remove("disabled"),y.classList.remove("disabled"),y.addEventListener("click",H),v.addEventListener("click",D)}function z(){L.classList.add("disabled"),b.classList.add("disabled"),b.removeEventListener("click",W),L.removeEventListener("click",O)}function ut(){L.classList.remove("disabled"),b.classList.remove("disabled"),b.addEventListener("click",W),L.addEventListener("click",O)}function H(){const t=u();t.page--,l(t),r-1===t.page&&r--,t.page===1&&q(),g()}function W(){const t=u();t.page++,l(t);const e=Math.min(m(),f);r+e===t.page&&r++,t.page===m()&&z(),g()}function D(){const t=u();t.page=1,l(t),r=1,g()}function O(){const t=u();t.page=m(),l(t);const e=Math.min(m(),f);r=t.page-e+1,g()}function R(){let t=window.innerWidth;t>=1440?(l({...u(),limit:9}),f=5):t>=768?(l({...u(),limit:8}),f=5):(l({...u(),limit:6}),f=3),g()}const dt="/images/svg/icons.svg#icon-shopping-cart",pt="/images/svg/icons.svg#icon-close";let $;async function C(t){const e=await vt(t),n=ht(e,t);gt(n)}function gt(t){$=basicLightbox.create(t),document.addEventListener("keydown",j)}function j(t){t.key==="Escape"&&($.close(),document.removeEventListener("keydown",j))}function mt(t){const e=t.currentTarget.dataset.id;P(e),h(),ft()}let k;function ft(){const t=k.querySelector("span");t.textContent="Remove from"}function ht({name:t,category:e,size:n,popularity:c,desc:o,price:s,img:a},i){e=e.replace(/_/g," ");let d;return w().includes(i)?d="Remove from":d="Add to",`
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

        <p class="product-description">${o}</p>
        </div>

        <div class="cart-price-panel-container">
            <p class="product-price">$${s}</p>
            <button class="addToCart-button" type="button" data-id="${i}">
                <span>${d}</span>
                <svg class="cart-icon" width="18" height="18">
                    <use href="${dt}"></use>
                </svg>
            </button>
        </div>

        <svg class="close-icon" width="22" height="22">
            <use href="${pt}"></use>
        </svg>
    </div>
    `}async function vt(t){const e=`https://food-boutique.b.goit.study/api/products/${t}`;return(await E.get(e)).data}function I(){$.show();const t=".detailed-product-info-modal-window .close-icon";document.querySelector(t).addEventListener("click",$.close),k=document.querySelector(".detailed-product-info-modal-window .addToCart-button"),k.addEventListener("click",mt)}const yt=document.getElementById("keyword-input"),B=document.getElementById("products"),x=document.getElementById("pages-panel"),J=document.getElementById("previous"),U=document.getElementById("next"),G=document.getElementById("nothing-found");async function g(){const t=u(),e=await bt(t);e.length>0?(Lt(),wt(e)):$t(),t.page===1?q():lt(),t.page===m()?z():ut(),m()<=1?x.classList.add("display-none"):(x.classList.remove("display-none"),rt(t))}async function bt(t){const e=await nt(t);return it(e.data.totalPages),e.data.results}function Lt(){G.classList.add("display-none"),J.classList.remove("display-none"),U.classList.remove("display-none")}function $t(){B.innerHTML="",G.classList.remove("display-none"),J.classList.add("display-none"),U.classList.add("display-none")}function K(){const t=yt.value.trim();l({...u(),keyword:t,page:1}),g()}function wt(t){const e=[];for(const s of t){const a=document.createElement("li");a.className="products-item",a.setAttribute("data-product-id",s._id);let i=`data-product-id="${s._id}"`,d=p+"#icon-shopping-cart",M="";w().includes(s._id)&&(i="",d=p+"#icon-check",M="stroke"),a.innerHTML=`
      <div class="card-img-container">
        <img class="prodact-img" src="${s.img}" alt="${s.name}" />
      </div>
      <h3 class="product-title">${s.name}</h3>
      <div class="properties-and-price-continer">
        <ul class="product-properties-list">
          <li class="product-properties-item">
            Category:
            <span class="property-value">${s.category.replaceAll("_"," ")}</span>
          </li>
          <li class="product-properties-item">
            Size: <span class="property-value">${s.size}</span>
          </li>
          <li class="product-properties-item">
            Popularity: <span class="property-value">${s.popularity}</span>
          </li>
        </ul>

        <div class="price-and-buy-btn">
          <span class="price">$${s.price}</span>
          <button class="circle-btn cart-btn product ${M}" type="button" ${i}>
            <svg class="btn-svg product">
              <use href="${d}"></use>
            </svg>
          </button>
        </div>
      </div>
    `,e.push(a)}B.innerHTML="",B.append(...e);const n=document.querySelectorAll("button[data-product-id]");for(const s of n)s.addEventListener("click",c);function c(s){const a=s.currentTarget,i=a.getAttribute("data-product-id");P(i),h(),a.innerHTML=`
      <svg class="btn-svg product">
        <use href="${p}#icon-check"></use>
      </svg>
    `,a.removeEventListener("click",c),a.classList.add("stroke")}const o=document.querySelectorAll("li.products-item");for(const s of o)s.addEventListener("click",a=>{const i=a.target.nodeName.toLowerCase();i==="button"||i==="svg"||i==="use"||C(s.getAttribute("data-product-id")).then(()=>{I()})})}h();st().then(()=>{R(),g()});const Q=document.getElementById("filters-form"),Pt=document.getElementById("category-select"),T=document.getElementById("categories");Q.addEventListener("submit",V);Q.addEventListener("input",V);async function V(t){t.preventDefault(),at(1),K()}Pt.addEventListener("mousedown",kt);function kt(t){t.preventDefault(),T.classList.toggle("display-none")}T.addEventListener("click",Bt);function Bt(t){const e=t.target;e.nodeName.toLowerCase()==="button"&&(l({...u(),category:e.getAttribute("data-value")}),T.classList.add("display-none"),K())}let F=null;window.addEventListener("resize",Et);function Et(){clearTimeout(F),F=setTimeout(()=>{R()},100)}const X=document.querySelector("ul.popular-products-list");Mt();X.addEventListener("click",Ct);async function Ct(t){let e=t.target;const n=e.nodeName.toLowerCase(),c=e;for(;e&&!e.classList.contains("popular-products-list-item");)e=e.parentElement;const o=e.dataset.id;n==="button"||n==="svg"||n==="use"?(P(o),h(),Tt(c)):(await C(o),I())}const Y=`${p}#icon-check`,It="popular-product-shopping-cart-button";function Tt(t){for(;t&&!t.classList.contains(It);)t=t.parentElement;t.classList.remove("svg-fill-container"),t.classList.add("svg-stroke-container"),t.firstElementChild.firstElementChild.setAttribute("href",Y)}async function Mt(){const t=await At(),e=Nt(t);St(e)}function St(t){X.innerHTML=t}async function At(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await E.get(t)).data}catch(e){console.log(e.message)}}function Nt(t){return t.map(n=>xt(n)).join("")}function xt(t){const e={src:t.img,alt:t.name},n={name:t.name,category:t.category,size:t.size,popularity:t.popularity};return`<li class="popular-products-list-item" data-id="${t._id}">
    ${Ft(e)}
    ${_t(n)}
    ${zt(t._id)}
    </li>`}function Ft({src:t,alt:e}){return`<div class="popular-product-image-container">
    <img src="${t}" alt="${e}" width="56" height="56" />
    </div>`}function _t({name:t,category:e,size:n,popularity:c}){return e=e.replace(/_/g," "),`<div class="popular-product-info-container">
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
    </div>`}const qt=`${p}#icon-shopping-cart`;function zt(t){let e,n;return w().includes(t)?(e=Y,n="svg-stroke-container"):(e=qt,n="svg-fill-container"),`<button class="popular-product-shopping-cart-button ${n}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="12" height="12">
        <use href="${e}"></use>
        </svg>
    </button>`}const Ht=2,Z=document.querySelector("ul.discount-products-list");Rt();Z.addEventListener("click",Wt);async function Wt(t){let e=t.target;const n=e.nodeName.toLowerCase(),c=e;for(;e&&!e.classList.contains("discount-products-list-item");)e=e.parentElement;const o=e.dataset.id;n==="button"||n==="svg"&&t.target.parentElement.nodeName.toLowerCase()==="button"||n==="use"&&t.target.parentElement.nodeName.toLowerCase()==="button"?(P(o),h(),Ot(c)):(await C(o),I())}const tt=`${p}#icon-check`,Dt="discount-product-shopping-cart-button";function Ot(t){for(;t&&!t.classList.contains(Dt);)t=t.parentElement;t.classList.remove("svg-fill-container"),t.classList.add("svg-stroke-container"),t.firstElementChild.firstElementChild.setAttribute("href",tt)}async function Rt(){let t=await jt();t=t.slice(0,Ht);const e=Jt(t);Ut(e)}async function jt(){const t="https://food-boutique.b.goit.study/api/products/discount";try{return(await E.get(t)).data}catch(e){console.log(e.message)}}function Jt(t){return t.map(n=>Kt(n)).join("")}function Ut(t){Z.innerHTML=t}const Gt=`${p}#icon-shopping-cart`;function Kt(t){const e={src:t.img,alt:t.name},n={name:t.name,price:t.price};return`<li class="discount-products-list-item" data-id="${t._id}">
    ${Xt(e)}
    ${Qt(n,t._id)}
    </li>`}function Qt(t,e){return`<div class="discount-product-bottom-panel-container">
    ${Yt(t)}
    ${Zt(e)}
    </div>`}const Vt=`${p}#icon-discount`;function Xt({src:t,alt:e}){return`<div class="discount-product-image-container">
    <img src="${t}" alt="${e}" width="114" height="114" />
        <div class="discount-icon-container">
            <svg class="discount-icon" width="54" height="54">
                <use href="${Vt}"></use>
            </svg>
        </div>
    </div>`}function Yt({name:t,price:e}){return`<div class="discount-product-info-container">
    <span>${t}</span>
    <span>$${e}</span>
    </div>`}function Zt(t){let e,n;return w().includes(t)?(e=tt,n="svg-stroke-container"):(e=Gt,n="svg-fill-container"),`<button class="discount-product-shopping-cart-button ${n}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="18" height="18">
        <use href="${e}"></use>
        </svg>
    </button>`}
//# sourceMappingURL=commonHelpers2.js.map
