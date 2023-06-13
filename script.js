const currentYear = new Date().getFullYear();
const yearElement = document.querySelector(".year");
yearElement.textContent = currentYear;

const menuButton = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header-section");
const navLinks = document.querySelectorAll(".main-nav-link");
const allLinks = document.querySelectorAll("a:link");
const sectionHero = document.querySelector(".section-hero")

const observer = new IntersectionObserver((entries) => {
  const ent = entries[0];
  if (ent.isIntersecting === false) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
},
{
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});
observer.observe(sectionHero);

menuButton.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
  });
});

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        beahaivor: "smooth",
      });
    } else if (href !== "#" && href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});



///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
