import { useEffect } from 'react';
import anime from 'animejs';

export function useAnimeScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains('has-animated')) {
            entry.target.classList.add('has-animated');
            // Hide the element initially via CSS if needed, but anime will snap it to the starting point
            anime({
              targets: entry.target,
              translateX: [() => anime.random(-1500, 1500), () => anime.random(-50, 50)],
              translateY: [() => anime.random(-1500, 1500), () => anime.random(-50, 50)],
              rotateZ: [() => anime.random(-1080, 1080), () => anime.random(-15, 15)],
              rotateX: [() => anime.random(-1080, 1080), () => anime.random(-15, 15)],
              rotateY: [() => anime.random(-1080, 1080), () => anime.random(-15, 15)],
              scale: [0, () => anime.random(0.5, 2)],
              opacity: [0, 1],
              loop: true,
              direction: 'alternate',
              easing: 'easeInOutCirc',
              duration: () => anime.random(1000, 3000)
            });
          }
        }
      });
    }, { threshold: 0.15 });

    // Find all elements with the class
    const elements = document.querySelectorAll('.anime-scroll');
    // Hide them initially so they don't pop in before anime takes over
    elements.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
