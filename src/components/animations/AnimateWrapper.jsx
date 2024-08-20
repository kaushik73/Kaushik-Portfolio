const AnimateWrapper = ({
  children,
  inView,
  effect = "animate-fade-up",
  delay = "animate-delay-200",
}) => {
  return (
    <div
      className={`${
        inView
          ? `${effect} animate-once animate-duration-1500ms ${delay} animate-ease-in-out`
          : ""
      }`}
    >
      {children}
    </div>
  );
};

export default AnimateWrapper;
