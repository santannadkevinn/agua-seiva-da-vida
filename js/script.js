function element02(){
    let element1 = window.document.getElementById('element2')
    element1.style.background = 'gray'
    element1.style.color = 'white'
    element1.style.border = '0px'
    let res = window.document.getElementById('whyNot')
    res.innerHTML = 'Este material hidrolisa em água formando ácido sulfúrico, que é responsável pelos efeitos irritantes listados a seguir: Causa irritação ao trato gastrointestinal, sintomas podem incluir náuseas, vômito e diarreia. Já foram registrados casos de envenenamentos fatais com apenas 30g de alumínio.'
    let element11 = window.document.getElementById('element1')
    element11.style.background = 'white'
    element11.style.color = 'black'
    element11.style.border = '1px solid black'
}
function element03(){
    let element = window.document.querySelector('li#element3')
    element.style.background = 'gray'
    element.style.color = 'white'
    element.style.border = '0px'
    let res = window.document.getElementById('whyNot')
    res.innerHTML = ''
    let element11 = window.document.getElementById('element2')
    element11.style.background = 'white'
    element11.style.color = 'black'
    element11.style.border = '1px solid black'
    
}