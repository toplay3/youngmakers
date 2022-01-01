export default function(element) {
  const yOffset = -60;
  const top = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({top, behavior: 'smooth'});
}