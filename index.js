function calculate(opt, num1, num2){
    if (opt == "add"){
        console.log("add",num1 + num2);
    } else if (opt == "sub"){
        console.log("sub", num1 - num2);
    } else if (opt == "mul"){
        console.log("mul", num1 * num2);
    } else if (opt == "div"){
        console.log("div", num1 / num2);
    }
}

calculate("add", 10, 5);
calculate("sub", 10, 5);
calculate("mul", 10, 5);
calculate("div", 10, 5);
calculate("add", 5)