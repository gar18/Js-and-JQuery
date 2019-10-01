function item(name, priceEle) {
  this.name = name;
  this.price = priceEle;
}
// setting items and prices
let item1 = new item("Intel i9 9900k", 9100.0);
let item2 = new item("Ryzen 3900x", 9799.0);
let item3 = new item("Geforce RTX 2080 ti", 23000.7);
let item4 = new item("AMD Rx 5700", 6799.0);
let item5 = new item("Corsair H150i Liquid AIO", 2355.9);
let item6 = new item("AM4 X570", 4699.0);
let item7 = new item("AMD 3rd Gen Prebuilt PC", 35000.0);

// using session storage
sessionStorage.setItem(
  "Catalogue",
  JSON.stringify([item1, item2, item3, item4, item5, item6, item7])
);

// getting items and amount
var amount = parseInt(sessionStorage.getItem("Amount"));
if (!amount) {
  amount = 0;
  //   storing into an array
  var items = [];
  sessionStorage.setItem("Items", JSON.stringify(items));
} else {
  var items = JSON.parse(sessionStorage.getItem("Items"));
}

sessionStorage.setItem("Amount", amount);

if (!items) {
}

function cart1() {
  var a = JSON.parse(sessionStorage.getItem("Catalogue"));
  var b = JSON.parse(sessionStorage.getItem("Items"));
  var c = parseInt(sessionStorage.getItem("Amount"));
  console.log(b);
  console.log(c);
  if (b == null) {
    b = [a[0]];
  } else {
    b.push(a[0]);
  }

  sessionStorage.setItem("Items", JSON.stringify(b));

  sessionStorage.setItem("Amount", (c += a[0].price));
  alert("The current total of the items is R" + c);
}

function cart2() {
  var a = JSON.parse(sessionStorage.getItem("Catalogue"));
  var b = JSON.parse(sessionStorage.getItem("Items"));
  var c = parseInt(sessionStorage.getItem("Amount"));

  if (b == null) {
    b = [a[1]];
  } else {
    b.push(a[1]);
  }

  sessionStorage.setItem("Items", JSON.stringify(b));

  sessionStorage.setItem("Amount", (c += a[1].price));
  alert("The current total of the items is R" + c);
}

function cart3() {
  var a = JSON.parse(sessionStorage.getItem("Catalogue"));
  var b = JSON.parse(sessionStorage.getItem("Items"));
  var c = parseInt(sessionStorage.getItem("Amount"));

  if (b == null) {
    b = [a[2]];
  } else {
    b.push(a[2]);
  }

  sessionStorage.setItem("Items", JSON.stringify(b));

  sessionStorage.setItem("Amount", (c += a[2].price));
  alert("The current total of the items is R" + c);
}

function cart4() {
  var a = JSON.parse(sessionStorage.getItem("Catalogue"));
  var b = JSON.parse(sessionStorage.getItem("Items"));
  var c = parseInt(sessionStorage.getItem("Amount"));

  if (b == null) {
    b = [a[3]];
  } else {
    b.push(a[3]);
  }

  sessionStorage.setItem("Items", JSON.stringify(b));

  sessionStorage.setItem("Amount", (c += a[3].price));
  alert("The current total of the items is R" + c);
}

function cart5() {
  var a = JSON.parse(sessionStorage.getItem("Catalogue"));
  var b = JSON.parse(sessionStorage.getItem("Items"));
  var c = parseInt(sessionStorage.getItem("Amount"));

  if (b == null) {
    b = [a[4]];
  } else {
    b.push(a[4]);
  }

  sessionStorage.setItem("Items", JSON.stringify(b));

  sessionStorage.setItem("Amount", (c += a[4].price));
  alert("The current total of the items is R" + c);
}

function cart6() {
  var a = JSON.parse(sessionStorage.getItem("Catalogue"));
  var b = JSON.parse(sessionStorage.getItem("Items"));
  var c = parseInt(sessionStorage.getItem("Amount"));

  if (b == null) {
    b = [a[5]];
  } else {
    b.push(a[5]);
  }

  sessionStorage.setItem("Items", JSON.stringify(b));

  sessionStorage.setItem("Amount", (c += a[5].price));
  alert("The current total of the items is R" + c);
}

function cart7() {
  var a = JSON.parse(sessionStorage.getItem("Catalogue"));
  var b = JSON.parse(sessionStorage.getItem("Items"));
  var c = parseInt(sessionStorage.getItem("Amount"));

  if (b == null) {
    b = [a[6]];
  } else {
    b.push(a[6]);
  }

  sessionStorage.setItem("Items", JSON.stringify(b));

  sessionStorage.setItem("Amount", (c += a[6].price));
  alert("The current total of the items is R" + c);
}
// jquery for animations
$(document).ready(function() {
  $("button").click(function() {
    $(this)
      .next()
      .fadeToggle();
  });
});

$(document).ready(function() {
  $("img").animate({
    height: "200px",
    width: "270px"
  });
});

$("#hoverli").hover(
  function() {
    $("#actions_menu")
      .finish()
      .slideDown("fast");
  },
  function() {
    $("#actions_menu")
      .finish()
      .slideUp("fast");
  }
);
