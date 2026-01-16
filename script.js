const btn = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) btn.classList.add("show");
  else btn.classList.remove("show");
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
