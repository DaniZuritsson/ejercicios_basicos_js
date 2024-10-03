//Usa un bucle forof para recorrer todos los destinos del array.
const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]

let destination = ''
for (let i of placesToTravel) {
  destination += i + ', '
}

console.log(destination + '')
