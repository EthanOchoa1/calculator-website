let num1 = "", num2 = "", op = "", result = 0;// creating empty string

function num_click(num){

    the_place= document.getElementById("the-box");
    the_place.value+= num;

///new logic
//if operator in the_place && the_place!= empty then
// get everything exc

            // is there an op in string
    if (the_place.value.includes('+') || the_place.value.includes('-') || the_place.value.includes('/') || the_place.value.includes('*')){
        if(num != '+' && num != '-' && num != '/' &&num != '*'){ // if not an op add to num2
            num2 += String(num);
        }
    }
    else{

        num1+= String(num); // concatinating the string
    }
    if(num == '+' || num == '-' || num == '/' ||num == '*' ){ //making variable = op
        op += num;
    }
    
    console.log(num1);
    console.log(num2);
    console.log(op);
}

function ac(){
    the_place= document.getElementById("the-box");
    the_place.value= "";
    num1= ' ';
    result=0;
}

function total() {
    const firstNumber = Number(num1);
    const secondNumber = Number(num2);
    switch (op) {
      case "+":
        result = firstNumber + secondNumber;
        //console.log(String(result));
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
    }
    the_place= document.getElementById("the-box");
    the_place.value = result;
    console.log(result);
    num1 = String(result);
    num2 = "", op = "";
  }
