// 1. ScrollSpy: 섹션에 따라 메뉴 active 변경
const sections = document.querySelectorAll("section article");
const navLinks = document.querySelectorAll(".side-nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


// 2. 다크모드 토글 기능
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 다크모드";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px 15px";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "5px";
toggleBtn.style.backgroundColor = "#2d6cdf";
toggleBtn.style.color = "#fff";
toggleBtn.style.cursor = "pointer";
document.body.appendChild(toggleBtn);

function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️ 라이트모드";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙 다크모드";
  }
}

// 초기 상태 로드
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️ 라이트모드";
}

toggleBtn.addEventListener("click", toggleDarkMode);


// 3. (추후 구현용) 프로젝트 슬라이드 구조 초기화 - 여유 둠
// 프로젝트 슬라이드는 HTML 구조에 따라 Swiper.js, Glide.js, Flickity 등으로 후속 구현 가능
