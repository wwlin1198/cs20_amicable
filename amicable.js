function GetNum1() {
    var num1 = document.getElementById("num1").value;
    return num1;
}

function GetNum2() {
    var num2 = document.getElementById("num2").value;
    return num2;
}

function isFactor(num, test_num) {
    if (num % test_num == 0) {
        return true;
    }
        return false;
}

function addArray(numArr) {
    var sum = 0;
        for (i = 0; i < numArr.length; i++) {
            sum = sum + numArr[i];
        }
        return sum;
}
    

function showArray(numArr) {
    factors = numArr;
    return factors;
}


function getFactors(number) {
    var possible_factors = new Array;
    for (int = 1; int < number; int++) {
        if (isFactor(number, int)) {
            possible_factors.push(int);
        }
    }
    return possible_factors;
}

function checkAmicable() {
    var num1 = GetNum1();
    var num2 = GetNum2();
    //adds all factors of two numbers
    var num1_sum = addArray(getFactors(num1));
    var num2_sum = addArray(getFactors(num2));

    alert("Factors for " + num1 + ": " + showArray(getFactors(num1)) + "\n" + 
          "Factors for " + num2 + ": " + showArray(getFactors(num2)));
    //check if amicable and prints under button
    if (num1 == num2) {
        document.getElementById("check_amicable").innerHTML = "Numbers are not Amicable";
    } else if (num1_sum == num2 && num2_sum == num1) {
        document.getElementById("check_amicable").innerHTML = "Numbers are Amicable!";
    } else {
        document.getElementById("check_amicable").innerHTML = "Numbers are not Amicable!";
    }
}