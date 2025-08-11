/*!
 * Library Name: comiCSS.art
 * Version: 1.0.0
 * Description: A web component library (JS/CSS) to help generate comics in HTML.
 * Author: Alvaro Montoro
 *
 * Copyright (c) 2025 Alvaro Montoro
 * All rights reserved.
 */
const templateFooter = document.createElement('template');
templateFooter.innerHTML = `
  <footer>
    <section>
        <h2>comiCSS</h2>: A webcomic about CSS. Coded with <span class="red">♥</span> in CSS.
    </section>
    <section>
        <a href="https://comicss.art">comicss.art</a>
    </section>
  </footer>
`;

class CSSComic extends HTMLElement { 
  connectedCallback() {
    let columns = 2;
    let rows = 2;

    const grid = this.getAttribute("grid");
    if (grid && grid !== "2x2" && grid.indexOf("x") > 0) {
      columns = Number(grid.split("x")[0]);
      rows = Number(grid.split("x")[1]);
      this.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
      this.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    }

    const color = this.getAttribute("color");
    if (color) {
      this.style.setProperty("--bg", color);
    }
    
    const title = this.getAttribute("title");
    if (title) {
      const heading = document.createElement("h1");
      heading.textContent = title;
      this.prepend(heading);
    }
    
    this.appendChild(templateFooter.content.cloneNode(true));
  }
}

const templatePerson = document.createElement('template');
templatePerson.innerHTML = `
  <div class="body">
    <div class="arm"></div>
    <div class="chest"></div>
    <div class="arm"></div>
    <div class="hand"></div>
    <div class="hand"></div>
  </div>
  <div class="head">
    <div class="hair-back"></div>
    <div class="neck"></div>
    <div class="face">
      <div class="ear"></div>
      <div class="eye"></div>
      <div class="eye"></div>
      <div class="eyebrow"></div>
      <div class="eyebrow"></div>
      <div class="nose"></div>
      <div class="mouth"></div>
      <div class="hair"></div>
    </div>
  </div>
`;

class CSSPerson extends HTMLElement { 
  connectedCallback() {
    this.appendChild(templatePerson.content.cloneNode(true));
    const hands = this.getAttribute("hands");
    if (hands) {
      const handsPositions = hands.split(" ");
      handsPositions.forEach((positions, index) => {
        const pos = positions.split("x");
        this.querySelectorAll(".hand")[index].style = `top: ${pos[1]}%; left: ${pos[0]}%;`;
      });
    }
  }
}

window.customElements.define('css-comic', CSSComic);
window.customElements.define('css-person', CSSPerson);