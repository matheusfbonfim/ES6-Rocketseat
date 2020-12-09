const arr = [1, 2, 3, 4, 5, 6];

let [x, ...y] = arr ;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// function soma...
function soma(...numeros){
  return numeros.reduce(function(valor,next){
    return valor + next;
  })
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3