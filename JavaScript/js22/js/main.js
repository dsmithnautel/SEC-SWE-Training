const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("comlpeted");
    initApp();
  }
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener("click", (event) => {
    view.classList.toggle("dog");
    view.classList.toggle("cat");
  });

  div.addEventListener("click", (event) => {
    view.classList.toggle("red");
    view.classList.toggle("blue");
  });

  h2.addEventListener("click", (event) => {
    const myText = event.target.textContent;
    event.target.textContent = myText === "second View" ? "Clicked" : "second View";
  });

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
  });
  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  });
};
