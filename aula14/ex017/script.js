function gerador() {
    var num = Number(document.querySelector('#txtnum').value)
    var res = document.querySelector('#res')
    if(document.querySelector('#txtnum').value.length == 0){
        window.alert('Porfavor, digite um número!')
    } else{
        res.innerHTML = ''
        for(c = 1; c <= 10; c++){
        res.innerHTML += `${num} x ${c} = ${num*c}<br>`
    }
    }
}

    /*
    c = 1
    while (c <= 10) {
        res.innerHTML += `${num} x ${c} = ${num*c}<br>`
        c++
    }
    ---------------------------------------------------
    c = 1
    do { 
        res.innerHTML += `${num} x ${c} = ${num*c}<br>`
        c++
    } while (c <= 10)
    */
