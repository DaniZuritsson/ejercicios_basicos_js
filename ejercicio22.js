/*Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante
*/
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

// Índice para recorrer las frutas sin repetir
let fruitIndex = 0

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    // Reemplazamos la comida no vegana por una fruta del array
    foodSchedule[i].name = fruits[fruitIndex]
    // Incrementamos el índice y lo reiniciamos si llegamos al final del array de frutas
    fruitIndex = (fruitIndex + 1) % fruits.length
  }
}
console.log(foodSchedule)
