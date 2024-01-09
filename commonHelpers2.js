import{b as Z,g as L,e as $,s as f,f as tt}from"./assets/footer-8a0d29db.js";import{a as B}from"./assets/vendor-bb737cb9.js";const M=document.getElementById("categories");async function et(){const t=await Z();st(t)}function st(t){const e=[];for(const s of t){const a=document.createElement("li");a.className="categories-item",a.value=s;const o=document.createElement("button");o.type="button",o.className="categories-btn",o.setAttribute("data-value",s),o.innerText=s.replaceAll("_"," "),a.appendChild(o),e.push(a)}M.append(...e),M.innerHTML+=`
    <li class="categories-item">
      <button class="categories-btn" data-value="">
        Show all
      </button>
    </li>
  `}const nt=document.getElementById("keyword-input"),S=u();S?nt.value=S.keyword:l({keyword:null,category:null,page:1,limit:6});function l(t){localStorage.setItem("filters",JSON.stringify(t))}function u(){return JSON.parse(localStorage.getItem("filters"))}const v=document.getElementById("to-the-start"),h=document.getElementById("previous"),A=document.getElementById("pages-list"),b=document.getElementById("next"),y=document.getElementById("to-the-end");let F=null,m=null,r=1;function ot(t){r=t}function g(){return F}function at(t){F=t}function ct(t){const e=[],s=Math.min(g(),m),a=s+r-1,o=t.page-a;o>0&&(r+=o);for(let n=r;n<s+r;n++){let d=function(){l({...t,page:n}),p()};const c=document.createElement("li");c.className="pages-item";const i=document.createElement("button");i.type="button",i.className="circle-btn number-btn "+(t.page===n?"current":""),i.innerHTML=n,i.addEventListener("click",d),c.appendChild(i),e.push(c)}A.innerHTML="",A.append(...e)}function _(){v.classList.add("disabled"),h.classList.add("disabled"),h.removeEventListener("click",z),v.removeEventListener("click",W)}function it(){v.classList.remove("disabled"),h.classList.remove("disabled"),h.addEventListener("click",z),v.addEventListener("click",W)}function q(){y.classList.add("disabled"),b.classList.add("disabled"),b.removeEventListener("click",H),y.removeEventListener("click",D)}function rt(){y.classList.remove("disabled"),b.classList.remove("disabled"),b.addEventListener("click",H),y.addEventListener("click",D)}function z(){const t=u();t.page--,l(t),r-1===t.page&&r--,t.page===1&&_(),p()}function H(){const t=u();t.page++,l(t);const e=Math.min(g(),m);r+e===t.page&&r++,t.page===g()&&q(),p()}function W(){const t=u();t.page=1,l(t),r=1,p()}function D(){const t=u();t.page=g(),l(t);const e=Math.min(g(),m);r=t.page-e+1,p()}function O(){let t=window.innerWidth;t>=1440?(l({...u(),limit:9}),m=5):t>=768?(l({...u(),limit:8}),m=5):(l({...u(),limit:6}),m=3),p()}const lt="/images/svg/icons.svg#icon-shopping-cart",ut="/images/svg/icons.svg#icon-close";let w;async function C(t){const e=await ft(t),s=mt(e,t);dt(s)}function dt(t){w=basicLightbox.create(t)}function pt(t){const e=t.currentTarget.dataset.id;$(e),f(),gt()}let P;function gt(){const t=P.querySelector("span");t.textContent="Remove from"}function mt({name:t,category:e,size:s,popularity:a,desc:o,price:n,img:c},i){e=e.replace(/_/g," ");let d;return L().includes(i)?d="Remove from":d="Add to",`
    <div class="detailed-product-info-modal-window">

        <div class="image-container">
            <img class="image" src="${c}" alt="${t}" width="160" height="160"/>
        </div>

        <div class="product-info-container">
        <p class="productName">${t}</p>

        <ul class="product-characteristics-list">
            <li class="product-characteristic"><span class="span">Category:</span> ${e}</li>
            <li class="product-characteristic"><span class="span">Size:</span> ${s}</li>
            <li class="product-characteristic"><span class="span">Popularity:</span> ${a}</li>
        </ul>

        <p class="product-description">${o}</p>
        </div>

        <div class="cart-price-panel-container">
            <p class="product-price">$${n}</p>
            <button class="addToCart-button" type="button" data-id="${i}">
                <span>${d}</span>
                <svg class="cart-icon" width="18" height="18">
                    <use href="${lt}"></use>
                </svg>
            </button>
        </div>

        <svg class="close-icon" width="22" height="22">
            <use href="${ut}"></use>
        </svg>
    </div>
    `}async function ft(t){const e=`https://food-boutique.b.goit.study/api/products/${t}`;return(await B.get(e)).data}function E(){w.show();const t=".detailed-product-info-modal-window .close-icon";document.querySelector(t).addEventListener("click",w.close),P=document.querySelector(".detailed-product-info-modal-window .addToCart-button"),P.addEventListener("click",pt)}const vt=document.getElementById("keyword-input"),k=document.getElementById("products"),N=document.getElementById("pages-panel"),R=document.getElementById("previous"),j=document.getElementById("next"),J=document.getElementById("nothing-found");async function p(){const t=u(),e=await ht(t);e.length>0?(bt(),Lt(e)):yt(),t.page===1?_():it(),t.page===g()?q():rt(),g()<=1?N.classList.add("display-none"):(N.classList.remove("display-none"),ct(t))}async function ht(t){const e=await tt(t);return at(e.data.totalPages),e.data.results}function bt(){J.classList.add("display-none"),R.classList.remove("display-none"),j.classList.remove("display-none")}function yt(){k.innerHTML="",J.classList.remove("display-none"),R.classList.add("display-none"),j.classList.add("display-none")}function U(){const t=vt.value.trim();l({...u(),keyword:t,page:1}),p()}function Lt(t){const e=[];for(const n of t){const c=document.createElement("li");c.className="products-item",c.setAttribute("data-product-id",n._id);let i=`data-product-id="${n._id}"`,d="/images/svg/icons.svg#icon-shopping-cart",T="";L().includes(n._id)&&(i="",d="/images/svg/icons.svg#icon-check",T="stroke"),c.innerHTML=`
      <div class="card-img-container">
        <img class="prodact-img" src="${n.img}" alt="${n.name}" />
      </div>
      <h3 class="product-title">${n.name}</h3>
      <div class="properties-and-price-continer">
        <ul class="product-properties-list">
          <li class="product-properties-item">
            Category:
            <span class="property-value">${n.category.replaceAll("_"," ")}</span>
          </li>
          <li class="product-properties-item">
            Size: <span class="property-value">${n.size}</span>
          </li>
          <li class="product-properties-item">
            Popularity: <span class="property-value">${n.popularity}</span>
          </li>
        </ul>

        <div class="price-and-buy-btn">
          <span class="price">$${n.price}</span>
          <button class="circle-btn cart-btn product ${T}" type="button" ${i}>
            <svg class="btn-svg product">
              <use href="${d}"></use>
            </svg>
          </button>
        </div>
      </div>
    `,e.push(c)}k.innerHTML="",k.append(...e);const s=document.querySelectorAll("button[data-product-id]");for(const n of s)n.addEventListener("click",a);function a(n){const c=n.currentTarget,i=c.getAttribute("data-product-id");$(i),f(),c.innerHTML=`
      <svg class="btn-svg product">
        <use href="/images/svg/icons.svg#icon-check"></use>
      </svg>
    `,c.removeEventListener("click",a),c.classList.add("stroke")}const o=document.querySelectorAll("li.products-item");for(const n of o)n.addEventListener("click",c=>{const i=c.target.nodeName.toLowerCase();i==="button"||i==="svg"||i==="use"||C(n.getAttribute("data-product-id")).then(()=>{E()})})}f();et().then(()=>{O(),p()});const G=document.getElementById("filters-form"),$t=document.getElementById("category-select"),I=document.getElementById("categories");G.addEventListener("submit",K);G.addEventListener("input",K);async function K(t){t.preventDefault(),ot(1),U()}$t.addEventListener("mousedown",wt);function wt(t){t.preventDefault(),I.classList.toggle("display-none")}I.addEventListener("click",Pt);function Pt(t){const e=t.target;e.nodeName.toLowerCase()==="button"&&(l({...u(),category:e.getAttribute("data-value")}),I.classList.add("display-none"),U())}let x=null;window.addEventListener("resize",kt);function kt(){clearTimeout(x),x=setTimeout(()=>{O()},100)}const Q=document.querySelector("ul.popular-products-list");It();Q.addEventListener("click",Bt);async function Bt(t){let e=t.target;const s=e.nodeName.toLowerCase(),a=e;for(;e&&!e.classList.contains("popular-products-list-item");)e=e.parentElement;const o=e.dataset.id;s==="button"||s==="svg"||s==="use"?($(o),f(),Et(a)):(await C(o),E())}const V="/images/svg/icons.svg#icon-check",Ct="popular-product-shopping-cart-button";function Et(t){for(;t&&!t.classList.contains(Ct);)t=t.parentElement;t.classList.remove("svg-fill-container"),t.classList.add("svg-stroke-container"),t.firstElementChild.firstElementChild.setAttribute("href",V)}async function It(){const t=await Mt(),e=St(t);Tt(e)}function Tt(t){Q.innerHTML=t}async function Mt(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await B.get(t)).data}catch(e){console.log(e.message)}}function St(t){return t.map(s=>At(s)).join("")}function At(t){const e={src:t.img,alt:t.name},s={name:t.name,category:t.category,size:t.size,popularity:t.popularity};return`<li class="popular-products-list-item" data-id="${t._id}">
    ${Nt(e)}
    ${xt(s)}
    ${_t(t._id)}
    </li>`}function Nt({src:t,alt:e}){return`<div class="popular-product-image-container">
    <img src="${t}" alt="${e}" width="56" height="56" />
    </div>`}function xt({name:t,category:e,size:s,popularity:a}){return e=e.replace(/_/g," "),`<div class="popular-product-info-container">
    <p class="popular-product-title">${t}</p>
    <ul class="popular-product-characteristics-list">
        <li class="popular-product-characteristic">
        Category:
        <span class="popular-product-characteristic-value">${e}</span>
        </li>
        <li class="popular-product-characteristic">
        Size:
        <span class="popular-product-characteristic-value">${s}</span>
        </li>
        <li class="popular-product-characteristic">
        Popularity:
        <span class="popular-product-characteristic-value">${a}</span>
        </li>
    </ul>
    </div>`}const Ft="/images/svg/icons.svg#icon-shopping-cart";function _t(t){let e,s;return L().includes(t)?(e=V,s="svg-stroke-container"):(e=Ft,s="svg-fill-container"),`<button class="popular-product-shopping-cart-button ${s}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="12" height="12">
        <use href="${e}"></use>
        </svg>
    </button>`}const qt=2,X=document.querySelector("ul.discount-products-list");Dt();X.addEventListener("click",zt);async function zt(t){let e=t.target;const s=e.nodeName.toLowerCase(),a=e;for(;e&&!e.classList.contains("discount-products-list-item");)e=e.parentElement;const o=e.dataset.id;s==="button"||s==="svg"&&t.target.parentElement.nodeName.toLowerCase()==="button"||s==="use"&&t.target.parentElement.nodeName.toLowerCase()==="button"?($(o),f(),Wt(a)):(await C(o),E())}const Y="/images/svg/icons.svg#icon-check",Ht="discount-product-shopping-cart-button";function Wt(t){for(;t&&!t.classList.contains(Ht);)t=t.parentElement;t.classList.remove("svg-fill-container"),t.classList.add("svg-stroke-container"),t.firstElementChild.firstElementChild.setAttribute("href",Y)}async function Dt(){let t=await Ot();t=t.slice(0,qt);const e=Rt(t);jt(e)}async function Ot(){const t="https://food-boutique.b.goit.study/api/products/discount";try{return(await B.get(t)).data}catch(e){console.log(e.message)}}function Rt(t){return t.map(s=>Ut(s)).join("")}function jt(t){X.innerHTML=t}const Jt="/images/svg/icons.svg#icon-shopping-cart";function Ut(t){const e={src:t.img,alt:t.name},s={name:t.name,price:t.price};return`<li class="discount-products-list-item" data-id="${t._id}">
    ${Qt(e)}
    ${Gt(s,t._id)}
    </li>`}function Gt(t,e){return`<div class="discount-product-bottom-panel-container">
    ${Vt(t)}
    ${Xt(e)}
    </div>`}const Kt="/images/svg/icons.svg#icon-discount";function Qt({src:t,alt:e}){return`<div class="discount-product-image-container">
    <img src="${t}" alt="${e}" width="114" height="114" />
        <div class="discount-icon-container">
            <svg class="discount-icon" width="54" height="54">
                <use href="${Kt}"></use>
            </svg>
        </div>
    </div>`}function Vt({name:t,price:e}){return`<div class="discount-product-info-container">
    <span>${t}</span>
    <span>$${e}</span>
    </div>`}function Xt(t){let e,s;return L().includes(t)?(e=Y,s="svg-stroke-container"):(e=Jt,s="svg-fill-container"),`<button class="discount-product-shopping-cart-button ${s}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="18" height="18">
        <use href="${e}"></use>
        </svg>
    </button>`}
//# sourceMappingURL=commonHelpers2.js.map
