let valores = []
let soma_valores = 0

function adicionar(){
    let num = Number(document.getElementById('txtnum').value)
    if(valores.includes(num) || num.length == 0 || num < 1 || num > 100){
        window.alert('Valor inválido ou já encontrado na lista.')
    } else{
        let select = document.getElementById('select')
        let option = document.createElement('option')
        option.innerHTML += `Valor ${num} adicionado. <br>`
        select.appendChild(option)
        if (valores.length == 0){
            maior = num
            menor = num
        } else{
            if (num > maior){
                maior = num
            }
            if (num < menor) {
                menor = num
            }
        }
        document.getElementById('txtnum').value = ''
        document.getElementById('txtnum').focus()
        valores.push(num)
        soma_valores += Number(num)
        document.getElementById('total').innerText = ''
    }
}

function finalizar(){
    let total = document.getElementById('total')
    total.innerHTML = `
    Ao todo, temos ${valores.length} números cadastrados. <br> 
    O maior valor informado foi ${maior}. <br>
    O menor valor informado foi ${menor}. <br>
    Somando todos os valores temos ${soma_valores}. <br>
    A média dos valores digitados é ${soma_valores / valores.length}.`
}

