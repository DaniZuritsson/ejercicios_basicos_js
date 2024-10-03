//Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.

const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumNumbers(numbers) {
  const initialValue = 0
  const sumWithInitial = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  )

  console.log(sumWithInitial)
}
sumNumbers(numbers)
