function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
};

function divide(number1, number2) {
  return number1 / number2;
};

$(document).ready(function () {
  $("button").click(function (event) {
    const number1 = parseInt($("#num1").val());
    const number2 = parseInt($("#num2").val());
    $("#output").empty();
    if (this.id === "add") {
      $("#output").text(add(number1, number2));
    }
    else if (this.id === "subtract") {
      $("#output").text(subtract(number1, number2));
    }
    else if (this.id === "multiply") {
      $("#output").text(multiply(number1, number2));
    }
    else if (this.id === "divide") {
      $("#output").text(divide(number1, number2));
    }
    else if (this.id === "sevenCalc") {
      $("#num1").val($("#num1").val() + 7);
    }
    else if (this.id === "eightCalc") {
      $("#num1").val($("#num1").val() + 8);
    }
    else if (this.id === "nineCalc") {
      $("#num1").val($("#num1").val() + 9);
    }
    else if (this.id === "fourCalc") {
      $("#num1").val($("#num1").val() + 4);
    }
    else if (this.id === "fiveCalc") {
      $("#num1").val($("#num1").val() + 5);
    }
    else if (this.id === "sixCalc") {
      $("#num1").val($("#num1").val() + 6);
    }
    else if (this.id === "threeCalc") {
      $("#num1").val($("#num1").val() + 3);
    }
    else if (this.id === "twoCalc") {
      $("#num1").val($("#num1").val() + 2);
    }
    else if (this.id === "oneCalc") {
      $("#num1").val($("#num1").val() + 1);
    }
    else if (this.id === "zeroCalc") {
      $("#num1").val($("#num1").val() + 0);
    }
    else if (this.id === "pointCalc") {
      $("#num1").val($("#num1").val() + ".".val());
    }
    else if (this.id === "equalsCalc") {
      $("#num1").val($("#num1").val() + ".".val());
    }


    console.log("#num1");
  
                    event.preventDefault();
});

});


