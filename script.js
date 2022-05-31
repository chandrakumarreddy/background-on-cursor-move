const elem = document.getElementById("cursor-fixed");
document.body.addEventListener("mousemove", (event) => {
  const clientX = event.clientX;
  const clientY = event.clientY;
  elem.style.transform = `translate3d(${clientX}px,${clientY}px,0px)`;
});
