modoOscuro.addEventListener("click", () => {
  document.body.classList.add("modoOscuro"); 
  modoOscuro.style.opacity = "0";
  modoClaro.style.display = "block";
});

modoClaro.addEventListener("click", () => {
  document.body.classList.remove("modoOscuro"); 
  modoOscuro.style.opacity = "1";
  modoClaro.style.display = "none";
});
