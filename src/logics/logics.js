/**
 * Handles mouse move event to rotate an element based on mouse position.
 * @param {MouseEvent} e - The mouse event object.
 * @param {HTMLElement} element - The element to be rotated.
 */
export const handleMouseMove = (e, element) => {
  const el = element;
  const height = el.clientHeight;
  const width = el.clientWidth;
  const { clientX, clientY } = e;
  const yRotation = ((clientX - width / 2) / width) * 2;
  const xRotation = ((clientY - height / 2) / height) * 2;
  const transform = `perspective(500px) scale(1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  el.style.transform = transform;
};

/**
 * Handles the mouse leave event for an element by resetting its transform style.
 * @param {HTMLElement} element - The element to handle the event for.
 */
export const handleMouseLeave = (element) => {
  element.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`;
};

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
