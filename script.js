const lineas = [
  "a = 1 + 2;",
  "i++;",
  "console.log('Hola');",
  "console.log('a');",
  "let y = 'tarea';",
];

function LineaRandom(){
  return lineas[Math.floor(Math.random() * lineas.length)];
}

function crearProcesos(n){
  let procesos = [];
  
  for (let i = 1; i <= n; i++){
    let codigo = [];
    
    //aqui agregamos las lineas
    for (let j = 0; j < 3; j++){
      codigo.push(LineaRandom());
    }
    
    codigo.push("Terminado");
    procesos.push({ id: i, codigo, lineaId: 0 }); // pos = en qué línea va
  }
  
  return procesos;
}

//simulación Round Robin
function simulacion(procesos){
  let procesoActivo = true;
  
  //mientras haya lineas para procesar, la simulacion seguira
  while (procesoActivo == true){
    procesoActivo = false;
    
    //mostramos los procesos
    for (let i = 0; i < procesos.length; i++){
        let simulacionP = procesos[i];
        
        //mientras haya lineas seguira activo
        if (simulacionP.lineaId < simulacionP.codigo.length){
            console.log(`Proceso ${simulacionP.id}: ${simulacionP.codigo[simulacionP.lineaId]}`);
            simulacionP.lineaId++;
            procesoActivo = true;
        }
    }
  }
}

//let n = prompt("ingresa la cantidad de procesos");

let n = parseInt(process.argv[2]);

let procesos = crearProcesos(n);
simulacion(procesos);