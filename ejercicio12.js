/*Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados. */
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(list) {
  // Usamos un Set para almacenar solo valores únicos. Usando Set, éste elimina automáticamente los elementos duplicados.
  let uniqueArray = [...new Set(list)]
  // Devolvemos el array sin duplicados
  return uniqueArray
}
console.log(removeDuplicates(duplicates))
