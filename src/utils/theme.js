export const lightenColor = (color, percent) => {
  let num = parseInt(color.slice(1), 16),
    amt = Math.round(2.55 * percent),
    r = (num >> 16) + amt,
    g = ((num >> 8) & 0x00ff) + amt,
    b = (num & 0x0000ff) + amt;

  return `#${(
    0x1000000 +
    (r < 255 ? r : 255) * 0x10000 +
    (g < 255 ? g : 255) * 0x100 +
    (b < 255 ? b : 255)
  )
    .toString(16)
    .slice(1)}`;
};

export const darkenColor = (color, percent) => {
  let num = parseInt(color.slice(1), 16),
    amt = Math.round(2.55 * percent),
    r = (num >> 16) - amt,
    g = ((num >> 8) & 0x00ff) - amt,
    b = (num & 0x0000ff) - amt;

  return `#${(
    0x1000000 +
    (r > 0 ? r : 0) * 0x10000 +
    (g > 0 ? g : 0) * 0x100 +
    (b > 0 ? b : 0)
  )
    .toString(16)
    .slice(1)}`;
};

export const applyTheme = (theme) => {
  document.documentElement.style.setProperty("--primary-color", theme.primary);
  document.documentElement.style.setProperty(
    "--secondary-color",
    theme.secondary
  );
  document.documentElement.style.setProperty("--text-color", theme.text);
};

export const getStoredTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme
    ? JSON.parse(savedTheme)
    : { primary: "#000", secondary: "#333", text: "#000" };
};

export const switchTheme = (primaryColor) => {
  if (!primaryColor) return;

  const secondaryColor = lightenColor(primaryColor, 40);
  const textColor = darkenColor(primaryColor, 60);

  const theme = {
    primary: primaryColor,
    secondary: secondaryColor,
    text: textColor,
  };

  applyTheme(theme);
  localStorage.setItem("theme", JSON.stringify(theme));
};
