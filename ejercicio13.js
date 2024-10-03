/* Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe 
dentro de dicho array. Esta función comprueba si existe el elemento, 
y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.*/

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function nameFinder(nameList, nameToFind) {
  // Buscamos la posición del nombre usando indexOf
  let position = nameList.indexOf(nameToFind)

  if (position !== -1) {
    // Si el nombre existe, devolvemos true y la posición
    return { exists: true, position: position }
  } else {
    // Si no existe, devolvemos false
    return { exists: false }
  }
}

console.log(nameFinder(names, 'Tony'))
console.log(nameFinder(names, 'John'))
