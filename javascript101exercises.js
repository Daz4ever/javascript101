// 1) console(log) hello

function hello(name) {
  console.log("Hello " + name);
}
hello("Dominic");


// 2) console.log name or world
function hello(name) {

  name = name || "World";
    console.log("Hello " + name);
  }
hello();

// 3) name and favorite subject

function madlib(name, subject) {

  return (name + "s favorite subject is " + subject);
}

madlib("Dominic", "history");

// 4) tip amount based on service

function tipAmount(bill, service) {
  if (service == 'good') {
    return bill * 0.2;
  }
  else if (service == 'fair') {
    return bill * 0.15;
}
  else if (service == 'bad') {
    return bill * 0.10;
  }
  else {
    return "That is not a valid input";
  }
  }
  tipAmount('125', 'fair');

// 5) tip and bill total together based on service

  function tipAmount(bill, service) {
    if (service == 'good') {
      return (bill) + (bill * 0.2);
    }
    else if (service == 'fair') {
      return (bill) + (bill * 0.15);
  }
    else if (service == 'bad') {
      return (bill) + (bill * 0.10);
    }
    else {
      return "That is not a valid input";
    }
    }
    tipAmount(125, 'good');

// 6) Bill total with tip split among party

function tipAmount(bill, service, split) {
  if (service == 'good') {
    return ("$" + ((bill) + (bill * 0.20))/split);
  }
  else if (service == 'fair') {
    return ("$" + ((bill) + (bill * 0.15))/split);
}
  else if (service == 'bad') {
    return ("$" + ((bill) + (bill * 0.10))/split);
  }
  else {
    return "That is not a valid input";
  }
  }
  tipAmount(125, 'good', 5);


// 7) print number all number given start and finish
  function printNumber(start, finish) {
    var count = start;
    while (count <= finish) {
      console.log(count);
      count = count + 1;


    }
  }
    printNumber(1, 10);


    function printNumber(start, finish) {
      var count = start;
      for(count; count <= finish; count++) {
        console.log(count);
      }
    }
    printNumber(1, 10);


  // 8) given a size print a box

  function printSquare(size) {


    var row = "";
    for (var i = 0; i < size; i++) {
      row += "*";
    }
    for(var j = 0; j < size; j++){
      console.log(row);
    }
  }
  printSquare(5);


  // 9) print a box given height and width

  function printbox(width, height) {
    var endRow = "*".repeat(width);
    var innerRow = "*" + " ".repeat(width - 2) + "*";

    for(var i=0; i < height; i++) {
      if(i === 0 || i === (height-1)) {
        console.log(endRow);
      }
      else {
        console.log(innerRow);
      }
    }
  }



printbox(6, 4);

// 10) print a banner

function printbanner(sentence) {
  var row = "*".repeat(sentence.length) + "**";
  var banner = "*" + sentence + "*";
  console.log(row);
  console.log(banner);
  console.log(row);
}

printbanner("Hello There!");
