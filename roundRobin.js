let n = prompt("Ingresa la cantidad de procesos (1-3)");

const lineas = [
  "a = 1 + 2;",
  "i++;",
  "console.log('Hola');",
  "console.log('a');",
  "let y = 'tarea';",
];

let procesos = [];

//agregamos las lineas a los 3 procesos
for (let i = 1; i <= n; i++) {
  let codigo = [];
  
  //aqui agregamos las lineas
  for (let j = 0; j < 3; j++) {
    codigo.push(lineas[Math.floor(Math.random() * lineas.length)]);
  }
  
  codigo.push("Terminado");
  
  procesos.push({ id: i, codigo, lineaId: 0 });
}

const container = document.getElementById("procesosContainer");

//Crear las cards en HTML que simularan la consola
for (let i = 0; i < procesos.length; i++) {
  let simulacionP = procesos[i]; //proceso actual
  const card = document.createElement("div");
  
  card.className = "col-md-4";
  card.innerHTML = `
    <div class="card">
      <div class="card-header">Proceso ${simulacionP.id}</div>
      <div class="card-body">
        <ul class="list-group list-group-flush" id="proceso-${simulacionP.id}-codigo"></ul>
      </div>
    </div>
  `;
  
  container.appendChild(card);
}

//proceso de simulacion round robin
function simulacion() {
  for (let i = 0; i < procesos.length; i++) {
    let simulacionP = procesos[i];
    
    if (simulacionP.lineaId < simulacionP.codigo.length) {
      const ul = document.getElementById(`proceso-${simulacionP.id}-codigo`);
      
      const li = document.createElement("li");
      
      li.className = "list-group-item";
      li.textContent = simulacionP.codigo[simulacionP.lineaId];
      ul.appendChild(li);
      simulacionP.lineaId++;
    }
    
  }
}

// Botón "Siguiente turno"
document.getElementById("consola").addEventListener("click", simulacion);

