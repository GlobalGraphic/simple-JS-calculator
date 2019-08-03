const btn = document.querySelector('.btn').addEventListener('click', function(){

    let result;
    const fNum = document.querySelector('.first').value;
    const sNum = document.querySelector('.second').value;
    const choise = document.querySelector('.choise');
    const selection = choise.options[choise.selectedIndex].value;
    const plus = document.querySelector('.plus');
    const minus = document.querySelector('.minus');
    const multiply = document.querySelector('.multiply');
    const divide = document.querySelector('.divide');

    if(selection == "add") {
        result = parseFloat(fNum) + parseFloat(sNum);
        document.querySelector('.result').innerHTML = "The result is: " + result;
    }else if(selection == 'minus'){
        result = parseFloat(fNum) - parseFloat(sNum);
        document.querySelector('.result').innerHTML = "The result is: " + result;
    } else if(selection == 'multiply') {
        result = parseFloat(fNum) * parseFloat(sNum);
        document.querySelector('.result').innerHTML = "The result is: " + result;
    } else if (selection == 'divide'){
        result = parseFloat(fNum) / parseFloat(sNum);
        document.querySelector('.result').innerHTML = "The result is: " + result;
    } else {
        document.querySelector('.result').innerHTML = "Something wrong happens with calculation";
    }

});