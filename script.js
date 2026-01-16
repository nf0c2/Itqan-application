const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const backdrop = document.getElementById("backdrop");
const drawerClose = document.getElementById("drawerClose");
const drawerLinks = document.getElementById("drawerLinks");
const toTop = document.getElementById("toTop");

function openDrawer(){
  drawer.classList.add("open");
  backdrop.classList.add("show");
  drawer.setAttribute("aria-hidden", "false");
  menuBtn.setAttribute("aria-expanded", "true");
}

function closeDrawer(){
  drawer.classList.remove("open");
  backdrop.classList.remove("show");
  drawer.setAttribute("aria-hidden", "true");
  menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn?.addEventListener("click", openDrawer);
drawerClose?.addEventListener("click", closeDrawer);
backdrop?.addEventListener("click", closeDrawer);

drawerLinks?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") closeDrawer();
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) toTop.style.display = "inline-flex";
  else toTop.style.display = "none";
});

toTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
