function openModal() {
  var modal = document.querySelector(".modal");
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  };
  modal.style.display = "block";
}

export { openModal };
