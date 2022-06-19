function contar(){
    var inicio = document.getElementById('txtinicio').value
    var num_inicio = Number(inicio)
    var fim = document.getElementById('txtfim').value
    var num_fim = Number(fim)
    var passo = document.getElementById('txtpasso').value
    var num_passo = Number(passo)
    var res = document.getElementById('res')
    
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0){
        window.alert('[ERRO] Faltam Dados!')
    } else {
        if(num_passo == 0){
            window.alert('Passo Inválido! Considerando passo 1')
            num_passo = 1
        }
        res.innerHTML = 'Contando: <br>'
        if (num_inicio < num_fim){
            while (num_inicio <= num_fim) {
                res.innerHTML += `${num_inicio} → `
                num_inicio += num_passo
        }
        } else {
            while (num_inicio >= num_fim) {
                res.innerHTML += `${num_inicio} → `
                num_inicio -= num_passo
            }
        } res.innerHTML += 'FIM'
    }
}