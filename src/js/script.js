const accordeon = document.querySelector(".accordeon");
const details = accordeon.querySelectorAll("details");

details.forEach(det => {
  det.querySelector("summary").addEventListener("click", event => {

    // Fermer tous les autres
    details.forEach(other => {
      if (other !== det) {
        other.open = false;
      }
    });
  });
});