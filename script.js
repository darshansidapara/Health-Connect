/******************* toggle icon navbar ****************/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let header = document.querySelector("header");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
  header.classList.toggle("scroll", navbar.classList.contains("active"));
};

/******************* scroll section active link ****************/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let removenav = document.querySelectorAll("section");

navLinks.forEach((links) => {
  links.onclick = () => {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      menuIcon.classList.toggle("fa-xmark");
    }
  };
});

removenav.forEach((links) => {
  links.onclick = () => {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      menuIcon.classList.toggle("fa-xmark");
    }
  };
});

navLinks.onclick = () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  }
};
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /******************* sticky navbar ****************/
  header.classList.toggle("sticky", window.scrollY > 100);
  header.classList.toggle("scroll", navbar.classList.contains("active"));
};

/****************** scroll reveal ****************/
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading, .search-content, .controls", {
  origin: "top",
});
ScrollReveal().reveal(
  ".home-img,  .portfolio-box, .meditation-img, .container",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(
  ".home-content h1, .calories-img, .diet-planner-container, .meditation-container",
  {
    origin: "left",
  }
);
ScrollReveal().reveal(".home-contact p, .about-content, .contact form", {
  origin: "top",
});

/******************* typed js *****************/

const typed = new Typed(".multi-text", {
  strings: ["Well-Being", "Health", "Diagnosis", "Mental Health"],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1200,
  loop: true,
});

/**************** breathing exercise JS **************/

const container = document.getElementById("container");
const text = document.getElementById("text");

const totaltime = 7500;
const breathTime = (totaltime / 5) * 2;
const holdTime = totaltime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totaltime);

// const container = document.getElementById("container");
// const text = document.getElementById("text");
// const pointer = document.querySelector(".pointer");
// const gradientCircle = document.querySelector(".gradient-circle");
// const stopButton = document.getElementById("stopButton");
// let animationTimeout;
// let pointerRotationInterval;

// const techniques = {
//   gentleBreath: [4, 2, 6],
//   calmingBreath: [3, 1, 5],
//   deepBreath: [5, 3, 7],
//   rejuvenatingBreath: [6, 4, 8],
//   stressRelief: [4, 2, 8],
//   energyBoost: [4, 1, 6],
//   soothingSleep: [4, 8, 4],
// };

// function startBreathing(technique) {
//   const [inhale, hold, exhale] = techniques[technique];
//   const totalTime = (inhale + hold + exhale) * 1000;
//   const rotationDuration = totalTime / 4;

//   text.innerText = "Breathe In!";
//   container.className = "container grow";

//   // Calculate durations and rotation angles
//   const inhaleDuration = inhale * 1000;
//   const holdDuration = hold * 1000;
//   const exhaleDuration = exhale * 1000;
//   const pointerInhaleAngle = 40 * (360 / 100);
//   const pointerHoldAngle = 60 * (360 / 100);
//   const pointerExhaleAngle = 100 * (360 / 100);

//   pointer.style.animation = `none`; // Stop pointer animation
//   pointer.style.transform = `rotate(0deg)`;

//   setTimeout(() => {
//     text.innerText = "Hold";
//     pointer.style.animation = `none`; // Stop pointer animation
//     pointer.style.transform = `rotate(${pointerHoldAngle}deg)`;

//     setTimeout(() => {
//       text.innerText = "Breathe Out!";
//       container.className = "container shrink";
//       pointer.style.animation = `none`; // Stop pointer animation
//       pointer.style.transform = `rotate(${pointerExhaleAngle}deg)`;

//       setTimeout(() => {
//         text.innerText = "Hold";
//         pointer.style.animation = `none`; // Stop pointer animation
//       }, hold * 1000);
//     }, hold * 1000);
//   }, inhale * 1000);

//   pointerRotationInterval = setInterval(() => {
//     pointer.style.animation = `rotate ${
//       rotationDuration / 1000
//     }s linear infinite`; // Start pointer rotation
//   }, rotationDuration);

//   animationTimeout = setTimeout(() => {
//     stopBreathing(); // Repeat breathing animation
//   }, totalTime);
// }

// function stopBreathing() {
//   clearInterval(pointerRotationInterval);
//   debugger; // Stop pointer rotation
//   pointer.style.animation = "none"; // Stop pointer animation
//   container.className = "container";
//   text.innerText = "Select the breathing exercise";
//   clearTimeout(animationTimeout);
// }

// stopButton.addEventListener("click", stopBreathing);

// document.getElementById("gentleBreath").addEventListener("click", () => {
//   stopBreathing(); // Stop previous animation if any
//   startBreathing("gentleBreath");
// });
// document.getElementById("calmingBreath").addEventListener("click", () => {
//   stopBreathing(); // Stop previous animation if any
//   startBreathing("calmingBreath");
// });
// document.getElementById("deepBreath").addEventListener("click", () => {
//   stopBreathing(); // Stop previous animation if any
//   startBreathing("deepBreath");
// });
// document.getElementById("rejuvenatingBreath").addEventListener("click", () => {
//   stopBreathing(); // Stop previous animation if any
//   startBreathing("rejuvenatingBreath");
// });
// document.getElementById("stressRelief").addEventListener("click", () => {
//   stopBreathing(); // Stop previous animation if any
//   startBreathing("stressRelief");
// });
// document.getElementById("energyBoost").addEventListener("click", () => {
//   stopBreathing(); // Stop previous animation if any
//   startBreathing("energyBoost");
// });
// document.getElementById("soothingSleep").addEventListener("click", () => {
//   stopBreathing(); // Stop previous animation if any
//   startBreathing("soothingSleep");
// });
