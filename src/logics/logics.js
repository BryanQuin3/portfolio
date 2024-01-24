/**
 * Handles smooth scrolling to a target element on the page.
 * @param {Event} element - The event object.
 * @param {string} link - The link to the target element on the page.
 * @returns {void}
 */
export const handleSmoothScroll = (element, link) => {
  element.preventDefault();
  // eliminate the # from the link
  const targetId = link.substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const handleHoverMouseEnter = (event, menuBackdrop) => {
  const { left, top, width, height } = event.target.getBoundingClientRect();
  menuBackdrop.style.setProperty("--left", `${left}px`);
  menuBackdrop.style.setProperty("--top", `${top - 12}px`);
  menuBackdrop.style.setProperty("--width", `${width + 10}px`);
  menuBackdrop.style.setProperty("--height", `${height + 4}px`);
  menuBackdrop.style.opacity = 1;
  menuBackdrop.style.visibility = "visible";
};

export const handleHoverMouseLeave = (event, menuBackdrop) => {
  menuBackdrop.style.opacity = 0;
  menuBackdrop.style.visibility = "hidden";
};
