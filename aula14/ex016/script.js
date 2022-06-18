function contar(){
    var inicio = Number(document.getElementById('txtinicio').value)
    var fim = Number(document.getElementById('txtfim').value)
    var passo = Number(document.getElementById('txtpasso').value)
    var res = document.getElementById('res')
    if (inicio == ''){
        res.innerHTML = 'Impossível Contar!'
    } else {
        if(passo == 0){
            window.alert('Passo Inválido! Considerando passo 1')
            passo = 1
        }
        while (inicio <= fim) {
        res.innerHTML += `${inicio} → `
        inicio += passo
        } res.innerHTML += 'FIM'
    }
}