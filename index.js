import{i as c,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="45775776-b95713cfaff84e770c32e25ed",p="https://pixabay.com/api/",d=r=>{const l=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:"true"});return fetch(`${p}?key=${y}&q=${r}&${l}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},m=r=>` <li class="gallery-item">
    <a class="gallery-link" href="${r.largeImageURL}">
      <img class="gallery-img"
      src="${r.webformatURL}"
      alt="${r.tags}"
      loading="lazy" />
    </a>
    <ul class="gallery-info">
      <li class="gallery-info-item">
        <p class="gallery-info-title">Likes</p>
        <p class="gallery-info-text">${r.likes}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Views</p>
        <p class="gallery-info-text">${r.views}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Comments</p>
        <p class="gallery-info-text">${r.comments}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Downloads</p>
        <p class="gallery-info-text">${r.downloads}</p>
      </li>
    </ul>
  </li>`,i=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader");function g(){u.classList.remove("is-hidden")}function h(){u.classList.add("is-hidden")}g();setTimeout(h,2e3);const L=r=>{r.preventDefault();const l=i.elements.user_query.value.trim();d(l).then(s=>{if(l===""){c.warning({title:"Caution",message:"Input field must not be empty",position:"topLeft"}),n.innerHTML="",i.reset();return}if(s.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="",i.reset();return}console.log(s);const o=s.hits.map(t=>m(t)).join("");n.innerHTML=o,new f(".js-gallery a",{overlay:!0,captionsData:"alt",overlayOpacity:.8,captionDelay:250,focus:!0}).refresh()}).catch(s=>{console.log(s)})};i.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
