import{b as at,g as m,i as r,e as C,s as g,d as I,f as it}from"./assets/footer-e9cf05b7.js";import{a as T}from"./assets/vendor-bb737cb9.js";const N=document.getElementById("categories");async function rt(){const t=await at();lt(t)}function lt(t){const e=[];for(const n of t){const a=document.createElement("li");a.className="categories-item",a.value=n;const o=document.createElement("button");o.type="button",o.className="categories-btn",o.setAttribute("data-value",n),o.innerText=n.replaceAll("_"," "),a.appendChild(o),e.push(a)}N.append(...e),N.innerHTML+=`
    <li class="categories-item">
      <button class="categories-btn" data-value="">
        Show all
      </button>
    </li>
  `}const ut=document.getElementById("keyword-input"),F=document.getElementById("category-select"),y=d();y?(ut.value=y.keyword,y.category?F.options[0].innerText=y.category.replaceAll("_"," "):F.options[0].innerText="Show all"):u({keyword:null,category:null,page:1,limit:6});function u(t){localStorage.setItem("filters",JSON.stringify(t))}function d(){return JSON.parse(localStorage.getItem("filters"))}const dt=`${r}#icon-shopping-cart`,pt=`${r}#icon-close`;let b;async function E(t){const e=await bt(t),n=yt(e,t);gt(n)}function gt(t){const e={onClose:Lt};b=basicLightbox.create(t,e),document.addEventListener("keydown",z)}function z(t){t.key==="Escape"&&(b.close(),document.removeEventListener("keydown",z))}function mt(t){return m().includes(t)}function ft(t){const e=t.currentTarget.dataset.id;mt(e)?(I(e),g(),vt()):(C(e),g(),ht())}let L;function ht(){const t=L.querySelector("span");t.textContent="Remove from"}function vt(){const t=L.querySelector("span");t.textContent="Add to"}function yt({name:t,category:e,size:n,popularity:a,desc:o,price:p,img:s},c){e=e.replace(/_/g," ");let i;return m().includes(c)?i="Remove from":i="Add to",`
    <div class="detailed-product-info-modal-window">

        <div class="image-container">
            <img class="image" src="${s}" alt="${t}" width="160" height="160"/>
        </div>

        <div class="product-info-container">
        <p class="productName">${t}</p>

        <ul class="product-characteristics-list">
            <li class="product-characteristic"><span class="span">Category:</span> ${e}</li>
            <li class="product-characteristic"><span class="span">Size:</span> ${n}</li>
            <li class="product-characteristic"><span class="span">Popularity:</span> ${a}</li>
        </ul>

        <p class="product-description">${o}</p>
        </div>

        <div class="cart-price-panel-container">
            <p class="product-price">$${p}</p>
            <button class="addToCart-button" type="button" data-id="${c}">
                <span>${i}</span>
                <svg class="cart-icon" width="18" height="18">
                    <use href="${dt}"></use>
                </svg>
            </button>
        </div>

        <svg class="close-icon" width="22" height="22">
            <use href="${pt}"></use>
        </svg>
    </div>
    `}async function bt(t){const e=`https://food-boutique.b.goit.study/api/products/${t}`;return(await T.get(e)).data}function S(){b.show();const t="disableBodyScroll";bodyScrollLock[t](document.body);const e=".detailed-product-info-modal-window .close-icon";document.querySelector(e).addEventListener("click",b.close),L=document.querySelector(".detailed-product-info-modal-window .addToCart-button"),L.addEventListener("click",ft)}function Lt(){const t="enableBodyScroll";bodyScrollLock[t](document.body)}const $t=document.getElementById("keyword-input"),k=document.getElementById("products"),_=document.getElementById("pages-panel"),W=document.getElementById("previous"),D=document.getElementById("next"),O=document.getElementById("nothing-found");async function h(){const t=d(),e=document.getElementById("category-select");t.category?e.options[0].innerText=t.category.replaceAll("_"," "):e.options[0].innerText="Show all";const n=await wt(t);n.length>0?(Pt(),Ct(n)):Bt(),t.page===1?J():Et(),t.page===f()?U():St(),f()<=1?_.classList.add("display-none"):(_.classList.remove("display-none"),Tt(t))}async function wt(t){const e=await it(t);return kt(e.data.totalPages),e.data.results}function Pt(){O.classList.add("display-none"),W.classList.remove("display-none"),D.classList.remove("display-none")}function Bt(){k.innerHTML="",O.classList.remove("display-none"),W.classList.add("display-none"),D.classList.add("display-none")}function R(){const t=$t.value.trim();u({...d(),keyword:t,page:1}),h()}function Ct(t){const e=[];for(const s of t){const c=document.createElement("li");c.className="products-item",c.setAttribute("data-product-id",s._id);let i=`data-product-id="${s._id}"`,A=r+"#icon-shopping-cart",x="";m().includes(s._id)&&(i="",A=r+"#icon-check",x="stroke"),c.innerHTML=`
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
          <button class="circle-btn cart-btn product ${x}" type="button" ${i}>
            <svg class="btn-svg product">
              <use href="${A}"></use>
            </svg>
          </button>
        </div>
      </div>
    `,e.push(c)}k.innerHTML="",k.append(...e);const n=document.querySelectorAll("button[data-product-id]");for(const s of n)s.addEventListener("click",a);function a(s){const c=s.currentTarget,i=c.getAttribute("data-product-id");o(i)?(I(i),g(),c.innerHTML=`
        <svg class="btn-svg product">
          <use href="${r}#icon-shopping-cart"></use>
        </svg>
      `,c.classList.remove("stroke")):(C(i),g(),c.innerHTML=`
        <svg class="btn-svg product">
          <use href="${r}#icon-check"></use>
        </svg>
      `,c.classList.add("stroke"))}function o(s){return m().includes(s)}const p=document.querySelectorAll("li.products-item");for(const s of p)s.addEventListener("click",c=>{const i=c.target.nodeName.toLowerCase();i==="button"||i==="svg"||i==="use"||E(s.getAttribute("data-product-id")).then(()=>{S()})})}const $=document.getElementById("to-the-start"),w=document.getElementById("previous"),q=document.getElementById("pages-list"),P=document.getElementById("next"),B=document.getElementById("to-the-end");let j=null,v=null,l=1;function It(t){l=t}function f(){return j}function kt(t){j=t}function Tt(t){const e=[],n=Math.min(f(),v),a=n+l-1,o=t.page-a;o>0&&(l+=o);for(let p=l;p<n+l;p++){let i=function(){u({...t,page:p}),h()};const s=document.createElement("li");s.className="pages-item";const c=document.createElement("button");c.type="button",c.className="circle-btn number-btn "+(t.page===p?"current":""),c.innerHTML=p,c.addEventListener("click",i),s.appendChild(c),e.push(s)}q.innerHTML="",q.append(...e)}function J(){$.classList.add("disabled"),w.classList.add("disabled"),w.removeEventListener("click",G),$.removeEventListener("click",Q)}function Et(){$.classList.remove("disabled"),w.classList.remove("disabled"),w.addEventListener("click",G),$.addEventListener("click",Q)}function U(){B.classList.add("disabled"),P.classList.add("disabled"),P.removeEventListener("click",K),B.removeEventListener("click",V)}function St(){B.classList.remove("disabled"),P.classList.remove("disabled"),P.addEventListener("click",K),B.addEventListener("click",V)}function G(){const t=d();t.page--,u(t),l-1===t.page&&l--,t.page===1&&J(),h()}function K(){const t=d();t.page++,u(t);const e=Math.min(f(),v);l+e===t.page&&l++,t.page===f()&&U(),h()}function Q(){const t=d();t.page=1,u(t),l=1,h()}function V(){const t=d();t.page=f(),u(t);const e=Math.min(f(),v);l=t.page-e+1,h()}function X(){let t=window.innerWidth;t>=1440?(u({...d(),limit:9}),v=5):t>=768?(u({...d(),limit:8}),v=5):(u({...d(),limit:6}),v=3),h()}g();rt().then(()=>{X()});const Y=document.getElementById("filters-form"),Mt=document.getElementById("category-select"),M=document.getElementById("categories");Y.addEventListener("submit",Z);Y.addEventListener("input",Z);async function Z(t){t.preventDefault(),It(1),R()}Mt.addEventListener("mousedown",At);function At(t){t.preventDefault(),M.classList.toggle("display-none")}M.addEventListener("click",xt);function xt(t){const e=t.target;e.nodeName.toLowerCase()==="button"&&(u({...d(),category:e.getAttribute("data-value")}),M.classList.add("display-none"),R())}let H=null;window.addEventListener("resize",Nt);function Nt(){clearTimeout(H),H=setTimeout(()=>{X()},100)}const tt=document.querySelector("ul.popular-products-list");Wt();tt.addEventListener("click",Ft);async function Ft(t){let e=t.target;const n=e.nodeName.toLowerCase(),a=e;for(;e&&!e.classList.contains("popular-products-list-item");)e=e.parentElement;const o=e.dataset.id;n==="button"||n==="svg"||n==="use"?_t(o)?(I(o),g(),zt(a)):(C(o),g(),qt(a)):(await E(o),S())}function _t(t){return m().includes(t)}const et=`${r}#icon-check`,nt="popular-product-shopping-cart-button";function qt(t){for(;t&&!t.classList.contains(nt);)t=t.parentElement;t.classList.remove("svg-fill-container"),t.classList.add("svg-stroke-container"),t.firstElementChild.firstElementChild.setAttribute("href",et)}const Ht=`${r}#icon-shopping-cart`;function zt(t){for(;t&&!t.classList.contains(nt);)t=t.parentElement;t.classList.remove("svg-stroke-container"),t.classList.add("svg-fill-container"),t.firstElementChild.firstElementChild.setAttribute("href",Ht)}async function Wt(){const t=await Ot(),e=Rt(t);Dt(e)}function Dt(t){tt.innerHTML=t}async function Ot(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await T.get(t)).data}catch(e){console.log(e.message)}}function Rt(t){return t.map(n=>jt(n)).join("")}function jt(t){const e={src:t.img,alt:t.name},n={name:t.name,category:t.category,size:t.size,popularity:t.popularity};return`<li class="popular-products-list-item" data-id="${t._id}">
    ${Jt(e)}
    ${Ut(n)}
    ${Kt(t._id)}
    </li>`}function Jt({src:t,alt:e}){return`<div class="popular-product-image-container">
    <img src="${t}" alt="${e}" width="56" height="56" />
    </div>`}function Ut({name:t,category:e,size:n,popularity:a}){return e=e.replace(/_/g," "),`<div class="popular-product-info-container">
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
        <span class="popular-product-characteristic-value">${a}</span>
        </li>
    </ul>
    </div>`}const Gt=`${r}#icon-shopping-cart`;function Kt(t){let e,n;return m().includes(t)?(e=et,n="svg-stroke-container"):(e=Gt,n="svg-fill-container"),`<button class="popular-product-shopping-cart-button ${n}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="12" height="12">
        <use href="${e}"></use>
        </svg>
    </button>`}const Qt=2,st=document.querySelector("ul.discount-products-list");ee();st.addEventListener("click",Vt);async function Vt(t){let e=t.target;const n=e.nodeName.toLowerCase(),a=e;for(;e&&!e.classList.contains("discount-products-list-item");)e=e.parentElement;const o=e.dataset.id;n==="button"||n==="svg"&&t.target.parentElement.nodeName.toLowerCase()==="button"||n==="use"&&t.target.parentElement.nodeName.toLowerCase()==="button"?Xt(o)?(I(o),g(),te(a)):(C(o),g(),Yt(a)):(await E(o),S())}function Xt(t){return m().includes(t)}const ot=`${r}#icon-check`,ct="discount-product-shopping-cart-button";function Yt(t){for(;t&&!t.classList.contains(ct);)t=t.parentElement;t.classList.remove("svg-fill-container"),t.classList.add("svg-stroke-container"),t.firstElementChild.firstElementChild.setAttribute("href",ot)}const Zt=`${r}#icon-shopping-cart`;function te(t){for(;t&&!t.classList.contains(ct);)t=t.parentElement;t.classList.remove("svg-stroke-container"),t.classList.add("svg-fill-container"),t.firstElementChild.firstElementChild.setAttribute("href",Zt)}async function ee(){let t=await ne();t=t.slice(0,Qt);const e=se(t);oe(e)}async function ne(){const t="https://food-boutique.b.goit.study/api/products/discount";try{return(await T.get(t)).data}catch(e){console.log(e.message)}}function se(t){return t.map(n=>ae(n)).join("")}function oe(t){st.innerHTML=t}const ce=`${r}#icon-shopping-cart`;function ae(t){const e={src:t.img,alt:t.name},n={name:t.name,price:t.price};return`<li class="discount-products-list-item" data-id="${t._id}">
    ${le(e)}
    ${ie(n,t._id)}
    </li>`}function ie(t,e){return`<div class="discount-product-bottom-panel-container">
    ${ue(t)}
    ${de(e)}
    </div>`}const re=`${r}#icon-discount`;function le({src:t,alt:e}){return`<div class="discount-product-image-container">
    <img src="${t}" alt="${e}" width="114" height="114" />
        <div class="discount-icon-container">
            <svg class="discount-icon" width="54" height="54">
                <use href="${re}"></use>
            </svg>
        </div>
    </div>`}function ue({name:t,price:e}){return`<div class="discount-product-info-container">
    <span>${t}</span>
    <span>$${e}</span>
    </div>`}function de(t){let e,n;return m().includes(t)?(e=ot,n="svg-stroke-container"):(e=ce,n="svg-fill-container"),`<button class="discount-product-shopping-cart-button ${n}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="18" height="18">
        <use href="${e}"></use>
        </svg>
    </button>`}
//# sourceMappingURL=commonHelpers2.js.map
