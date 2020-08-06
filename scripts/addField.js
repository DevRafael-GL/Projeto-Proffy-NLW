// Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField() {
    //Duplicar os campos. que campos??
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou false

    //pegar os campos. Que campos??
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field){
        //Pegar o field do momento e limpar ele
        field.value = ""
    })

    //colocar na página: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}