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

    function Order(flavor, size, crust, topping, number) {
      this.newFlavor = flavor;
      this.newSize = size;
      this.newCrust = crust;
      this.newTopping = topping;
      this.newQuantity = number;
    }

    let userInput = new Order(flavor(), size(), crust(), topping(), number());

    let totalCost =
      (userInput.newSize +
        userInput.newCrust +
        userInput.newTopping +
        userInput.newFlavor) *
      userInput.newQuantity;

    let customerName = prompt("Entet your name");
    let phoneNumber = Number(prompt("Enter your phone number"));
    let location = prompt("Enter your location");
    let newCost = totalCost + 200;
