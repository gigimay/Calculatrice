function f_calcul(id, n) {
  if (n == 'ce') {
    document.getElementById('calculResult').value = '';
  }else if (n == '=') {

    var valeursAffichees = document.getElementById('calculResult').value;
    document.getElementById('calculResult').value = eval(valeursAffichees);

  } else{
    document.getElementById('calculResult').value += n;
  }
}

function expressionEstValide(expressionAValider) {
  var expression = expressionAValider;
  var estValide = true;

  if(
    expression.charAt(expression.length) == "+" ||
    expression.charAt(expression.length) == "-" ||
    expression.charAt(expression.length) == "*" ||
    expression.charAt(expression.length) == "/" ||
    expression.charAt(expression.length) == "%" ){
    estValide = false;
  }
  if(
    expression.charAt(0) == "*" ||
    expression.charAt(0) == "/" ||
    expression.charAt(0) == "%"){
      estValide = false;
  }

  var isBugOperandExist = 0;
  for (var i = 0; i < expression.length; i++) {
    if (
        (expression.charAt(i) == "+" && expression.charAt(i+1) == "+") ||
          (expression.charAt(i) == "-" && expression.charAt(i+1) == "-") ||
          (expression.charAt(i) == "/" && expression.charAt(i+1) == "/") ||
          (expression.charAt(i) == "*" && expression.charAt(i+1) == "*") ||
          (expression.charAt(i) == "%" && expression.charAt(i+1) == "%")
        ) {
         isBugOperandExist++;
         estValide = (isBugOperandExist > 0)? false :true;
       }
  }
  return estValide;
}
