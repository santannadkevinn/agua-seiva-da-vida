elements = ['element1','element2', 'element3', 'element4', 'element5', 'element6' ]

function element01(){
    let element1 = window.document.getElementById('element1')
    element1.style.background = 'gray'
    element1.style.color = 'white'
    element1.style.border = '0px'
    let res = window.document.getElementById('whyNot')
    res.innerHTML= 'A exposição a esse elemento pode gerar consequências desagradáveis. O cal, sendo virgem ou não, tem grande poder de lesão sobre o organismo humano. Se ingerido causa irritação nas mucosas da boca, garganta, esôfago, estômago e intestino. Pode causar dores abdominais e vômito.'
    elements = ['element5', 'element3', 'element2', 'element4', 'element6' ]
    elemento = window.document.getElementById('element1').value
    idx = elements.indexOf(elemento)
    for(i = 0;i < elements.length; i++){
        let element11 = window.document.getElementById(`${elements[i]}`)
        element11.style.background = 'white'
        element11.style.color = 'black'
        element11.style.border = '1px solid black'
       
    }
}

function element02(){
    let element1 = window.document.getElementById('element2')
    element1.style.background = 'gray'
    element1.style.color = 'white'
    element1.style.border = '0px'
    let res = window.document.getElementById('whyNot')
    res.innerHTML = 'Este material hidrolisa em água formando ácido sulfúrico, que é responsável pelos efeitos irritantes listados a seguir: Causa irritação ao trato gastrointestinal, sintomas podem incluir náuseas, vômito e diarreia. Já foram registrados casos de envenenamentos fatais com apenas 30g de alumínio.'
    elements = ['element1', 'element3', 'element4', 'element5', 'element6' ]
    elemento = window.document.getElementById('element2').value
    idx = elements.indexOf(elemento)
    for(i = 0;i < elements.length; i++){
        let element11 = window.document.getElementById(`${elements[i]}`)
        element11.style.background = 'white'
        element11.style.color = 'black'
        element11.style.border = '1px solid black'
       
    }
}
function element03(){
    let element = window.document.querySelector('li#element3')
    element.style.background = 'gray'
    element.style.color = 'white'
    element.style.border = '0px'
    let res = window.document.getElementById('whyNot')
    res.innerHTML = 'Ao ingerir essa substância os riscos à saúde são extremamente altos podendo levar a morte. Ingestão causa irritação da boca e estômago e possíveis dores abdominais, vômito, diarréia, pulsação rápida e fraca e baixa pressão sanguínea. O tipo e grau dos sintomas dependem da percentagem de cloreto férrico ingeridos.'
    elements = ['element1', 'element2', 'element4', 'element5', 'element6' ]
    elemento = window.document.getElementById('element3').value
    idx = elements.indexOf(elemento)
    for(i = 0;i < elements.length; i++){
        let element11 = window.document.getElementById(`${elements[i]}`)
        element11.style.background = 'white'
        element11.style.color = 'black'
        element11.style.border = '1px solid black'
    } 

  }  
function element04(){
    let element1 = window.document.getElementById('element4')
    element1.style.background = 'gray'
    element1.style.color = 'white'
    element1.style.border = '0px'
    let res = window.document.getElementById('whyNot')
    res.innerHTML= ''
    elements = ['element1', 'element3', 'element2', 'element5', 'element6' ]
    elemento = window.document.getElementById('element4').value
    idx = elements.indexOf(elemento)
    for(i = 0;i < elements.length; i++){
        let element11 = window.document.getElementById(`${elements[i]}`)
        element11.style.background = 'white'
        element11.style.color = 'black'
        element11.style.border = '1px solid black'
       
    }
}
function element05(){
    let element1 = window.document.getElementById('element5')
    element1.style.background = 'gray'
    element1.style.color = 'white'
    element1.style.border = '0px'
    let res = window.document.getElementById('whyNot')
    res.innerHTML= ''
    elements = ['element1', 'element3', 'element2', 'element4', 'element6' ]
    elemento = window.document.getElementById('element5').value
    idx = elements.indexOf(elemento)
    for(i = 0;i < elements.length; i++){
        let element11 = window.document.getElementById(`${elements[i]}`)
        element11.style.background = 'white'
        element11.style.color = 'black'
        element11.style.border = '1px solid black'
       
    }
}
function element06(){
    let element1 = window.document.getElementById('element6')
    element1.style.background = 'gray'
    element1.style.color = 'white'
    element1.style.border = '0px'
    let res = window.document.getElementById('whyNot')
    res.innerHTML= ''
    elements = ['element1', 'element3', 'element2', 'element4', 'element5' ]
    elemento = window.document.getElementById('element6').value
    idx = elements.indexOf(elemento)
    for(i = 0;i < elements.length; i++){
        let element11 = window.document.getElementById(`${elements[i]}`)
        element11.style.background = 'white'
        element11.style.color = 'black'
        element11.style.border = '1px solid black'
       
    }
}