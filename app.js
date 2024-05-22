const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;
    if (boton.id === "c") {
      pantalla.textContent = "0";
      return;
    }
    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(pantalla.textContent);
        return;
      } catch {
        pantalla.textContent = "Erro!";
      }
    }

    pantalla.textContent === "0"
      ? (pantalla.textContent = botonApretado)
      : (pantalla.textContent += botonApretado);
  });
});
