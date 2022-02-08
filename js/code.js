const next = document.querySelectorAll("main nav a[rel='next']");
const prev = document.querySelectorAll("main nav a[rel='prev']");
const first = document.querySelectorAll("main nav a:first-child");
const last = document.querySelectorAll("main nav a:last-child");
const rand = document.querySelectorAll("main nav a.random-post");
let current = posts.length - 1;

function changeImages(num, changeHistory = true) {
  const comic = document.querySelector("#comic-strip");
  const post = posts[num];
  const permanentLink = document.querySelector("#permanent-link");
  const codeLink = document.querySelector("#code-link");
  const imageLink = document.querySelector("#image-link");

  document.querySelector("main h1").textContent = post.title;
  
  permanentLink.href = `/?id=${post.id}`;
  permanentLink.textContent = `https://comicss.com/?id=${post.id}`;
  imageLink.href = `/comics/${post.id}/${post.uid}.png`;
  imageLink.textContent = `https://comicss.com/comics/${post.id}/${post.uid}.png`;
  codeLink.href= `/comics/${post.id}/${post.uid}.html`;
  codeLink.textContent = `https://comicss.com/comics/${post.id}/${post.uid}.html`;

  comic.innerHTML = "";
  comic.ariaLabel = post.ariaLabel;
  for (let x = 0; x < post.boxes; x++) {
    const img = new Image();
    img.alt = "";
    img.src = `/comics/${post.id}/${post.id}-${post.uid}-${x}.webp`;
    img.width = "350";
    comic.appendChild(img);
  }

  for (let x = 0; x < next.length; x++) {
    next[x].href = post.id < posts.length ? `/?id=${post.id + 1}` : "#";
  }
  for (let x = 0; x < prev.length; x++) {
    prev[x].href = post.id > 1 ? `/?id=${post.id - 1}` : "#";
  }
  const randomPost = Math.floor(Math.random() * posts.length);
  for (let x = 0; x < next.length; x++) {
    rand[x].href = `/?id=${randomPost + 1}`;
  }

  document.title = `comiCSS - ${post.title}`;

  if (changeHistory) {
    history.pushState({ id: post.id }, post.title, `/?id=${post.id}`);
  }
}

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

const url = new URL(window.location);
const urlId = url.searchParams.get("id");
if (urlId && parseInt(urlId)) {
  current = parseInt(urlId) - 1;
}
changeImages(current, false);

window.addEventListener("popstate", function(e) {
  current = e.state && e.state.id ? e.state.id - 1 : posts.length - 1;
  changeImages(current, false);
});

document.addEventListener("keydown", function(e) {
  const key = e.key.toLocaleLowerCase();
  if (next[0] && (key === "arrowright" || key === "right")) {
    next[0].click();
  }
  if (prev[0] && (key === "arrowleft" || key === "left")) {
    prev[0].click();
  }
});