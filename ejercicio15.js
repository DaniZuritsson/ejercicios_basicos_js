//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta"

const products = [
  'Camiseta de Metallica',
  'Pantalón vaquero',
  'Gorra de beisbol',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
]

function palabraCamiseta(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].includes('Camiseta')) {
      console.log(list[i])
    }
  }
}

console.log(palabraCamiseta(products))
