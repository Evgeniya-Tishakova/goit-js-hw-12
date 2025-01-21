export const createGalleryCardTemplate = imgInfo => {
    return `<li class="gallery-card">
    <a class="gallery-link" href="${imgInfo.largeImageURL}">
    <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" width="360" height="200"/>
    </a>
        <ul class="descr">
        <li class="descr-item">
        <h2 class="descr-title">Likes</h2>
        <p class="descr-title-item">${imgInfo.likes}</p>
        </li>
        <li class="descr-item">
        <h2 class="descr-title">Views</h2>
        <p class="descr-title-item">${imgInfo.views}</p>
        </li>
        <li class="descr-item">
        <h2 class="descr-title">Comments</h2>
        <p class="descr-title-item">${imgInfo.comments}</p>
        </li>
        <li class="descr-item">
        <h2 class="descr-title">Downloads</h2>
        <p class="descr-title-item">${imgInfo.downloads}</p>
        </li>
        </ul>
      </li>`;
  };