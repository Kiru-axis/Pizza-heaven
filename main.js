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

    let customerName = prompt("Enter your name");
    let phoneNumber = prompt("Enter your phone number");
    let location = prompt("Enter your location");
    let newCost = totalCost + 200;
    let newCustomerName = customerName.toUpperCase();
    let recipt = newCustomerName + phoneNumber + location;

    if (recipt != null) {
      document.getElementById("demo").innerHTML =
        "Hello " + newCustomerName + "!";
      document.getElementById("demo2").innerHTML =
        "Your charge for pizza costs  Kshs " + totalCost;
      document.getElementById("demo3").innerHTML =
        "we will deliver your pizza at: " +
        location.toUpperCase() +
        "  in 30 minutes";
      document.getElementById("demo4").innerHTML = "Delivery cost is kshs 200";
      document.getElementById("demo5").innerHTML =
        "Total Cost is Ksh " + newCost;
      document.getElementById("demo6").innerHTML = "You are our PRIDE!!";
    }

    $("#formorder").reset();
  });
});
