import{S as f,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const p="45775776-b95713cfaff84e770c32e25ed",y="https://pixabay.com/api/",m=t=>{const l=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:"true"});return fetch(`${y}?key=${p}&q=${t}&${l}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},d=t=>` <li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img class="gallery-img"
      src="${t.webformatURL}"
      alt="${t.tags}"
      loading="lazy" />
    </a>
    <ul class="gallery-info">
      <li class="gallery-info-item">
        <p class="gallery-info-title">Likes</p>
        <p class="gallery-info-text">${t.likes}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Views</p>
        <p class="gallery-info-text">${t.views}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Comments</p>
        <p class="gallery-info-text">${t.comments}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Downloads</p>
        <p class="gallery-info-text">${t.downloads}</p>
      </li>
    </ul>
  </li>`,i=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),g=new f(".js-gallery a",{overlay:!0,captionsData:"alt",overlayOpacity:.8,captionDelay:250,focus:!0});function h(){u.classList.remove("is-hidden")}function L(){u.classList.add("is-hidden")}const w=t=>{t.preventDefault();const l=i.elements.user_query.value.trim();if(l===""){n.warning({title:"Caution",message:"Input field must not be empty",position:"topLeft"}),c.innerHTML="",i.reset();return}h(),m(l).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",i.reset();return}const o=r.hits.map(e=>d(e)).join("");c.innerHTML=o,g.refresh()}).catch(r=>{n.error({title:"Error",message:`Something went wrong: ${r.message}`,position:"topRight"}),console.log(r)}).finally(()=>{L()})};i.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
