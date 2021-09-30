
function addTwo(n1,n2) {
  let answer = n1 + n2
  return answer
  }
  
function multiplyTwo(n1,n2) {
  let answer = n1 * n2
  return answer
  }
  


btnAdd.onclick=function(){
  let num1 = Number(inptNum1.value)
  let num2 = Number(inptNum2.value)
  names = inptName.value
  lblCalculator.value = names + ", the answer is " + addTwo(num1,num2)
}


btnMultiply.onclick=function(){
  let num1 = Number(inptNum1.value)
  let num2 = Number(inptNum2.value)
  names = inptName.value
  lblCalculator.value = names + ", the answer is " + multiplyTwo(num1,num2)
}



btnReset.onclick=function(){
  lblCalculator.value = ""
  inptNum1.value = ""
  inptNum2.value = ""
}
