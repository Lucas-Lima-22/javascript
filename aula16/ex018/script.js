valores = []
soma_valores = 0

function adicionar(){
    let num = document.getElementById('txtnum').value
    if(valores.includes(num) || num.length == 0 || num < 1 || num > 100){
        window.alert('Valor inválido ou já encontrado na lista.')
    } else{
        let select = document.getElementById('select')
        let option = document.createElement('option')
        option.innerHTML += `Valor ${num} adicionado. <br>`
        select.appendChild(option)
        document.getElementById('txtnum').value = ''
        document.getElementById('txtnum').focus()
        valores.push(num)
        soma_valores += Number(num)
        document.getElementById('total').style.display = 'none'
    }
    /*
    } else{
        let res = document.getElementById('res')
        res.innerHTML += `Valor ${num} adicionado. <br>`
        document.getElementById('txtnum').value = ''
        document.getElementById('txtnum').focus()
        valores.push(num)
        soma_valores += Number(num)
        document.getElementById('total').style.display = 'none'
    }
    */
    
}

function finalizar(){
    let total = document.getElementById('total')
    total.innerHTML = `
    Ao todo, temos ${valores.length} números cadastrados. <br> 
    O maior valor informado foi ${valores.sort().reverse()[0]}. <br>
    O menor valor informado foi ${valores.sort()[0]}. <br>
    Somando todos os valores temos ${soma_valores}. <br>
    A média dos valores digitados é ${soma_valores / valores.length}.`
    document.getElementById('total').style.display = 'block'
}