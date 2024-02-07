import{b as ct,g as f,i as r,e as C,s as g,d as k,f as at}from"./assets/footer-e9cf05b7.js";import{a as T}from"./assets/vendor-bb737cb9.js";const x=document.getElementById("categories");async function it(){const t=await ct();rt(t)}function rt(t){const e=[];for(const n of t){const c=document.createElement("li");c.className="categories-item",c.value=n;const s=document.createElement("button");s.type="button",s.className="categories-btn",s.setAttribute("data-value",n),s.innerText=n.replaceAll("_"," "),c.appendChild(s),e.push(c)}x.append(...e),x.innerHTML+=`
    <li class="categories-item">
      <button class="categories-btn" data-value="">
        Show all
      </button>
    </li>
  `}const lt=document.getElementById("keyword-input"),N=document.getElementById("category-select"),y=d();y?(lt.value=y.keyword,y.category?N.options[0].innerText=y.category.replaceAll("_"," "):N.options[0].innerText="Show all"):u({keyword:null,category:null,page:1,limit:6});function u(t){localStorage.setItem("filters",JSON.stringify(t))}function d(){return JSON.parse(localStorage.getItem("filters"))}const ut=`${r}#icon-shopping-cart`,dt=`${r}#icon-close`;let b;async function E(t){const e=await yt(t),n=vt(e,t);pt(n)}function pt(t){const e={onClose:bt};b=basicLightbox.create(t,e),document.addEventListener("keydown",z)}function z(t){t.key==="Escape"&&(b.close(),document.removeEventListener("keydown",z))}function gt(t){return f().includes(t)}function mt(t){const e=t.currentTarget.dataset.id;gt(e)?(k(e),g(),ht()):(C(e),g(),ft())}let L;function ft(){const t=L.querySelector("span");t.textContent="Remove from"}function ht(){const t=L.querySelector("span");t.textContent="Add to"}function vt({name:t,category:e,size:n,popularity:c,desc:s,price:o,img:a},i){e=e.replace(/_/g," ");let p;return f().includes(i)?p="Remove from":p="Add to",`
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
                    <use href="${ut}"></use>
                </svg>
            </button>
        </div>

        <svg class="close-icon" width="22" height="22">
            <use href="${dt}"></use>
        </svg>
    </div>
    `}async function yt(t){const e=`https://food-boutique.b.goit.study/api/products/${t}`;return(await T.get(e)).data}function S(){b.show();const t="disableBodyScroll";bodyScrollLock[t](document.body);const e=".detailed-product-info-modal-window .close-icon";document.querySelector(e).addEventListener("click",b.close),L=document.querySelector(".detailed-product-info-modal-window .addToCart-button"),L.addEventListener("click",mt)}function bt(){const t="enableBodyScroll";bodyScrollLock[t](document.body)}const Lt=document.getElementById("keyword-input"),I=document.getElementById("products"),F=document.getElementById("pages-panel"),H=document.getElementById("previous"),W=document.getElementById("next"),D=document.getElementById("nothing-found");async function h(){const t=d(),e=document.getElementById("category-select");t.category?e.options[0].innerText=t.category.replaceAll("_"," "):e.options[0].innerText="Show all";const n=await $t(t);n.length>0?(wt(),Bt(n)):Pt(),t.page===1?j():Tt(),t.page===m()?J():Et(),m()<=1?F.classList.add("display-none"):(F.classList.remove("display-none"),kt(t))}async function $t(t){const e=await at(t);return It(e.data.totalPages),e.data.results}function wt(){D.classList.add("display-none"),H.classList.remove("display-none"),W.classList.remove("display-none")}function Pt(){I.innerHTML="",D.classList.remove("display-none"),H.classList.add("display-none"),W.classList.add("display-none")}function O(){const t=Lt.value.trim();u({...d(),keyword:t,page:1}),h()}function Bt(t){const e=[];for(const o of t){const a=document.createElement("li");a.className="products-item",a.setAttribute("data-product-id",o._id);let i=`data-product-id="${o._id}"`,p=r+"#icon-shopping-cart",A="";f().includes(o._id)&&(i="",p=r+"#icon-check",A="stroke"),a.innerHTML=`
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
          <button class="circle-btn cart-btn product ${A}" type="button" ${i}>
            <svg class="btn-svg product">
              <use href="${p}"></use>
            </svg>
          </button>
        </div>
      </div>
    `,e.push(a)}I.innerHTML="",I.append(...e);const n=document.querySelectorAll("button[data-product-id]");for(const o of n)o.addEventListener("click",c);function c(o){const a=o.currentTarget,i=a.getAttribute("data-product-id");C(i),g(),a.innerHTML=`
      <svg class="btn-svg product">
        <use href="${r}#icon-check"></use>
      </svg>
    `,a.removeEventListener("click",c),a.classList.add("stroke")}const s=document.querySelectorAll("li.products-item");for(const o of s)o.addEventListener("click",a=>{const i=a.target.nodeName.toLowerCase();i==="button"||i==="svg"||i==="use"||E(o.getAttribute("data-product-id")).then(()=>{S()})})}const $=document.getElementById("to-the-start"),w=document.getElementById("previous"),_=document.getElementById("pages-list"),P=document.getElementById("next"),B=document.getElementById("to-the-end");let R=null,v=null,l=1;function Ct(t){l=t}function m(){return R}function It(t){R=t}function kt(t){const e=[],n=Math.min(m(),v),c=n+l-1,s=t.page-c;s>0&&(l+=s);for(let o=l;o<n+l;o++){let p=function(){u({...t,page:o}),h()};const a=document.createElement("li");a.className="pages-item";const i=document.createElement("button");i.type="button",i.className="circle-btn number-btn "+(t.page===o?"current":""),i.innerHTML=o,i.addEventListener("click",p),a.appendChild(i),e.push(a)}_.innerHTML="",_.append(...e)}function j(){$.classList.add("disabled"),w.classList.add("disabled"),w.removeEventListener("click",U),$.removeEventListener("click",K)}function Tt(){$.classList.remove("disabled"),w.classList.remove("disabled"),w.addEventListener("click",U),$.addEventListener("click",K)}function J(){B.classList.add("disabled"),P.classList.add("disabled"),P.removeEventListener("click",G),B.removeEventListener("click",Q)}function Et(){B.classList.remove("disabled"),P.classList.remove("disabled"),P.addEventListener("click",G),B.addEventListener("click",Q)}function U(){const t=d();t.page--,u(t),l-1===t.page&&l--,t.page===1&&j(),h()}function G(){const t=d();t.page++,u(t);const e=Math.min(m(),v);l+e===t.page&&l++,t.page===m()&&J(),h()}function K(){const t=d();t.page=1,u(t),l=1,h()}function Q(){const t=d();t.page=m(),u(t);const e=Math.min(m(),v);l=t.page-e+1,h()}function V(){let t=window.innerWidth;t>=1440?(u({...d(),limit:9}),v=5):t>=768?(u({...d(),limit:8}),v=5):(u({...d(),limit:6}),v=3),h()}g();it().then(()=>{V()});const X=document.getElementById("filters-form"),St=document.getElementById("category-select"),M=document.getElementById("categories");X.addEventListener("submit",Y);X.addEventListener("input",Y);async function Y(t){t.preventDefault(),Ct(1),O()}St.addEventListener("mousedown",Mt);function Mt(t){t.preventDefault(),M.classList.toggle("display-none")}M.addEventListener("click",At);function At(t){const e=t.target;e.nodeName.toLowerCase()==="button"&&(u({...d(),category:e.getAttribute("data-value")}),M.classList.add("display-none"),O())}let q=null;window.addEventListener("resize",xt);function xt(){clearTimeout(q),q=setTimeout(()=>{V()},100)}const Z=document.querySelector("ul.popular-products-list");Ht();Z.addEventListener("click",Nt);async function Nt(t){let e=t.target;const n=e.nodeName.toLowerCase(),c=e;for(;e&&!e.classList.contains("popular-products-list-item");)e=e.parentElement;const s=e.dataset.id;n==="button"||n==="svg"||n==="use"?Ft(s)?(k(s),g(),zt(c)):(C(s),g(),_t(c)):(await E(s),S())}function Ft(t){return f().includes(t)}const tt=`${r}#icon-check`,et="popular-product-shopping-cart-button";function _t(t){for(;t&&!t.classList.contains(et);)t=t.parentElement;t.classList.remove("svg-fill-container"),t.classList.add("svg-stroke-container"),t.firstElementChild.firstElementChild.setAttribute("href",tt)}const qt=`${r}#icon-shopping-cart`;function zt(t){for(;t&&!t.classList.contains(et);)t=t.parentElement;t.classList.remove("svg-stroke-container"),t.classList.add("svg-fill-container"),t.firstElementChild.firstElementChild.setAttribute("href",qt)}async function Ht(){const t=await Dt(),e=Ot(t);Wt(e)}function Wt(t){Z.innerHTML=t}async function Dt(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await T.get(t)).data}catch(e){console.log(e.message)}}function Ot(t){return t.map(n=>Rt(n)).join("")}function Rt(t){const e={src:t.img,alt:t.name},n={name:t.name,category:t.category,size:t.size,popularity:t.popularity};return`<li class="popular-products-list-item" data-id="${t._id}">
    ${jt(e)}
    ${Jt(n)}
    ${Gt(t._id)}
    </li>`}function jt({src:t,alt:e}){return`<div class="popular-product-image-container">
    <img src="${t}" alt="${e}" width="56" height="56" />
    </div>`}function Jt({name:t,category:e,size:n,popularity:c}){return e=e.replace(/_/g," "),`<div class="popular-product-info-container">
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
    </div>`}const Ut=`${r}#icon-shopping-cart`;function Gt(t){let e,n;return f().includes(t)?(e=tt,n="svg-stroke-container"):(e=Ut,n="svg-fill-container"),`<button class="popular-product-shopping-cart-button ${n}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="12" height="12">
        <use href="${e}"></use>
        </svg>
    </button>`}const Kt=2,nt=document.querySelector("ul.discount-products-list");te();nt.addEventListener("click",Qt);async function Qt(t){let e=t.target;const n=e.nodeName.toLowerCase(),c=e;for(;e&&!e.classList.contains("discount-products-list-item");)e=e.parentElement;const s=e.dataset.id;n==="button"||n==="svg"&&t.target.parentElement.nodeName.toLowerCase()==="button"||n==="use"&&t.target.parentElement.nodeName.toLowerCase()==="button"?Vt(s)?(k(s),g(),Zt(c)):(C(s),g(),Xt(c)):(await E(s),S())}function Vt(t){return f().includes(t)}const ot=`${r}#icon-check`,st="discount-product-shopping-cart-button";function Xt(t){for(;t&&!t.classList.contains(st);)t=t.parentElement;t.classList.remove("svg-fill-container"),t.classList.add("svg-stroke-container"),t.firstElementChild.firstElementChild.setAttribute("href",ot)}const Yt=`${r}#icon-shopping-cart`;function Zt(t){for(;t&&!t.classList.contains(st);)t=t.parentElement;t.classList.remove("svg-stroke-container"),t.classList.add("svg-fill-container"),t.firstElementChild.firstElementChild.setAttribute("href",Yt)}async function te(){let t=await ee();t=t.slice(0,Kt);const e=ne(t);oe(e)}async function ee(){const t="https://food-boutique.b.goit.study/api/products/discount";try{return(await T.get(t)).data}catch(e){console.log(e.message)}}function ne(t){return t.map(n=>ce(n)).join("")}function oe(t){nt.innerHTML=t}const se=`${r}#icon-shopping-cart`;function ce(t){const e={src:t.img,alt:t.name},n={name:t.name,price:t.price};return`<li class="discount-products-list-item" data-id="${t._id}">
    ${re(e)}
    ${ae(n,t._id)}
    </li>`}function ae(t,e){return`<div class="discount-product-bottom-panel-container">
    ${le(t)}
    ${ue(e)}
    </div>`}const ie=`${r}#icon-discount`;function re({src:t,alt:e}){return`<div class="discount-product-image-container">
    <img src="${t}" alt="${e}" width="114" height="114" />
        <div class="discount-icon-container">
            <svg class="discount-icon" width="54" height="54">
                <use href="${ie}"></use>
            </svg>
        </div>
    </div>`}function le({name:t,price:e}){return`<div class="discount-product-info-container">
    <span>${t}</span>
    <span>$${e}</span>
    </div>`}function ue(t){let e,n;return f().includes(t)?(e=ot,n="svg-stroke-container"):(e=se,n="svg-fill-container"),`<button class="discount-product-shopping-cart-button ${n}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="18" height="18">
        <use href="${e}"></use>
        </svg>
    </button>`}
//# sourceMappingURL=commonHelpers2.js.map
