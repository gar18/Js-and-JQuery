// delcaring variable to store total and delivery and coupon
var total = 0;
var delivery = 200;
var coupon = 1000;

// updating total
var amount = parseInt(sessionStorage.getItem("Amount"));
document.getElementById("itemTotal").append(amount);
total += amount;

var a = JSON.parse(sessionStorage.getItem("Items"));
var b = document.getElementById("Stuff");

a.forEach(function(z) {
  var c = document.createElement("div");
  b.appendChild(c);

  var n = document.createElement("div");
  n.innerHTML = z.name + "<br>" + z.price;
  c.appendChild(n);
});

// gets the price and then discounts it
function getPrice() {
  console.log(total);
  var numVal2 = Number(document.getElementById("discount").value) / 100;
  var totalValue = total - total * numVal2;
  document.getElementById("total").value = totalValue.toFixed(2);
  document.getElementById("itemTotal").value = totalValue;
  total = totalValue;
}
// calls the radio buttons
function radio() {
  if (document.getElementById("yes").checked) {
    total = total -= delivery;
    console.log(total);
  } else {
  }

  if (document.getElementById("yes") == null) {
  } else {
    total = total -= coupon;
    console.log(total);
  }
}

// function for confirming
function confirm() {
  alert(
    "Thanks for buying m8! Here's Your reference number: " +
      Math.floor(1000 + Math.random() * 9000)
  );
}

// jquery for animation
$(document).ready(function() {
  $("body")
    .animate(
      {
        width: "1278px",
        height: "800px",
        background: "black"
      },
      1000
    )
    .animate(
      {
        "margin-top": "center"
      },
      1000
    );
});
