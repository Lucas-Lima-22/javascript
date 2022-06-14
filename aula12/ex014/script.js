function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#efe3cc'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#f4ae82'
    } else if (hora >= 18 && hora < 23) {
        img.src = 'fotonoite.png'
        document.body.style.background = '#594369'
    } else {
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#0c1a1d'
    }
}