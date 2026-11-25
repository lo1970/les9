import { appName, placeholderPages } from "@les9/shared";
import "./style.css";

const root = document.querySelector("#app");
if (!(root instanceof HTMLElement)) {
  throw new Error("Missing #app");
}

const header = document.createElement("header");
const eyebrow = document.createElement("p");
eyebrow.className = "eyebrow";
eyebrow.textContent = "Squelette local";
const title = document.createElement("h1");
title.textContent = appName;
header.append(eyebrow, title);

const main = document.createElement("main");
for (const page of placeholderPages) {
  const article = document.createElement("article");
  const heading = document.createElement("h2");
  heading.textContent = page.title;
  const summary = document.createElement("p");
  summary.textContent = page.summary;
  article.append(heading, summary);
  main.append(article);
}

root.replaceChildren(header, main);
