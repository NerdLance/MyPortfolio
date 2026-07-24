import React from "react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const createPixels = (count) => {
  let seed = 7291;

  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: `${Math.round(random() * 10000) / 100}%`,
    top: `${Math.round(random() * 13000) / 100 - 30}%`,
    size: `${Math.round((1 + random() * 2.8) * 10) / 10}px`,
    duration: `${Math.round((8 + random() * 15) * 10) / 10}s`,
    delay: `${Math.round(random() * -24 * 10) / 10}s`,
    opacity: Math.round((0.18 + random() * 0.64) * 100) / 100,
    drift: `${Math.round((random() - 0.5) * 70)}px`,
    depth: index % 3,
  }));
};

const pixels = createPixels(72);

const PixelRain = () => {
  const fieldRef = React.useRef(null);
  const frameRef = React.useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isDocumentVisible, setIsDocumentVisible] = React.useState(true);
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const updateVisibility = () =>
      setIsDocumentVisible(document.visibilityState !== "hidden");

    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () =>
      document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  React.useEffect(() => {
    if (typeof window.IntersectionObserver !== "function") {
      setIsInView(true);
      return undefined;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "160px" }
    );

    const field = fieldRef.current;
    if (!field) {
      setIsInView(true);
      return undefined;
    }

    observer.observe(field);
    return () => observer.disconnect();
  }, []);

  const handlePointerMove = React.useCallback(
    (event) => {
      if (
        prefersReducedMotion ||
        !window.matchMedia?.("(pointer: fine)").matches
      ) {
        return;
      }

      const field = fieldRef.current;
      if (!field) return;

      const bounds = field.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = window.requestAnimationFrame(() => {
        field.style.setProperty("--rain-x", `${x * 18}px`);
        field.style.setProperty("--rain-y", `${y * 12}px`);
      });
    },
    [prefersReducedMotion]
  );

  React.useEffect(
    () => () => window.cancelAnimationFrame(frameRef.current),
    []
  );

  const isPaused =
    prefersReducedMotion || !isDocumentVisible || !isInView;

  return (
    <div
      ref={fieldRef}
      className={`next-pixel-rain${isPaused ? " is-paused" : ""}`}
      aria-hidden="true"
      onPointerMove={handlePointerMove}
    >
      <div className="next-pixel-rain-glow" />
      {pixels.map((pixel) => (
        <span
          className={`next-pixel next-pixel-depth-${pixel.depth}`}
          key={pixel.id}
          style={{
            "--pixel-left": pixel.left,
            "--pixel-top": pixel.top,
            "--pixel-size": pixel.size,
            "--pixel-duration": pixel.duration,
            "--pixel-delay": pixel.delay,
            "--pixel-opacity": pixel.opacity,
            "--pixel-drift": pixel.drift,
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(PixelRain);
