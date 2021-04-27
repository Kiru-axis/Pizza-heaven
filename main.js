"use strict";
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    function flavor() {
      let pizzaFlavor = document.getElementById("flavor").value;
      return parseInt(pizzaFlavor);
    }
    function size() {
      let pizzaSize = document.getElementById("size").value;
      return parseInt(pizzaSize);
    }
    function crust() {
      let pizzaCrust = document.getElementById("crust").value;
      return parseInt(pizzaCrust);
    }
    function topping() {
      let pizzaTopping = document.getElementById("topping").value;
      return parseInt(pizzaTopping);
    }
    function number() {
      let pizzaNumber = document.getElementById("number").value;
      return parseInt(pizzaNumber);
    }