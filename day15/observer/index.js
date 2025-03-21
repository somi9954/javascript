// entries 주시 대상 리스트
const box = document.querySelector(".box");
const hello = document.querySelector(".hello");

// const ob = new IntersectionObserver((entries) => {
//   entries.forEach((entries) => {
//     if (entries.isIntersecting) {
//       entries.target.classList.add("fadeIn");
//       entries.target.classList.remove("fadeOut");
//     }
//   })
// }, { threshold: 1 })

// 박스가 먼저 나오고 hello가 나오는법 css로도 가능
const ob = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("box")) {
          entry.target.classList.remove("fadeOut");
          entry.target.classList.add("fadeIn");
          entry.target.addEventListener("transitionend", () => {
            hello.classList.remove("fadeOut");
            hello.classList.add("fadeIn");
          });
        }
      }
    });
  },
  { threshold: 1 }
);

ob.observe(box);
ob.observe(hello);
