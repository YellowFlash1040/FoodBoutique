import{c as m,s as d,g as y,a as g,i as f,d as b}from"./assets/footer-c23ca7c5.js";import"./assets/vendor-bb737cb9.js";const a=document.getElementById("cart-items-list"),h=document.getElementById("delete-all-btn");let r=0;h.addEventListener("click",()=>{m(),d(),p(),i()});function i(){const c=document.getElementById("sum-span");c.innerText=`$${String(r)}`}async function p(){const c=y(),s=[];for(const n of c){const u=await g(n);s.push(u)}const l=document.getElementById("nothing-found-cart"),o=document.querySelector(".delete-all"),t=document.querySelector(".checkout-panel-container"),e=document.querySelector(".cart-sect");if(s.length===0){e.style.display="block",o.style.display="none",a.style.display="none",t.style.display="none",l.style.display="block";return}else e.style.display="flex",o.style.display="flex",a.style.display="block",t.style.display="block",l.style.display="none";v(s)}function v(c){const s=[];r=0;for(const t of c){r+=t.price;const e=document.createElement("li");e.className="cart-products-item";let n=`data-product-id="${t._id}"`;e.innerHTML=`
      <div class="cart-product-img-container">
        <img class="cart-product-img" src="${t.img}" alt="${t.name}" />
      </div>
      <div>
        <h3 class="product-title">${t.name}</h3>
        <ul class="product-properties-list">
          <li class="product-properties-item">
            Category:
            <span class="property-value">${t.category.replaceAll("_"," ")}</span>
          </li>
          <li class="product-properties-item">
            Size: <span class="property-value">${t.size}</span>
          </li>
        </ul>
      
        <span class="price">$${t.price}</span>
      </div>
      <button class="delete-from-cart-btn" ${n}>
        <svg class="delete-from-cart-svg">
          <use href="${f+"#icon-close"}"></use>
        </svg>
      </button>
    `,s.push(e)}a.innerHTML="",a.append(...s);const l=document.querySelectorAll("button[data-product-id]");for(const t of l)t.addEventListener("click",o);function o(t){const n=t.currentTarget.getAttribute("data-product-id");b(n),d(),p(),i()}i()}d();p();
//# sourceMappingURL=commonHelpers.js.map
