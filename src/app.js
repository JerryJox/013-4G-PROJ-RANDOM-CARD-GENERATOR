/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const figura = ["♥", "♦", "♣", "♠"];
  const unidad = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const dibujoRandom = () => {
    const figuraRandom = Math.floor(Math.random() * figura.length);
    let dibujo = figura[figuraRandom];
    dibujo =
      dibujo === "♥" || dibujo === "♦"
        ? '<span class="figura rojo">' + dibujo + "</span>"
        : '<span class="figura">' + dibujo + "</span>";
    return dibujo;
  };

  const numRandom = () => {
    const unidadRandom = Math.floor(Math.random() * unidad.length);
    return unidad[unidadRandom];
  };

  const figuraFinal = dibujoRandom();

  document.getElementById("figuraSup").innerHTML = figuraFinal;
  document.getElementById("unidades").innerHTML = numRandom();
  document.getElementById("figuraUpDown").innerHTML = figuraFinal;
};
