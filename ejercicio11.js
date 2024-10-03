/*Calcular promedio mezclado: Crea una función que reciba por parámetro un array y 
cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume */
const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]

function averageWord(list) {
  let totalSuma = 0 // Para almacenar la suma
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
      totalSuma += list[i] // Si es un número, lo sumamos
    } else if (typeof list[i] === 'string') {
      totalSuma += list[i].length // Si es un string, sumamos su longitud
    }
  }
  // Calculamos el promedio dividiendo la suma total entre el número de elementos
  let promedio = totalSuma / list.length

  return promedio
}

console.log(averageWord(mixedElements))
