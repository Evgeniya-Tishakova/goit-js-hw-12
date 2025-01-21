import{a as w,S,i as n}from"./assets/vendor-D0cagnvz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function l(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=l(r);fetch(r.href,s)}})();const h=e=>`<li class="gallery-card">
    <a class="gallery-link" href="${e.largeImageURL}">
    <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" width="360" height="200"/>
    </a>
        <ul class="descr">
        <li class="descr-item">
        <h2 class="descr-title">Likes</h2>
        <p class="descr-title-item">${e.likes}</p>
        </li>
        <li class="descr-item">
        <h2 class="descr-title">Views</h2>
        <p class="descr-title-item">${e.views}</p>
        </li>
        <li class="descr-item">
        <h2 class="descr-title">Comments</h2>
        <p class="descr-title-item">${e.comments}</p>
        </li>
        <li class="descr-item">
        <h2 class="descr-title">Downloads</h2>
        <p class="descr-title-item">${e.downloads}</p>
        </li>
        </ul>
      </li>`,m=(e,t)=>{const l=new URLSearchParams({q:e,key:"48211636-c2e7af5b30d3e402d83d1fb79",image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});return w.get(`https://pixabay.com/api/?${l}`)},u=document.querySelector(".js-search-form"),L=document.querySelector(".js-search-input"),y=document.querySelector(".js-gallery"),a=document.querySelector(".loader"),o=document.querySelector(".button-load");a.style.display="none";o.style.display="none";const g=new S(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250,animationSpeed:500,fadeSpeed:500,zoom:!0,scaleImageToRatio:!0,enableKeyboard:!0});let c=1,p="";u.addEventListener("submit",async e=>{o.style.display="none";try{e.preventDefault(),a.style.display="inline-block";const t=L.value.trim();if(t==="")return n.error({title:"Error",message:"Sorry, there are no empty strings allowed in search field. Please, try again!",messageColor:"#fafafb;",position:"topRight",backgroundColor:"#ef4040"});t!==p?(p=t,c=1):c++;const{data:l}=await m(t,c);if(l.hits.length===0){n.show({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fafafb;",position:"topRight",backgroundColor:"#ef4040"}),y.innerHTML="",o.style.display="none",a.style.display="none";return}const i=l.hits.map(r=>h(r)).join("");y.innerHTML=i,g.refresh(),o.style.display="inline-block",f(l.totalHits),b()}catch(t){console.log(t),n.error({message:"Error fetching images. Please try again later.",position:"topRight"}),o.style.display="none"}u.reset(),a.style.display="none"});o.addEventListener("click",async e=>{o.style.display="none";try{e.preventDefault(),a.style.display="inline-block",c++;const{data:t}=await m(p,c);if(t.hits.length===0){n.show({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fafafb;",position:"topRight",backgroundColor:"#ef4040"}),o.style.display="none",a.style.display="none";return}const l=t.hits.map(i=>h(i)).join("");y.innerHTML+=l,g.refresh(),o.style.display="inline-block",f(t.totalHits),b()}catch{n.error({message:"Error fetching images. Please try again later.",position:"topRight"}),o.style.display="none"}a.style.display="none"});function f(e){c*15>=e&&(o.style.display="none",n.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}function b(){let e=document.querySelector(".gallery-card").getBoundingClientRect().height;console.log(document.body.scrollTop,Math.floor(e*2)),window.scrollBy({top:document.body.scrollTop+Math.floor(e*2),behavior:"smooth"})}
//# sourceMappingURL=index.js.map
