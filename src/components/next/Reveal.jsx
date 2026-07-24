import React from "react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const Reveal = ({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
  ...props
}) => {
  const elementRef = React.useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (
      prefersReducedMotion ||
      typeof window === "undefined" ||
      typeof window.IntersectionObserver !== "function"
    ) {
      setIsVisible(true);
      return undefined;
    }

    const element = elementRef.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <Component
      ref={elementRef}
      className={`next-reveal next-reveal-${direction}${
        isVisible ? " is-visible" : ""
      } ${className}`.trim()}
      style={{ "--next-reveal-delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;
