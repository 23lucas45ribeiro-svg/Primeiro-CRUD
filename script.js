
let listaElementos = [];
let index = 0;

function salvarDados() {
    // CREATE - C
            
    let entrada = document.getElementById("entrada").value

    let entradaObjeto = {
        id:index,
        texto:entrada
    };

    index++;

    listaElementos.push(entradaObjeto)        
    mostrar()
};


function mostrar () {
// READ - R
            
    let li = document.getElementById("resultado")
    let html = ""
            

        listaElementos.forEach(elemento => {
        html += `<li class="justificar-itens">
                ${elemento.texto}
                <button class="botao-container" onclick="editar(${elemento.id})">
                    editar
                </button>

                <button class="botao-container" onclick="deletar(${elemento.id})">
                    deletar
                </button>                        
            </li>`
        })
            
    li.innerHTML = html
};
        
function editar(id) {
    let resultado = listaElementos.find( obj => obj.id === id)
    let html = `<input class="sessao-entrada-input" id="textoParaEditar" type="text">
            
                <button class="botao-container" onclick="editarDados(${id})">
                    Editar
                </button>`
                            
    let divEditar = document.getElementById("editar");
            
    divEditar.innerHTML = html
};
        
function editarDados(id) {
//  UPDATE - U

    let textoParaEditar = document.getElementById("textoParaEditar").value
    let resultado = listaElementos.find( obj => obj.id === id)
            
    resultado.texto = textoParaEditar;
            
    mostrar()
            
    let divEditar = document.getElementById("editar");
    divEditar.innerHTML = ""
}

function deletar(id) {
// DELETE - D

    let listaAtualizada = listaElementos.filter(obj => obj.id !== id)

    listaElementos = listaAtualizada           
           
    mostrar()
            
}
