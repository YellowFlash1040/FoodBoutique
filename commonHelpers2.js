import{b as tt,g as L,e as $,s as f,f as et,i as w}from"./assets/footer-4ab1013f.js";import{a as C}from"./assets/vendor-bb737cb9.js";const S=document.getElementById("categories");async function st(){const t=await tt();nt(t)}function nt(t){const e=[];for(const s of t){const a=document.createElement("li");a.className="categories-item",a.value=s;const o=document.createElement("button");o.type="button",o.className="categories-btn",o.setAttribute("data-value",s),o.innerText=s.replaceAll("_"," "),a.appendChild(o),e.push(a)}S.append(...e),S.innerHTML+=`
    <li class="categories-item">
      <button class="categories-btn" data-value="">
        Show all
      </button>
    </li>
  `}const ot=document.getElementById("keyword-input"),A=u();A?ot.value=A.keyword:l({keyword:null,category:null,page:1,limit:6});function l(t){localStorage.setItem("filters",JSON.stringify(t))}function u(){return JSON.parse(localStorage.getItem("filters"))}const h=document.getElementById("to-the-start"),v=document.getElementById("previous"),N=document.getElementById("pages-list"),b=document.getElementById("next"),y=document.getElementById("to-the-end");let _=null,m=null,r=1;function at(t){r=t}function g(){return _}function ct(t){_=t}function it(t){const e=[],s=Math.min(g(),m),a=s+r-1,o=t.page-a;o>0&&(r+=o);for(let n=r;n<s+r;n++){let d=function(){l({...t,page:n}),p()};const c=document.createElement("li");c.className="pages-item";const i=document.createElement("button");i.type="button",i.className="circle-btn number-btn "+(t.page===n?"current":""),i.innerHTML=n,i.addEventListener("click",d),c.appendChild(i),e.push(c)}N.innerHTML="",N.append(...e)}function q(){h.classList.add("disabled"),v.classList.add("disabled"),v.removeEventListener("click",H),h.removeEventListener("click",D)}function rt(){h.classList.remove("disabled"),v.classList.remove("disabled"),v.addEventListener("click",H),h.addEventListener("click",D)}function z(){y.classList.add("disabled"),b.classList.add("disabled"),b.removeEventListener("click",W),y.removeEventListener("click",O)}function lt(){y.classList.remove("disabled"),b.classList.remove("disabled"),b.addEventListener("click",W),y.addEventListener("click",O)}function H(){const t=u();t.page--,l(t),r-1===t.page&&r--,t.page===1&&q(),p()}function W(){const t=u();t.page++,l(t);const e=Math.min(g(),m);r+e===t.page&&r++,t.page===g()&&z(),p()}function D(){const t=u();t.page=1,l(t),r=1,p()}function O(){const t=u();t.page=g(),l(t);const e=Math.min(g(),m);r=t.page-e+1,p()}function R(){let t=window.innerWidth;t>=1440?(l({...u(),limit:9}),m=5):t>=768?(l({...u(),limit:8}),m=5):(l({...u(),limit:6}),m=3),p()}const ut="/images/svg/icons.svg#icon-shopping-cart",dt="/images/svg/icons.svg#icon-close";let P;async function E(t){const e=await ht(t),s=ft(e,t);pt(s)}function pt(t){P=basicLightbox.create(t)}function gt(t){const e=t.currentTarget.dataset.id;$(e),f(),mt()}let k;function mt(){const t=k.querySelector("span");t.textContent="Remove from"}function ft({name:t,category:e,size:s,popularity:a,desc:o,price:n,img:c},i){e=e.replace(/_/g," ");let d;return L().includes(i)?d="Remove from":d="Add to",`
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
                    <use href="${ut}"></use>
                </svg>
            </button>
        </div>

        <svg class="close-icon" width="22" height="22">
            <use href="${dt}"></use>
        </svg>
    </div>
    `}async function ht(t){const e=`https://food-boutique.b.goit.study/api/products/${t}`;return(await C.get(e)).data}function I(){P.show();const t=".detailed-product-info-modal-window .close-icon";document.querySelector(t).addEventListener("click",P.close),k=document.querySelector(".detailed-product-info-modal-window .addToCart-button"),k.addEventListener("click",gt)}const vt=document.getElementById("keyword-input"),B=document.getElementById("products"),x=document.getElementById("pages-panel"),j=document.getElementById("previous"),J=document.getElementById("next"),U=document.getElementById("nothing-found");async function p(){const t=u(),e=await bt(t);e.length>0?(yt(),$t(e)):Lt(),t.page===1?q():rt(),t.page===g()?z():lt(),g()<=1?x.classList.add("display-none"):(x.classList.remove("display-none"),it(t))}async function bt(t){const e=await et(t);return ct(e.data.totalPages),e.data.results}function yt(){U.classList.add("display-none"),j.classList.remove("display-none"),J.classList.remove("display-none")}function Lt(){B.innerHTML="",U.classList.remove("display-none"),j.classList.add("display-none"),J.classList.add("display-none")}function G(){const t=vt.value.trim();l({...u(),keyword:t,page:1}),p()}function $t(t){const e=[];for(const n of t){const c=document.createElement("li");c.className="products-item",c.setAttribute("data-product-id",n._id);let i=`data-product-id="${n._id}"`,d=w+"#icon-shopping-cart",M="";L().includes(n._id)&&(i="",d=w+"#icon-check",M="stroke"),c.innerHTML=`
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
          <button class="circle-btn cart-btn product ${M}" type="button" ${i}>
            <svg class="btn-svg product">
              <use href="${d}"></use>
            </svg>
          </button>
        </div>
      </div>
    `,e.push(c)}B.innerHTML="",B.append(...e);const s=document.querySelectorAll("button[data-product-id]");for(const n of s)n.addEventListener("click",a);function a(n){const c=n.currentTarget,i=c.getAttribute("data-product-id");$(i),f(),c.innerHTML=`
      <svg class="btn-svg product">
        <use href="${w}#icon-check"></use>
      </svg>
    `,c.removeEventListener("click",a),c.classList.add("stroke")}const o=document.querySelectorAll("li.products-item");for(const n of o)n.addEventListener("click",c=>{const i=c.target.nodeName.toLowerCase();i==="button"||i==="svg"||i==="use"||E(n.getAttribute("data-product-id")).then(()=>{I()})})}f();st().then(()=>{R(),p()});const K=document.getElementById("filters-form"),wt=document.getElementById("category-select"),T=document.getElementById("categories");K.addEventListener("submit",Q);K.addEventListener("input",Q);async function Q(t){t.preventDefault(),at(1),G()}wt.addEventListener("mousedown",Pt);function Pt(t){t.preventDefault(),T.classList.toggle("display-none")}T.addEventListener("click",kt);function kt(t){const e=t.target;e.nodeName.toLowerCase()==="button"&&(l({...u(),category:e.getAttribute("data-value")}),T.classList.add("display-none"),G())}let F=null;window.addEventListener("resize",Bt);function Bt(){clearTimeout(F),F=setTimeout(()=>{R()},100)}const V=document.querySelector("ul.popular-products-list");Tt();V.addEventListener("click",Ct);async function Ct(t){let e=t.target;const s=e.nodeName.toLowerCase(),a=e;for(;e&&!e.classList.contains("popular-products-list-item");)e=e.parentElement;const o=e.dataset.id;s==="button"||s==="svg"||s==="use"?($(o),f(),It(a)):(await E(o),I())}const X="/images/svg/icons.svg#icon-check",Et="popular-product-shopping-cart-button";function It(t){for(;t&&!t.classList.contains(Et);)t=t.parentElement;t.classList.remove("svg-fill-container"),t.classList.add("svg-stroke-container"),t.firstElementChild.firstElementChild.setAttribute("href",X)}async function Tt(){const t=await St(),e=At(t);Mt(e)}function Mt(t){V.innerHTML=t}async function St(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await C.get(t)).data}catch(e){console.log(e.message)}}function At(t){return t.map(s=>Nt(s)).join("")}function Nt(t){const e={src:t.img,alt:t.name},s={name:t.name,category:t.category,size:t.size,popularity:t.popularity};return`<li class="popular-products-list-item" data-id="${t._id}">
    ${xt(e)}
    ${Ft(s)}
    ${qt(t._id)}
    </li>`}function xt({src:t,alt:e}){return`<div class="popular-product-image-container">
    <img src="${t}" alt="${e}" width="56" height="56" />
    </div>`}function Ft({name:t,category:e,size:s,popularity:a}){return e=e.replace(/_/g," "),`<div class="popular-product-info-container">
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
    </div>`}const _t="/images/svg/icons.svg#icon-shopping-cart";function qt(t){let e,s;return L().includes(t)?(e=X,s="svg-stroke-container"):(e=_t,s="svg-fill-container"),`<button class="popular-product-shopping-cart-button ${s}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="12" height="12">
        <use href="${e}"></use>
        </svg>
    </button>`}const zt=2,Y=document.querySelector("ul.discount-products-list");Ot();Y.addEventListener("click",Ht);async function Ht(t){let e=t.target;const s=e.nodeName.toLowerCase(),a=e;for(;e&&!e.classList.contains("discount-products-list-item");)e=e.parentElement;const o=e.dataset.id;s==="button"||s==="svg"&&t.target.parentElement.nodeName.toLowerCase()==="button"||s==="use"&&t.target.parentElement.nodeName.toLowerCase()==="button"?($(o),f(),Dt(a)):(await E(o),I())}const Z="/images/svg/icons.svg#icon-check",Wt="discount-product-shopping-cart-button";function Dt(t){for(;t&&!t.classList.contains(Wt);)t=t.parentElement;t.classList.remove("svg-fill-container"),t.classList.add("svg-stroke-container"),t.firstElementChild.firstElementChild.setAttribute("href",Z)}async function Ot(){let t=await Rt();t=t.slice(0,zt);const e=jt(t);Jt(e)}async function Rt(){const t="https://food-boutique.b.goit.study/api/products/discount";try{return(await C.get(t)).data}catch(e){console.log(e.message)}}function jt(t){return t.map(s=>Gt(s)).join("")}function Jt(t){Y.innerHTML=t}const Ut="/images/svg/icons.svg#icon-shopping-cart";function Gt(t){const e={src:t.img,alt:t.name},s={name:t.name,price:t.price};return`<li class="discount-products-list-item" data-id="${t._id}">
    ${Vt(e)}
    ${Kt(s,t._id)}
    </li>`}function Kt(t,e){return`<div class="discount-product-bottom-panel-container">
    ${Xt(t)}
    ${Yt(e)}
    </div>`}const Qt="/images/svg/icons.svg#icon-discount";function Vt({src:t,alt:e}){return`<div class="discount-product-image-container">
    <img src="${t}" alt="${e}" width="114" height="114" />
        <div class="discount-icon-container">
            <svg class="discount-icon" width="54" height="54">
                <use href="${Qt}"></use>
            </svg>
        </div>
    </div>`}function Xt({name:t,price:e}){return`<div class="discount-product-info-container">
    <span>${t}</span>
    <span>$${e}</span>
    </div>`}function Yt(t){let e,s;return L().includes(t)?(e=Z,s="svg-stroke-container"):(e=Ut,s="svg-fill-container"),`<button class="discount-product-shopping-cart-button ${s}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="18" height="18">
        <use href="${e}"></use>
        </svg>
    </button>`}
//# sourceMappingURL=commonHelpers2.js.map
