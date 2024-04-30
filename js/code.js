const next = document.querySelectorAll("main nav a[rel='next']");
const prev = document.querySelectorAll("main nav a[rel='prev']");
const first = document.querySelectorAll("main nav a:first-child");
const last = document.querySelectorAll("main nav a:last-child");
const rand = document.querySelectorAll("main nav a.random-post");
let current = (postId || posts.length) - 1;

// changes the images to the specified post
function changeImages(num, changeHistory = true) {
  const main = document.querySelector("main");
  const comic = document.querySelector("#comic-strip");
  const post = posts[num];
  const permanentLink = document.querySelector("#permanent-link");
  const codeLink = document.querySelector("#code-link");
  const imageLink = document.querySelector("#image-link");

  // update the comic title
  document.querySelector("main h1").textContent = post.title;
  
  // update the links at the bottom
  permanentLink.href = `/comics/${post.id}`;
  permanentLink.textContent = `https://comicss.art/comics/${post.id}/`;
  imageLink.href = `/comics/${post.id}/${post.uid}.png`;
  imageLink.textContent = `https://comicss.art/comics/${post.id}/${post.uid}.png`;
  codeLink.href= `/comics/${post.id}/${post.uid}.html`;
  codeLink.textContent = `https://comicss.art/comics/${post.id}/${post.uid}.html`;

  // specify if the comic is horizontal or vertical in display
  comic.className = post.horizontal ? `horizontal` : post.vertical ? `vertical` : ``;
  
  // remove the prev/next buttons when we are at the first/last comic
  if (num === posts.length - 1) {
    main.classList.add('latest');
  } else {
    main.classList.remove('latest')
  }
  if (num === 0) {
    main.classList.add('first');
  } else {
    main.classList.remove('first')
  }

  // reset the images inside the comic area
  comic.innerHTML = "";
  comic.ariaLabel = post.ariaLabel;
  for (let x = 0; x < post.boxes; x++) {
    const img = new Image();
    img.alt = "";
    img.src = `/comics/${post.id}/${post.id}-${post.uid}-${x}.webp`;
    img.width = "350";
    comic.appendChild(img);
  }

  // update the links for next/prev/random in the menu based on current position
  for (let x = 0; x < next.length; x++) {
    next[x].href = post.id < posts.length ? `/comics/${post.id + 1}/` : "#";
  }
  for (let x = 0; x < prev.length; x++) {
    prev[x].href = post.id > 1 ? `/comics/${post.id - 1}/` : "#";
  }
  const randomPost = Math.floor(Math.random() * posts.length);
  for (let x = 0; x < rand.length; x++) {
    rand[x].href = `/comics/${randomPost + 1}/`;
  }

  // update the social media links and titles
  document.title = `comiCSS #${post.id} - ${post.title}`;
  document.querySelector("head title").textContent = `comiCSS #${post.id} - ${post.title}`;
  document.querySelector("head meta[property='og:title']").setAttribute("content", `comiCSS #${post.id} - ${post.title}`);
  document.querySelector("head meta[name='twitter:title']").setAttribute("content", `comiCSS #${post.id} - ${post.title}`);
  document.querySelector("head meta[property='og:image']").setAttribute("content", `https://comicss.art/comics/${post.id}/thumb.png`);
  document.querySelector("head meta[name='twitter:image']").setAttribute("content", `https://comicss.art/comics/${post.id}/thumb.png`);
  document.querySelector("head meta[property='og:url']").setAttribute("content", `https://comicss.art/comics/${post.id}`);
  document.querySelector("head meta[name='twitter:url']").setAttribute("content", `https://comicss.art/comics/${post.id}`);
  document.querySelector("link[rel='canonical']").setAttribute("href", `https://comicss.art/comics/${post.id}`);


  // update the URL in the address bar and the history
  if (changeHistory) {
    history.pushState({ id: post.id }, post.title, `/comics/${post.id}/`);
  }
}

// change the images to the current post
function changeImagesToCurrent() {
  changeImages(current);
}

// Set navigation behavior
for (let x = 0; x < first.length; x++) {
  first[x].addEventListener("click", function(e) {
    e.preventDefault();
    current = 0;
    changeImagesToCurrent();
  });
}
for (let x = 0; x < last.length; x++) {
  last[x].addEventListener("click", function(e) {
    e.preventDefault();
    current = posts.length - 1;
    changeImagesToCurrent();
  });
}
for (let x = 0; x < prev.length; x++) {
  prev[x].addEventListener("click", function(e) {
    e.preventDefault();
    if (current > 0) {
      current--;
      changeImagesToCurrent();
    }
  });
}
for (let x = 0; x < next.length; x++) {
  next[x].addEventListener("click", function(e) {
    e.preventDefault();
    if (current < posts.length - 1) {
      current++;
      changeImagesToCurrent();
    }
  });
}

// if the page has an id parameter, it's the old url system --> redirect to the correct one
const url = new URL(window.location);
const urlId = url.searchParams.get("id");
if (urlId && parseInt(urlId)) {
  window.location.href = `/comics/${urlId}`;
} else if (urlId !== null) {
  window.location.href = "/";
}

// handle the browser's back/forward buttons
window.addEventListener("popstate", function(e) {
  current = e.state && e.state.id ? e.state.id - 1 : posts.length - 1;
  changeImages(current, false);
});

// allow people to navigate using the arrow keys
document.addEventListener("keydown", function(e) {
  const key = e.key.toLocaleLowerCase();
  if (next[0] && (key === "arrowright" || key === "right")) {
    next[0].click();
  }
  if (prev[0] && (key === "arrowleft" || key === "left")) {
    prev[0].click();
  }
});