gsap.registerPlugin(ScrollTrigger);
const mm = gsap.matchMedia();
const tl = gsap.timeline();

mm.add("(min-width: 700px)", () => {
  const tl = gsap.timeline();

  tl.fromTo(
    ".header__logo",
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.5 }
  );
  tl.fromTo(
    ".header__btn",
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.5 },
    "<"
  );
  tl.fromTo(
    ".nav__item",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
    "<"
  );
  tl.fromTo(
    ".hero__bg-left",
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, stagger: 0.2 },
    "<"
  );
  tl.fromTo(
    ".hero__bg-right",
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, stagger: 0.2 },
    "<"
  );
  tl.fromTo(
    ".hero__bg-chess",
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.5, stagger: 0.2 },
    "<"
  );
  tl.fromTo(
    ".hero__bg-mobile",
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, stagger: 0.2 },
    "<"
  );
  tl.fromTo(
    ".hero__bg-chess-mobile",
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.5, stagger: 0.2 },
    "<"
  );
  tl.fromTo(
    ".hero__info",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
    "<"
  );
  tl.fromTo(
    ".hero__title",
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1 },
    "<"
  );
  tl.fromTo(
    ".hero__subtitle",
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 1 },
    "<"
  );
  tl.fromTo(
    ".hero__btn",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    0.2
  );
  tl.fromTo(
    ".hero__btn-transparent",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    0.4
  );
  tl.fromTo(
    ".hero__about",
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 1 },
    0.2
  );

  gsap.from(".target__title", {
    scrollTrigger: {
      trigger: ".target__title",
      start: "top 80%",
      end: "top 50%",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });

  gsap.from(".target__subtitle", {
    scrollTrigger: {
      trigger: ".target__subtitle",
      start: "top 80%",
      end: "top 50%",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power4.out",
  });

  gsap.from(".target__card", {
    scrollTrigger: {
      trigger: ".target__subtitle",
      start: "-10% bottom",
      end: "+=300px",
    },
    scale: 0,
    transformOrigin: "center",
    ease: "back.out(1.5)",
    stagger: 0.2,
  });

  gsap.from(".banks__title", {
    scrollTrigger: {
      trigger: ".banks__title",
      start: "top 80%",
      end: "top 50%",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });

  gsap.from(".banks__subtitle", {
    scrollTrigger: {
      trigger: ".banks__subtitle",
      start: "top 80%",
      end: "top 50%",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power4.out",
  });

  gsap.from(".banks__card", {
    scrollTrigger: { trigger: ".banks", start: "-10% top", end: "+=300px" },
    scale: 0,
    transformOrigin: "center",
    ease: "back.out(1.5)",
    stagger: 0.2,
  });

  gsap.from(".advantages__title", {
    scrollTrigger: {
      trigger: ".advantages__title",
      start: "top 80%",
      end: "top 50%",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });

  gsap.from(".advantages__subtitle", {
    scrollTrigger: {
      trigger: ".advantages__subtitle",
      start: "top 80%",
      end: "top 50%",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power4.out",
  });

  gsap.from(".advantages__card", {
    scrollTrigger: {
      trigger: ".advantages",
      start: "-10% top",
      end: "+=300px",
    },
    scale: 0,
    transformOrigin: "center",
    ease: "back.out(1.5)",
    stagger: 0.2,
  });

  gsap.from(".documents__left-bg", {
    scrollTrigger: {
      trigger: ".documents__wrap",
      start: "-10% center",
      end: "+=300px",
    },
    x: -100,
    opacity: 0,
    duration: 2,
    transformOrigin: "center",
  });

  gsap.from(".documents__watch-img", {
    scrollTrigger: {
      trigger: ".documents__wrap",
      start: "-10% center",
      end: "+=300px",
    },
    x: 100,
    opacity: 0,
    duration: 3,
    transformOrigin: "center",
    ease: "power3.out",
  });

  gsap.from(".documents__title", {
    scrollTrigger: {
      trigger: ".documents",
      start: "-10% center",
      end: "+=300px",
    },
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    transformOrigin: "right center",
    ease: "back.out(1.7)",
    delay: 0.2,
  });

  gsap.from(".documents__subtitle", {
    scrollTrigger: {
      trigger: ".documents",
      start: "-10% center",
      end: "+=300px",
    },
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    transformOrigin: "left center",
    ease: "power4.out",
  });

  gsap.from(".documents__text", {
    scrollTrigger: {
      trigger: ".documents",
      start: "-10% center",
      end: "+=300px",
    },
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    transformOrigin: "center",
  });

  gsap.from(".documents__btn", {
    scrollTrigger: {
      trigger: ".documents",
      start: "-10% center",
      end: "+=300px",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  });

  gsap.from(".documents__btn-transparent", {
    scrollTrigger: {
      trigger: ".documents",
      start: "-10% center",
      end: "+=300px",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    delay: 0.3,
  });

  gsap.from(".document__card", {
    scrollTrigger: {
      trigger: ".documents__cards",
      start: "top center",
    },
    y: 100,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.2,
  });

  gsap.from(".steps__title", {
    scrollTrigger: { trigger: ".steps", start: "-10% center", end: "+=300px" },
    y: -50,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  });

  gsap.from(".steps__subtitle", {
    scrollTrigger: { trigger: ".steps", start: "-10% center", end: "+=300px" },
    y: -30,
    opacity: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power4.out",
  });

  gsap.utils.toArray(".steps__card").forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: { trigger: ".steps", start: "top center", end: "+=300px" },
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay: index * 0.2,
    });
  });

  gsap.from(".info__block", {
    scrollTrigger: { trigger: ".info", start: "top center", end: "+=300px" },
    x: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
  });

  gsap.utils.toArray(".request__order").forEach((order, index) => {
    gsap.from(order, {
      scrollTrigger: {
        trigger: ".request__order-block",
        start: "top center",
        end: "+=300px",
        once: true,
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay: index * 0.2,
    });
  });

  gsap.from(".calc__block", {
    scrollTrigger: { trigger: ".calc", start: "top 90%", end: "top 50%" },
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });

  gsap.from(".reviews__title", {
    scrollTrigger: { trigger: ".reviews", start: "top 80%", end: "top 50%" },
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });

  gsap.from(".reviews__subtitle", {
    scrollTrigger: { trigger: ".reviews", start: "top 80%", end: "top 50%" },
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power4.out",
  });

  gsap.from(".footer__right-inner .footer__logo", {
    scrollTrigger: {
      trigger: ".footer__right-inner",
      start: "top 80%",
      end: "top 50%",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });

  gsap.from(".footer__right-inner .footer__address-title", {
    scrollTrigger: {
      trigger: ".footer__right-inner",
      start: "top 80%",
      end: "top 50%",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power4.out",
  });

  gsap.from(".footer__right-inner .footer__address", {
    scrollTrigger: {
      trigger: ".footer__right-inner",
      start: "top 80%",
      end: "top 50%",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power4.out",
  });

  gsap.from(".footer__right-inner .footer__number", {
    scrollTrigger: {
      trigger: ".footer__right-inner",
      start: "top 80%",
      end: "top 50%",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power4.out",
  });

  gsap.from(".footer__right-inner .footer__mail", {
    scrollTrigger: {
      trigger: ".footer__right-inner",
      start: "top 80%",
      end: "top 50%",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: "power4.out",
  });

  gsap.from(".footer__right-inner .footer__about", {
    scrollTrigger: {
      trigger: ".footer__right-inner",
      start: "top 80%",
      end: "top 50%",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "power4.out",
  });

  // возвращаем функцию очистки
  return () => {
    tl.kill();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
});
