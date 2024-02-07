import{b as ct,i as m,g as y,e as C,s as p,d as I,f as at}from"./assets/footer-85beda38.js";import{a as M}from"./assets/vendor-bb737cb9.js";const q=document.getElementById("categories");async function it(){const t=await ct();rt(t)}function rt(t){const e=[];for(const n of t){const s=document.createElement("li");s.className="categories-item",s.value=n;const i=document.createElement("button");i.type="button",i.className="categories-btn",i.setAttribute("data-value",n),i.innerText=n.replaceAll("_"," "),s.appendChild(i),e.push(s)}q.append(...e),q.innerHTML+=`
    <li class="categories-item">
      <button class="categories-btn" data-value="">
        Show all
      </button>
    </li>
  `}const lt=document.getElementById("keyword-input"),z=document.getElementById("category-select"),b=u();b?(lt.value=b.keyword,b.category?z.options[0].innerText=b.category.replaceAll("_"," "):z.options[0].innerText="Show all"):d({keyword:null,category:null,page:1,limit:6});function d(t){localStorage.setItem("filters",JSON.stringify(t))}function u(){return JSON.parse(localStorage.getItem("filters"))}const L=`${m}#icon-check`,$=`${m}#icon-shopping-cart`,dt=`${m}#icon-discount`;function g(t,e){const n=document.querySelectorAll(`li[data-id="${t}"], li[data-product-id="${t}"]`);for(let s of n){let i,o,a,c;e?(i=L,o=$,a="svg-stroke-container",c="svg-fill-container"):(i=$,o=L,a="svg-fill-container",c="svg-stroke-container");const r=s.querySelector(`use[href="${i}"]`);r&&(r.setAttribute("href",o),r.parentElement.parentElement.classList.remove(a),r.parentElement.parentElement.classList.add(c))}}function A(t){return y().includes(t)}const ut=`${m}#icon-shopping-cart`,pt=`${m}#icon-close`;let k;async function x(t){const e=await bt(t),n=yt(e,t);gt(n)}function gt(t){const e={onClose:Lt};k=basicLightbox.create(t,e),document.addEventListener("keydown",O)}function O(t){t.key==="Escape"&&(k.close(),document.removeEventListener("keydown",O))}function mt(t){return y().includes(t)}function ft(t){const e=t.currentTarget.dataset.id;mt(e)?(I(e),p(),vt(),g(e,!0)):(C(e),p(),ht(),g(e,!1))}let w;function ht(){const t=w.querySelector("span");t.textContent="Remove from"}function vt(){const t=w.querySelector("span");t.textContent="Add to"}function yt({name:t,category:e,size:n,popularity:s,desc:i,price:o,img:a},c){e=e.replace(/_/g," ");let r;return y().includes(c)?r="Remove from":r="Add to",`
    <div class="detailed-product-info-modal-window">

        <div class="image-container">
            <img class="image" src="${a}" alt="${t}" width="160" height="160"/>
        </div>

        <div class="product-info-container">
        <p class="productName">${t}</p>

        <ul class="product-characteristics-list">
            <li class="product-characteristic"><span class="span">Category:</span> ${e}</li>
            <li class="product-characteristic"><span class="span">Size:</span> ${n}</li>
            <li class="product-characteristic"><span class="span">Popularity:</span> ${s}</li>
        </ul>

        <p class="product-description">${i}</p>
        </div>

        <div class="cart-price-panel-container">
            <p class="product-price">$${o}</p>
            <button class="addToCart-button" type="button" data-id="${c}">
                <span>${r}</span>
                <svg class="cart-icon" width="18" height="18">
                    <use href="${ut}"></use>
                </svg>
            </button>
        </div>

        <svg class="close-icon" width="22" height="22">
            <use href="${pt}"></use>
        </svg>
    </div>
    `}async function bt(t){const e=`https://food-boutique.b.goit.study/api/products/${t}`;return(await M.get(e)).data}function N(){k.show();const t="disableBodyScroll";bodyScrollLock[t](document.body);const e=".detailed-product-info-modal-window .close-icon";document.querySelector(e).addEventListener("click",k.close),w=document.querySelector(".detailed-product-info-modal-window .addToCart-button"),w.addEventListener("click",ft)}function Lt(){const t="enableBodyScroll";bodyScrollLock[t](document.body)}const $t=document.getElementById("keyword-input"),S=document.getElementById("products"),D=document.getElementById("pages-panel"),R=document.getElementById("previous"),j=document.getElementById("next"),J=document.getElementById("nothing-found");async function h(){const t=u(),e=document.getElementById("category-select");t.category?e.options[0].innerText=t.category.replaceAll("_"," "):e.options[0].innerText="Show all";const n=await kt(t);n.length>0?(wt(),Et(n)):Pt(),t.page===1?K():It(),t.page===f()?Q():St(),f()<=1?D.classList.add("display-none"):(D.classList.remove("display-none"),Ct(t))}async function kt(t){const e=await at(t);return Tt(e.data.totalPages),e.data.results}function wt(){J.classList.add("display-none"),R.classList.remove("display-none"),j.classList.remove("display-none")}function Pt(){S.innerHTML="",J.classList.remove("display-none"),R.classList.add("display-none"),j.classList.add("display-none")}function U(){const t=$t.value.trim();d({...u(),keyword:t,page:1}),h()}function Et(t){const e=[];for(const o of t){const a=document.createElement("li");a.className="products-item",a.setAttribute("data-product-id",o._id);let c=`data-product-id="${o._id}"`,r=m+"#icon-shopping-cart",_="svg-fill-container";y().includes(o._id)&&(r=m+"#icon-check",_="svg-stroke-container"),a.innerHTML=`
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
          <button class="circle-btn cart-btn product ${_}" type="button" ${c}>
            <svg class="btn-svg product">
              <use href="${r}"></use>
            </svg>
          </button>
        </div>
      </div>
    `,e.push(a)}S.innerHTML="",S.append(...e);const n=document.querySelectorAll("button[data-product-id]");for(const o of n)o.addEventListener("click",s);function s(o){const c=o.currentTarget.getAttribute("data-product-id");A(c)?(I(c),p(),g(c,!0)):(C(c),p(),g(c,!1))}const i=document.querySelectorAll("li.products-item");for(const o of i)o.addEventListener("click",a=>{const c=a.target.nodeName.toLowerCase();c==="button"||c==="svg"||c==="use"||x(o.getAttribute("data-product-id")).then(()=>{N()})})}const P=document.getElementById("to-the-start"),E=document.getElementById("previous"),H=document.getElementById("pages-list"),B=document.getElementById("next"),T=document.getElementById("to-the-end");let G=null,v=null,l=1;function Bt(t){l=t}function f(){return G}function Tt(t){G=t}function Ct(t){const e=[],n=Math.min(f(),v),s=n+l-1,i=t.page-s;i>0&&(l+=i);for(let o=l;o<n+l;o++){let r=function(){d({...t,page:o}),h()};const a=document.createElement("li");a.className="pages-item";const c=document.createElement("button");c.type="button",c.className="circle-btn number-btn "+(t.page===o?"current":""),c.innerHTML=o,c.addEventListener("click",r),a.appendChild(c),e.push(a)}H.innerHTML="",H.append(...e)}function K(){P.classList.add("disabled"),E.classList.add("disabled"),E.removeEventListener("click",V),P.removeEventListener("click",Y)}function It(){P.classList.remove("disabled"),E.classList.remove("disabled"),E.addEventListener("click",V),P.addEventListener("click",Y)}function Q(){T.classList.add("disabled"),B.classList.add("disabled"),B.removeEventListener("click",X),T.removeEventListener("click",Z)}function St(){T.classList.remove("disabled"),B.classList.remove("disabled"),B.addEventListener("click",X),T.addEventListener("click",Z)}function V(){const t=u();t.page--,d(t),l-1===t.page&&l--,t.page===1&&K(),h()}function X(){const t=u();t.page++,d(t);const e=Math.min(f(),v);l+e===t.page&&l++,t.page===f()&&Q(),h()}function Y(){const t=u();t.page=1,d(t),l=1,h()}function Z(){const t=u();t.page=f(),d(t);const e=Math.min(f(),v);l=t.page-e+1,h()}function tt(){let t=window.innerWidth;t>=1440?(d({...u(),limit:9}),v=5):t>=768?(d({...u(),limit:8}),v=5):(d({...u(),limit:6}),v=3),h()}p();it().then(()=>{tt()});const et=document.getElementById("filters-form"),Mt=document.getElementById("category-select"),F=document.getElementById("categories");et.addEventListener("submit",nt);et.addEventListener("input",nt);async function nt(t){t.preventDefault(),Bt(1),U()}Mt.addEventListener("mousedown",At);function At(t){t.preventDefault(),F.classList.toggle("display-none")}F.addEventListener("click",xt);function xt(t){const e=t.target;e.nodeName.toLowerCase()==="button"&&(d({...u(),category:e.getAttribute("data-value")}),F.classList.add("display-none"),U())}let W=null;window.addEventListener("resize",Nt);function Nt(){clearTimeout(W),W=setTimeout(()=>{tt()},100)}const ot=document.querySelector("ul.popular-products-list");_t();ot.addEventListener("click",Ft);async function Ft(t){let e=t.target;const n=e.nodeName.toLowerCase();for(;e&&!e.classList.contains("popular-products-list-item");)e=e.parentElement;const s=e.dataset.id;n==="button"||n==="svg"||n==="use"?A(s)?(I(s),p(),g(s,!0)):(C(s),p(),g(s,!1)):(await x(s),N())}async function _t(){const t=await zt(),e=Dt(t);qt(e)}function qt(t){ot.innerHTML=t}async function zt(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await M.get(t)).data}catch(e){console.log(e.message)}}function Dt(t){return t.map(n=>Ht(n)).join("")}function Ht(t){const e={src:t.img,alt:t.name},n={name:t.name,category:t.category,size:t.size,popularity:t.popularity};return`<li class="popular-products-list-item" data-id="${t._id}">
    ${Wt(e)}
    ${Ot(n)}
    ${Rt(t._id)}
    </li>`}function Wt({src:t,alt:e}){return`<div class="popular-product-image-container">
    <img src="${t}" alt="${e}" width="56" height="56" />
    </div>`}function Ot({name:t,category:e,size:n,popularity:s}){return e=e.replace(/_/g," "),`<div class="popular-product-info-container">
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
        <span class="popular-product-characteristic-value">${s}</span>
        </li>
    </ul>
    </div>`}function Rt(t){let e,n;return y().includes(t)?(e=L,n="svg-stroke-container"):(e=$,n="svg-fill-container"),`<button class="popular-product-shopping-cart-button ${n}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="12" height="12">
        <use href="${e}"></use>
        </svg>
    </button>`}const jt=2,st=document.querySelector("ul.discount-products-list");Ut();st.addEventListener("click",Jt);async function Jt(t){let e=t.target;const n=e.nodeName.toLowerCase();for(;e&&!e.classList.contains("discount-products-list-item");)e=e.parentElement;const s=e.dataset.id;n==="button"||n==="svg"&&t.target.parentElement.nodeName.toLowerCase()==="button"||n==="use"&&t.target.parentElement.parentElement.nodeName.toLowerCase()==="button"?A(s)?(I(s),p(),g(s,!0)):(C(s),p(),g(s,!1)):(await x(s),N())}async function Ut(){let t=await Gt();t=t.slice(0,jt);const e=Kt(t);Qt(e)}async function Gt(){const t="https://food-boutique.b.goit.study/api/products/discount";try{return(await M.get(t)).data}catch(e){console.log(e.message)}}function Kt(t){return t.map(n=>Vt(n)).join("")}function Qt(t){st.innerHTML=t}function Vt(t){const e={src:t.img,alt:t.name},n={name:t.name,price:t.price};return`<li class="discount-products-list-item" data-id="${t._id}">
    ${Yt(e)}
    ${Xt(n,t._id)}
    </li>`}function Xt(t,e){return`<div class="discount-product-bottom-panel-container">
    ${Zt(t)}
    ${te(e)}
    </div>`}function Yt({src:t,alt:e}){return`<div class="discount-product-image-container">
    <img src="${t}" alt="${e}" width="114" height="114" />
        <div class="discount-icon-container">
            <svg class="discount-icon" width="54" height="54">
                <use href="${dt}"></use>
            </svg>
        </div>
    </div>`}function Zt({name:t,price:e}){return`<div class="discount-product-info-container">
    <span>${t}</span>
    <span>$${e}</span>
    </div>`}function te(t){let e,n;return y().includes(t)?(e=L,n="svg-stroke-container"):(e=$,n="svg-fill-container"),`<button class="discount-product-shopping-cart-button ${n}" type="button">
        <svg class="popular-product-shopping-cart-icon" width="18" height="18">
        <use href="${e}"></use>
        </svg>
    </button>`}
//# sourceMappingURL=commonHelpers2.js.map
