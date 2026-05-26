// =====================================
// PESQUISA HOME
// =====================================

function pesquisarTreino(){

const valor =
document
.getElementById("pesquisaHome")
.value
.toLowerCase();

if(valor.includes("peito")){

window.location.href =
"peito.html";

}

else if(valor.includes("perna")){

window.location.href =
"perna.html";

}

else if(valor.includes("costas")){

window.location.href =
"costas.html";

}

else if(valor.includes("biceps")){

window.location.href =
"biceps.html";

}

else if(valor.includes("triceps")){

window.location.href =
"triceps.html";

}

else if(valor.includes("ombro")){

window.location.href =
"ombro.html";

}

else if(valor.includes("abdomen")){

window.location.href =
"abdomen.html";

}

else if(valor.includes("core")){

window.location.href =
"core.html";

}

else if(valor.includes("hiit")){

window.location.href =
"hiit.html";

}

else if(valor.includes("alongamento")){

window.location.href =
"alongamento.html";

}

else{

alert(
"Treino não encontrado."
);

}

}