/*Buscar la palabra más larga: Completa la función que tomando un array de strings como 
argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.*/
const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function palabraMasLarga(array) {
  let palabraLarga = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i].length > palabraLarga.length) {
      palabraLarga = array[i]
    }
  }
  return palabraLarga
}

console.log('La palabra más larga es: ' + palabraMasLarga(avengers))
