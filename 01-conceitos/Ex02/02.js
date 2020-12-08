const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

 // 2.1 Map
const varMap = usuarios.map((item) =>{
  return item.idade;
})

console.log(varMap);

// 2.2 Filter
const varFilter = usuarios.filter(function(item){
    return (item.idade > 18 && item.empresa == 'Rocketseat');
});

console.log(varFilter);

// 2.3 Find
const varFind = usuarios.find((item) => {
  return (item.empresa == "Google");
})

console.log(varFind);

// 2.4 Unindo operações 
const mult2AgeUser = usuarios.map((item) => {
  return {
    ...item,
    idade: item.idade*2
  }
});

const filterHigher50 = mult2AgeUser.filter((item) => {
  return item.idade <= 50;
})

console.log(filterHigher50);