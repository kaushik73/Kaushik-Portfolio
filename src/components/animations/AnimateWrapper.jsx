const AnimateWrapper = ({ children, inView, effect = "animate-fade-up" }) => {
  return (
    <div
      className={`${
        inView
          ? `${effect} animate-once animate-duration-1500ms animate-delay-200 animate-ease-in-out`
          : ""
      }`}
    >
      {children}
    </div>
  );
};

export default AnimateWrapper;
