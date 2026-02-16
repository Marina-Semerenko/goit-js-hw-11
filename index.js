import{a as u,S as d,i as n}from"./assets/vendor-B5nsgUv9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const f="54645800-ce9a454a278ea89e94662f70a",p="https://pixabay.com/api/";function h(s){const o=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get(p,{params:o}).then(e=>e.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),m=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const o=s.map(e=>`<li class="galleri-item">
        <a class="gallery-link" href="${e.largeImageURL}" >
        <img src= "${e.webformatURL}"
        
        alt="${e.tags.split(",")[0]}" />
        </a>
        <div class="info">
        <p><b>Likes:</b> ${e.likes}</p>
        <p><b>Views:</b> ${e.views}</p>
        <p><b>Comments:</b> ${e.comments}</p>
        <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
        </li>                   
        `).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()}function g(){c.innerHTML=""}function L(){l.classList.remove("is-hidden")}function b(){l.classList.add("is-hidden")}const S=document.querySelector(".form");S.addEventListener("submit",w);function w(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(o===""){n.error({message:"Please enter a search query!"});return}g(),L(),h(o).then(e=>{if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e.hits)}).catch(e=>{n.error({message:"Something went wrong. Try again later.",position:"topRight"})}).finally(()=>{b(),s.target.reset()})}
//# sourceMappingURL=index.js.map
