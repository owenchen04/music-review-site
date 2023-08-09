let collections = document.querySelectorAll('.js-collection-container');

collections.forEach(element => {
  element.addEventListener('click', function() {
    loadCollection(this);
  });
});

function loadCollection(collection) {
  // Get rid of tabs
  //let tabs = document.getElementById
  //("collections-tabs-selector");
  //tabs.classList.add
  //("collections-tabs-selector-disable");

  // change heading
  var heading = document.getElementById('collections-heading');

  const collectionName = collection.querySelector(".collection-cover").querySelector(".collection-name").innerHTML;

  heading.innerHTML = collectionName;

  // populate posts grid
  populateCollectionContent(collection);
}

function populateCollectionContent(collection) {
  let grid = document.getElementById('collectionGridContent');

  grid.innerHTML = 
    `<div class="post-container">
      <div class="post-card js-post-card">
        <img src="profile-pictures/boygenius-profile-picture.jpg" class="post-artist">
        <img src="album-covers/the-record.jpg" class="post-album">
        <p class="post-rating">10.0</p>
        <p class="post-album-name">"the record"</p>
        <p class="post-artist-name">boygenius</p>
        <p class="preview">"The record" is aptly titled because it is THE only record ever. Nothing else will ever top it in terms of lyrical and sonic virtuosity. Lucy, ... </p>
        <div class="overlay"></div>
      </div>
    </div>
    <div class="post-container">
      <div class="post-card">

      </div>
    </div>
    <div class="post-container">
      <div class="post-card">

      </div>
    </div>
    <div class="post-container">
      <div class="post-card">

      </div>
    </div>
    <div class="post-container">
      <div class="post-card">

      </div>
    </div>`;
}




// toggle between my collections and saved collections
let originalContent = document.getElementById('collectionGridContent').innerHTML;

document.querySelector(".js-my-collections-tab")
  .addEventListener('click', () => {
    changeCollectionContent('myCollections');
  });

document.querySelector(".js-saved-collections-tab")
  .addEventListener('click', () => {
    changeCollectionContent('savedCollections');
  });

function changeCollectionContent(contentId) {
  var heading = document.getElementById('collections-heading');
  heading.innerHTML = 'Collections';

  var collectionGridContent = document.getElementById('collectionGridContent');
  var content;

  // NOTE: eventually enhance JS to loop through each collection and generate html accordingly
  switch (contentId) {
    case 'myCollections':
      content = `<div class="collection-container js-collection-container">
          <div class="collection-cover">
            <img src="album-covers/the-record.jpg" class="collection-cover-img">
            <p class="collection-name">Fav Reviews</p>
            <p class="num-reviews">21 reviews</p>
          </div>
        </div>
        <div class="collection-container js-collection-container">
          <div class="collection-cover">
            <img src="album-covers/melodrama.jpg" class="collection-cover-img">
            <p class="collection-name">Must-Listens</p>
            <p class="num-reviews">13 reviews</p>
          </div>
        </div>
        <div class="collection-container js-collection-container">
          <div class="collection-cover">
            <img src="album-covers/honeymoon.jpg" class="collection-cover-img">
            <p class="collection-name">Hot Takes</p>
            <p class="num-reviews">8 reviews</p>
          </div>
        </div>`;
      break;
    case 'savedCollections':
      content = `<div class="collection-container js-collection-container">
          <div class="collection-cover">
            <img src="album-covers/norman-fucking-rockwell.jpg" class="collection-cover-img">
            <p class="collection-name">Placeholder</p>
            <p class="num-reviews">xx reviews</p>
          </div>
        </div>
        <div class="collection-container js-collection-container">
          <div class="collection-cover">
            <img src="album-covers/grace.jpg" class="collection-cover-img">
            <p class="collection-name">Placeholder</p>
            <p class="num-reviews">xx reviews</p>
          </div>
        </div>
        <div class="collection-container js-collection-container">
          <div class="collection-cover">
            <img src="album-covers/boygenius-ep.jpg" class="collection-cover-img">
            <p class="collection-name">Placeholder</p>
            <p class="num-reviews">xx reviews</p>
          </div>
        </div>`;
      break;
    default:
      content = `<div class="collection-container js-collection-container">
          <div class="collection-cover">
            <img src="album-covers/the-record.jpg" class="collection-cover-img">
            <p class="collection-name">Fav Reviews</p>
            <p class="num-reviews">21 reviews</p>
          </div>
        </div>
        <div class="collection-container js-collection-container">
          <div class="collection-cover">
            <img src="album-covers/melodrama.jpg" class="collection-cover-img">
            <p class="collection-name">Must-Listens</p>
            <p class="num-reviews">13 reviews</p>
          </div>
        </div>
        <div class="collection-container js-collection-container">
          <div class="collection-cover">
            <img src="album-covers/honeymoon.jpg" class="collection-cover-img">
            <p class="collection-name">Hot Takes</p>
            <p class="num-reviews">8 reviews</p>
          </div>
        </div>`;
      break;
  }

  collectionGridContent.innerHTML = content;

  // add new event listeners
  let collections = document.querySelectorAll('.js-collection-container');

  collections.forEach(element => {
    element.addEventListener('click', function() {
      loadCollection(this);
    });
  });
}