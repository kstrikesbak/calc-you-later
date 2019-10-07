
function calculate(num1,num2,operation) {

    const actualNum1 = Number(num1)
    const actualNum2 = Number(num2)

    if (operation==='+') {
    return actualNum1 + actualNum2;
    } else if (operation==='-' ) {
    return actualNum1 - actualNum2;
    } else if (operation==='x' ) {
    return actualNum1 * actualNum2;
    } else if (operation==='/') {
    return actualNum1 / actualNum2;
    } else if (operation==='/') {
    return actualNum1 / actualNum2;
    } else if (operation==='%') {
    return actualNum1 % actualNum2;
    } else if (operation==='plus') {
    return actualNum1 + actualNum2;
    } else if (operation==='minus') {
    return actualNum1 - actualNum2;
    } else if (operation==='times') {
    return actualNum1 * actualNum2;
    } else if (operation==='X') {
    return actualNum1 * actualNum2;
    } else if (operation==='modulus') {
    return actualNum1 % actualNum2;
    } else if (operation==='mod') {
    return actualNum1 % actualNum2;
    } else if (operation==='added to') {
    return actualNum1 + actualNum2;
    } else if (operation==='subtracted from') {
    return actualNum1 - actualNum2;
    } else if (operation==='multiplied by') {
    return actualNum1 * actualNum2;
    } else if (operation==='divided by') {
    return actualNum1 / actualNum2;
    } else {
    return "Sorry, that's not a mathematical operation!"
    }
}

module.exports = calculate;