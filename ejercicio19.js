/*Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra).

Recuerda usar la función .includes() para comprobar la palabra.*/

const toys = [
  { id: 5, name: 'Transformers' },
  { id: 11, name: 'LEGO' },
  { id: 23, name: 'Hot Wheels' },
  { id: 40, name: 'Rascador de gato' },
  { id: 40, name: 'FurReal Friends gato interactivo' },
  { id: 60, name: 'Nerf Blaster' },
  { id: 71, name: 'Sylvanian Families - Familia gato' }
]

function removeToysWithCat(toyList) {
  // Creamos un nuevo array para almacenar los juguetes que NO incluyan "gato"
  let filteredToys = []

  // Recorremos el array de juguetes con for...of
  for (const toy of toyList) {
    // Si el nombre del juguete no incluye la palabra "gato", lo añadimos al nuevo array
    if (!toy.name.includes('gato')) {
      filteredToys.push(toy)
    }
  }
  return filteredToys
}

console.log(removeToysWithCat(toys))
