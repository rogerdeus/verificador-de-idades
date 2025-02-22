function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')//querySelector('div#res')
    if(fano.value == 0 || fano.value > ano){
        window.alert('Dados Inválidos')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // == <img id ="foto">
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <16){
                //criança
                img.setAttribute('src', 'imgs/menino.png')
            } else if(idade < 29){ //poderia ser (idade >= 16 && idade < 29)
                //jovem
                img.setAttribute('src', 'imgs/jovemM.png')
            } else if(idade < 51){
                //adulto
                img.setAttribute('src', 'imgs/adulto.png')
            } else{
                //Idoso
                img.setAttribute('src', 'imgs/velho.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <16){
                //criança
                img.setAttribute('src', 'imgs/menina.png')
            } else if(idade < 29){ //poderia ser (idade >= 16 && idade < 29)
                //jovem
                img.setAttribute('src', 'imgs/jovemF.png')
            } else if(idade < 51){
                //adulto
                img.setAttribute('src', 'imgs/adulta.png')
            } else{
                //Idoso
                img.setAttribute('src', 'imgs/velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos<br>`
        res.appendChild(img)
    }
}