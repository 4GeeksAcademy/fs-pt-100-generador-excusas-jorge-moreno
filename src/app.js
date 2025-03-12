import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

let who = [
  "The dog",
  "My neighbor",
  "My dog",
  "My Ex-girlfriend",
  "My mother in law",
  "ovnis",
  "My brain"
];

let what = [
  "flew away",
  "bugged",
  "exploded",
  "failed",
  "fell asleep",
  "died",
  "self-destructed"
];

let when = [
  "When I fel",
  "When I was playing",
  "When I was at the party",
  "When I bought it",
  "When I saw it",
  "When I used it",
  "When I touched it."
];

function generarExcusa() {
  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  return who[whoIndex] + " " + what[whatIndex] + " " + when[whenIndex];
}
function mostrarExcusa() {
  let excusa = generarExcusa();
  document.getElementById("excusa").innerText = excusa;
}


window.onload = mostrarExcusa;

console.log("Hello Rigo from the console!");