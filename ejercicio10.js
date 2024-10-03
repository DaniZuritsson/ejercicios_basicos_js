//Calcular promedio de la siguiente función:

const numbers = [12, 21, 38, 5, 45, 37, 6]

function average(numberList) {
  if (numberList.length === 0) {
    return 0
  }
  let suma = 0
  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i]
  }
  let promedio = suma / numberList.length
  return promedio
}

console.log(average(numbers))
