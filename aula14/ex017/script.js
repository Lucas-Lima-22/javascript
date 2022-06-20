function gerador(){
    var table = document.createElement('table')
    var thead = document.createElement('thead')
    var tbody = document.createElement('tbody')
    var num = document.getElementById('txtnum').value
    var res = document.getElementById('res')

    table.appendChild(thead)
    table.appendChild(tbody)

    var tr = document.createElement('tr')
    var th = document.createElement('th')
    th.innerHTML = `Tabuada do ${num}`

    tr.appendChild(th)
    thead.appendChild(tr)

    for(c = 1; c <= 10; c++){
        var tr = document.createElement('tr')
        var td = document.createElement('td')
        td.innerHTML = `${num} x ${c} = ${num*c}`

        tr.appendChild(td)
        tbody.appendChild(tr)
        res.innerText = ''
        res.appendChild(table)
    }
}