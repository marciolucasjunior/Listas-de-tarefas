
let  contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');


input.focus()

function addTarefa() {
 //Pegar o valor digitado no input
 let valorInput = input.value;

 //SE NÃO FOI VAZIO , NEM NULO, NEM INDEFINIDO

 if ((valorInput !=="") && (valorInput !==null) && (valorInput !== undefined)) {

//PEGANDO O ELEMENTO QUE FOI CRIADO NO HTML E ATRIBUINDO O A UMA VARIAVEL
     ++contador;

     let novoItem = `<div id="${contador}" class="item">

     <div onclick="marcarTarefa(${contador})" class="item-icone">
         <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
     </div>

     <div onclick="marcarTarefa(${contador})" class="item-nome">${valorInput}</div>
     <div class="item-botao">
         <button onclick="deletar(${contador})" class="delete">
             <i class="mdi mdi-delete"></i>Delete
         </button>
     </div>
 </div>`;

//ADCIONAR NOVO ITEM NO MAIN
 main.innerHTML += novoItem;

 //ZERAR OS CAMPINHOS
 input.value = "";
 input.focus()

 }

}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe=="item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");

        item.parentNode.appendChild(item);
    }else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    }
}

input.addEventListener('keyup', function(event) {
    //SE TECLOU ENTER (13)
    if(event.keyCode ===13) {
        event.preventDefault();
        btnAdd.click()
    }
})

