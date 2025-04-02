const botao = document.querySelector('.adicionar')
const texto = document.querySelector('.tarefa')
const listacomp = document.querySelector('.lista')

let lista = []

function adicionar() {
    lista.push({
        item: texto.value,
        concluida: false
    })
    
    texto.value = ''

   
    aparecer_na_tela()

    
   
}

function aparecer_na_tela() {

    let task = ''

    lista.forEach((tarefa, posicao) => {
        task = task + `
          <li class="task ${tarefa.concluida && "done"}">
                <img  src="./img/checked.png" alt="" onclick="concluir(${posicao})">
                <p>${tarefa.item}</p>
                <img src="./img/trash.png" alt="" onclick="deletar(${posicao})">
            </li>
        `
   
    })


    listacomp.innerHTML = task

    localStorage.setItem('list', JSON.stringify(lista))
    
}

function concluir(posicao) {
   lista[posicao].concluida= !lista[posicao].concluida

   aparecer_na_tela()
}

function deletar(posicao) {
    lista.splice(posicao, 1)

    aparecer_na_tela()
   
}

function recarregar() {
    const taskls = localStorage.getItem('list')


    if (taskls) {
        lista = JSON.parse(taskls)
    }

    aparecer_na_tela()
}

recarregar()
botao.addEventListener('click', adicionar)
