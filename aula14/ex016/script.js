function contar(){
    var inicio = Number(document.getElementById('txtinicio').value)
    var fim = Number(document.getElementById('txtfim').value)
    var passo = Number(document.getElementById('txtpasso').value)
    var res = document.getElementById('res')
    if (document.getElementById('txtinicio').value.length == 0 || document.getElementById('txtfim').value.length == 0 || document.getElementById('txtpasso').value.length == 0){
        window.alert('[ERRO] Faltam Dados!')
    } else {
        if(passo == 0){
            window.alert('Passo Inválido! Considerando passo 1')
            passo = 1
        }
        if (inicio < fim){
            res.innerHTML = 'Contando: <br>'
            while (inicio <= fim) {
                res.innerHTML += `${inicio} → `
                inicio += passo
        } res.innerHTML += 'FIM'
        } else {
            res.innerHTML = 'Contando: <br>'
            while (inicio >= fim) {
                res.innerHTML += `${inicio} → `
                inicio -= passo
            } res.innerHTML += 'FIM'
        }
        
    }
}