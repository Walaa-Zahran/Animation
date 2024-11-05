gsap.registerPlugin(ScrollTrigger);
// Select each part of the SVG
//pdm
const pdm = document.querySelector(".pdm");
const table = document.querySelector(".table");
//Admin Group
const adminGroup = document.querySelector(".admin-group");
const lazer = document.querySelector(".lazer");
//Cad Group
const cadGroup = document.querySelector(".cad-group");
const cadGroupPart = document.querySelector(".more-than-cad");
const cadGroupPartHovered = document.querySelector(".more-than-cad-hovered");
//ModernCad Group
const modernCadGroup = document.querySelector(".modern-cad-group");
const modernCad = document.querySelector(".modern-cad");
const modernCadHovered = document.querySelector(".modern-cad-hovered");
//comm Group
const commGroup = document.querySelector(".comm-group");
const circles = document.querySelector(".circles");
const paths = document.querySelectorAll(".path");
const paths2 = document.querySelectorAll(".path2");
const paths3 = document.querySelectorAll(".path3");
const paths4 = document.querySelectorAll(".path4");
// Create GSAP timeline for deconstruct animation
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#svg-container", // The container that holds the SVG
    start: "top top", // Start the animation when the top of the SVG reaches the top of the viewport
    end: "+=500", // Control how long the animation scrolls for
    scrub: true, // Smoothly progress the animation based on scroll position
    pin: true, // Pin the SVG container during the animation duration
    anticipatePin: 1, // Helps with smoothness when pinning
    onEnter: () => timeline.play(),
    onLeaveBack: () => timeline.reverse(),
  },
});

timeline
  .to(pdm, { x: -80, y: 200, duration: 1 })
  .to(adminGroup, { x: 459, y: 150, duration: 1 })
  .to(cadGroup, { x: -20, y: -35, duration: 1 })
  .to(modernCadGroup, { x: 50, y: -280, duration: 1 })
  .to(commGroup, { scale: 1, x: -450, y: 100, duration: 1 });

// adminGroup animation
adminGroup.addEventListener("mouseenter", () => {
  gsap.to(lazer, {
    opacity: 1,
    transform: "translateY(0)",
    duration: 0.3,
    ease: "power1.out",
  });
  gsap.to(pdm, { opacity: 0.3 });
  gsap.to(cadGroup, { opacity: 0.3 });
  gsap.to(modernCadGroup, { opacity: 0.3 });
  gsap.to(commGroup, { opacity: 0.3 });
});

adminGroup.addEventListener("mouseleave", () => {
  gsap.to(lazer, {
    transform: "translateY(10%)",
    opacity: 0,
    duration: 0.3,
    ease: "power1.in",
  });
  gsap.to(pdm, { opacity: 1 });
  gsap.to(cadGroup, { opacity: 1 });
  gsap.to(modernCadGroup, { opacity: 1 });
  gsap.to(commGroup, { opacity: 1 });
});
//---------------------
//cadGroup animation
cadGroup.addEventListener("mouseenter", () => {
  gsap.to(cadGroupPart, {
    opacity: 0,
  });
  gsap.to(cadGroupPartHovered, {
    opacity: 1,
  });
  gsap.to(pdm, { opacity: 0.3 });
  gsap.to(modernCadGroup, { opacity: 0.3 });
  gsap.to(commGroup, { opacity: 0.3 });
  gsap.to(adminGroup, { opacity: 0.3 });
});

cadGroup.addEventListener("mouseleave", () => {
  gsap.to(cadGroupPartHovered, {
    opacity: 0,
  });
  gsap.to(cadGroupPart, {
    opacity: 1,
  });
  gsap.to(pdm, { opacity: 1 });
  gsap.to(modernCadGroup, { opacity: 1 });
  gsap.to(commGroup, { opacity: 1 });
  gsap.to(adminGroup, { opacity: 1 });
});
//--------------------
//modernCadGroup animation
modernCadGroup.addEventListener("mouseenter", () => {
  gsap.to(modernCad, {
    opacity: 0,
  });
  gsap.to(modernCadHovered, {
    opacity: 1,
  });
  gsap.to(pdm, { opacity: 0.3 });
  gsap.to(cadGroup, { opacity: 0.3 });
  gsap.to(commGroup, { opacity: 0.3 });
  gsap.to(adminGroup, { opacity: 0.3 });
});

modernCadGroup.addEventListener("mouseleave", () => {
  gsap.to(modernCadHovered, {
    opacity: 0,
  });
  gsap.to(modernCad, {
    opacity: 1,
  });
  gsap.to(pdm, { opacity: 1 });
  gsap.to(cadGroup, { opacity: 1 });
  gsap.to(commGroup, { opacity: 1 });
  gsap.to(adminGroup, { opacity: 1 });
});
//--------------------
//pdm animation
pdm.addEventListener("mouseenter", () => {
  gsap.to(table, {
    opacity: 1,
    transform: "translateY(0)",
    duration: 0.3,
    ease: "power1.out",
    scale: 1.5,
  });
  gsap.to(adminGroup, { opacity: 0.3 });
  gsap.to(cadGroup, { opacity: 0.3 });
  gsap.to(modernCadGroup, { opacity: 0.3 });
  gsap.to(commGroup, { opacity: 0.3 });
});

pdm.addEventListener("mouseleave", () => {
  gsap.to(table, {
    transform: "translateY(10%)",
    opacity: 0,
    duration: 0.3,
    ease: "power1.in",
  });
  gsap.to(adminGroup, { opacity: 1 });
  gsap.to(cadGroup, { opacity: 1 });
  gsap.to(modernCadGroup, { opacity: 1 });
  gsap.to(commGroup, { opacity: 1 });
});
//--------------------
//commGroup animation
commGroup.addEventListener("mouseenter", () => {
  gsap.set([paths, paths2, paths3, paths4], { clearProps: "all" });

  gsap
    .timeline({ repeat: -1, repeatDelay: 1 })
    .to(paths, {
      opacity: 1,
      y: -50,
      duration: 0.8,
      ease: "power2.out",
      stagger: {
        each: 0.05,
      },
    })
    .to(paths2, {
      opacity: 1,
      y: -50,
      duration: 0.2,
      ease: "power2.out",
      stagger: {
        each: 0.04,
      },
    })
    .to(paths3, {
      opacity: 1,
      y: -100,
      duration: 0.8,
      ease: "power2.in",
      stagger: {
        each: 0.03,
      },
    })
    .to(paths4, {
      opacity: 1,
      y: -100,
      duration: 0.2,
      ease: "power2.in",
      stagger: {
        each: 0.02,
      },
    });

  gsap.to(adminGroup, { opacity: 0.3 });
  gsap.to(cadGroup, { opacity: 0.3 });
  gsap.to(modernCadGroup, { opacity: 0.3 });
  gsap.to(pdm, { opacity: 0.3 });
});

commGroup.addEventListener("mouseleave", () => {
  // Set opacity to 0 and hide them with display: none
  gsap.to(paths, {
    opacity: 0,
    display: "none",
    duration: 0.2,
  });
  gsap.to(paths2, {
    opacity: 0,
    display: "none",
    duration: 0.2,
  });
  gsap.to(paths3, {
    opacity: 0,
    display: "none",
    duration: 0.2,
  });
  gsap.to(paths4, {
    opacity: 0,
    display: "none",
    duration: 0.2,
  });
  // Reset opacity of other elements
  gsap.to(adminGroup, { opacity: 1 });
  gsap.to(cadGroup, { opacity: 1 });
  gsap.to(modernCadGroup, { opacity: 1 });
  gsap.to(pdm, { opacity: 1 });
});
