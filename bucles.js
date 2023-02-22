/* Bucle while */
function bucleWhile(num){
    let i = 0;
    while(i< num){
      console.log(i);
      i++;
    }
  }
  
  /*Bucle do while*/
  function doWhile(num){
    
    let i = 0;
  
    do{
      console.log(i);
      i++;
    }while(i<num)
  }
  
  function bucleFor(num){
    for (i= 0; i < num; i++){
      console.log(i);
    }  
  }
  /* recorrer array */ 
  const obj = {
    unArray: new Array(10000)
  };
  
  let long = obj.unArray.leght;
  const unArray = obj.unArray;  
    
  for(let i= 0; i< long;i++)
  {
    unArray[i] = 'Hola';
  }
    
  /*iterar array de manera secuencial*/
  const miArray = [1,2,3,4];
  miArray.forEach(function(item,index){
    console.log("el valor de la posicion " + index+" es: "+ item)
  })
  /*Iteracion con funcion de flecha para recorrer objetos*/  
  const libro = {
    titulo: "Aprendiendo Java",
    autor: "Carlos Aza",
    numPaginas: 150,
    editorial: "aprendiendo.org",
    precio: "49.90"
  }
  
  const props = 
        Object.getOwnPropertyNames(libro);
    props.forEach(name => {
      let valor = Object.getOwnPropertyDescriptor(libro, name).value
      console.log(`La prop ${name} contiene ${valor}`)
      
    })
  /*iterando objetos con for */
  
    for(let prop in libro){
      console.log(`La prop ${prop} contiene ${libro[prop]}`)
    }
  
  bucleWhile(11);
  doWhile(13)
  bucleFor(9)
    
    