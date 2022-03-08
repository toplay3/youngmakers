export default function(element) {
  const yOffset = -60;
  const top = element.getBoundingClientRect().top + yOffset;
  document.getElementById("all-container").scrollTo({top, behavior: 'smooth'});
}