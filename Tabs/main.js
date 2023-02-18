const tabs = document.getElementById("tabs");
const content = document.querySelectorAll(".content");

function changeClass(element) {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove("active");
  }

  element.classList.add("active");
}

tabs.addEventListener("click", (e) => {
  const currentTab = e.target.dataset.btn;
  changeClass(e.target);

  for (let i = 0; i < content.length; i++) {
    content[i].classList.remove("active");

    if (content[i].dataset.content === currentTab) {
      content[i].classList.add("active");
    }
  }
});
