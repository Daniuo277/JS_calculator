var decimal_status = false;
var number1 = '';
var number2 = '';
var hoese = '';
var main_display = document.getElementById('display');

function addNumber(number) {
  if (main_display.innerHTML == 0 && number == ',' && decimal_status == false) {
    main_display.innerHTML += number;
    decimal_status = true;
  } else if (main_display.innerHTML == '0') {
    main_display.innerHTML = number;
  } else if (Number.isInteger(number)) {
    main_display.innerHTML += number;
  }
}

function cOperation(operant) {
  if (hoese === '' && number1 == '') {
    hoese = operant;
    number1 = parseFloat(main_display.innerHTML);
    console.log(number1);
    main_display.innerHTML = '0';
    decimal_status = false;
  }
  if (number1 !== '') {
    main_display.innerHTML = '0';
    hoese = operant;
  }
  if (hoese) {
    hoese = operant;
  }
}

function exual() {
  var result = 0;
  if (number1 && hoese && result == 0) {
    number2 = parseFloat(main_display.innerHTML);
    switch (hoese) {
      case 1:
        if (parseFloat(number2) == 0) {
          result = "Can't divide by zero";
        } else {
          result = number1 / number2;
        }
        break;
      case 2:
        result = number1 * number2;
        break;
      case 3:
        result = number1 - number2;
        break;
      case 4:
        result = number1 + number2;
        break;
    }
    main_display.innerHTML = result;
    number1 = result;
    hoese = '';
    number2 = '';
    decimal_status = false;
  }
  // if (number1 && number2) {
  //   result = result - parseFloat(main_display.innerHTML);
  //   main_display.innerHTML = result;
  // }
}

function changePlus() {
  main_display.innerHTML = parseFloat(main_display.innerHTML) * -1;
}

function clearScreen(type) {
  if (type == 1) {
    decimal_status = false;
    number1 = '';
    number2 = '';
    hoese = '';
    main_display.innerHTML = '0';
  }
  if (type == 2) {
    main_display.innerHTML = '0';
  }
}
