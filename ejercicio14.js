/*Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.*/
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]

function repeatCounter(list) {
  // Objeto para almacenar las repeticiones
  let wordCount = {}
  // Recorremos el array y contamos las repeticiones
  list.forEach(function (word) {
    if (wordCount[word]) {
      wordCount[word]++ // Si la palabra ya existe, incrementamos su valor
    } else {
      wordCount[word] = 1 // Si no existe, la inicializamos en 1
    }
  })

  // Devolvemos el objeto con el conteo de palabras
  return wordCount
}
console.log(repeatCounter(words))
