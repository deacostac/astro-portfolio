const c=document.querySelector("#main-navigation"),p=c.querySelector("ul"),u=[...document.querySelectorAll(".has-dropdown button")],L=()=>{const e=c.querySelectorAll("nav > ul"),t=window.location.pathname;e.forEach(a=>{[...a.querySelectorAll('a:not([rel*="external"])')].forEach(i=>{(t.includes(i.pathname.replaceAll("/",""))&&i.textContent!=="Inicio"||i.textContent==="Inicio"&&t==="/")&&(i.classList.add("is-active"),i.setAttribute("aria-current","page"))})})},b=()=>{const e=c.getBoundingClientRect().width,t=document.querySelector(".desktop-menu").getBoundingClientRect().width,a=300,n=Math.round(t)+a;n>=e?(c.classList.remove("is-desktop"),c.classList.add("is-mobile")):n<=e&&(c.classList.add("is-desktop"),c.classList.remove("is-mobile"))},M=e=>e.getBoundingClientRect().right>(window.innerWidth||document.documentElement.clientWidth),A=e=>{const t=e.parentNode.querySelector("ul");e.classList.add("show"),e.setAttribute("aria-expanded","true"),M(t)&&(t.style.left="auto")},w=e=>{e.classList.remove("show"),e.setAttribute("aria-expanded","false")},f=()=>{for(let e=0;e<u.length;e++)w(u[e])},k=e=>{e.target.getAttribute("aria-expanded")==="false"?(f(),A(e.target)):w(e.target)};p&&p.addEventListener("keydown",e=>{const t=e.target,a=t.closest("li"),n=[...p.querySelectorAll(".menu-item")],i=t.closest(".has-dropdown button"),d=t.closest(".has-dropdown li"),m=n.findIndex(l=>l===a),r=e.key;let o;if(r==="ArrowRight"&&(n.indexOf(a)===n.length-1?o=n[0]:o=n[m+1]),r==="ArrowLeft"&&(n.indexOf(a)===0?o=n[n.length-1]:o=n[m-1]),r==="Escape"&&(o=n[0]),i){const l=i.nextElementSibling.querySelector("li");r==="ArrowDown"&&(e.preventDefault(),A(i),o=l),r==="Escape"&&w(i)}if(d){const l=d.parentNode,s=[...l.querySelectorAll("li")],g=s.findIndex(v=>v===d);r==="ArrowDown"&&(e.preventDefault(),s.indexOf(d)===s.length-1?o=s[0]:o=s[g+1]),r==="ArrowUp"&&(e.preventDefault(),s.indexOf(d)===0?o=s[s.length-1]:o=s[g-1]),r==="Escape"&&(o=l.previousElementSibling.parentNode,f())}o&&o.querySelector("a, button, input").focus()});u&&u.forEach(e=>{e.addEventListener("click",k)});L();b();window.addEventListener("resize",b);window.addEventListener("click",e=>{const t=e.target;!t.hasAttribute("aria-haspopup")&&!t.classList.contains("submenu-item")&&f()});const h=document.querySelector(".responsive-toggle"),x=e=>{e.setAttribute("aria-expanded",!0),e.setAttribute("aria-label","Close menu navigation"),e.innerHTML='<svg width="20" height="20" aria-hidden="true" fill="var(--action-color)" xmlns="http://www.w3.org/2000/svg"><path d="M10 10 2 2m8 8 8 8m-8-8 8-8m-8 8-8 8" stroke="var(--action-color)" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/></svg>'},y=e=>{e.setAttribute("aria-expanded",!1),e.setAttribute("aria-label","Open menu navigation"),e.innerHTML='<svg width="26" height="21" aria-hidden="true" fill="var(--action-color)" xmlns="http://www.w3.org/2000/svg"><path d="M2 1.667h24m-24 8h24m-24 8h24" stroke="var(--action-color)" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/></svg>'};h.addEventListener("click",e=>{const t=document.querySelector(".mobile-menu");t.classList.toggle("show"),t.classList.contains("show")?x(h):y(h)});
