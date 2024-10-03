// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.
for (let i = 0; i <= 9; i++) {
  // Se ejecuta 5 veces, con valores del paso 0 al 4.
  if (i <= 4) {
    console.log(i)
  } else {
    break
  }
}

console.log('------------------------------------')

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de "x" por consola sólo cuando el resto del numero dividido entre 2 sea 0.
for (let x = 0; x <= 9; x++) {
  if (x % 2 == 0) {
    console.log(x)
  }
}

console.log('------------------------------------')

/*1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a '¡Dormido!'.*/
for (let z = 0; z <= 9; z++) {
  if (z != 9) {
    console.log('Intentando dormir 🐑')
  } else {
    console.log('Dormido!.')
  }
}
