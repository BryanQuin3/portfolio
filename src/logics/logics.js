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

export const handleMouseLeave = (element) => {
  element.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`;
};

export const handleToggle = (element) => {
  element.classList.toggle("hidden");
};
