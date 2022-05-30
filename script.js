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
  if (hoese === '') {
    hoese = operant;
    number1 = main_display.innerHTML;
    console.log(number1);
    main_display.innerHTML = '0';
    decimal_status = false;
  }
  if (hoese) {
    hoese = operant;
    console.log(hoese);
  }
}
