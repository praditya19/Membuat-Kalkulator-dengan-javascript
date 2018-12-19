let input1DOM = document.getElementById("input1")
let input2DOM = document.getElementById("input2")

function kali(){
    let hasilluas= input1DOM.value * input2DOM.value
    document.getElementById('hasil').value = hasilluas
}

function tambah(){
    let hasilluas= parseInt(input1DOM.value) + parseInt(input2DOM.value)
    document.getElementById('hasil').value = hasilluas
}

function kurang(){
    let hasilluas= parseInt(input1DOM.value) - parseInt(input2DOM.value)
    document.getElementById('hasil').value = hasilluas
}

function bagi(){
    let hasilluas= parseInt(input1DOM.value) / parseInt(input2DOM.value)
    document.getElementById('hasil').value = hasilluas
}

function myFunction(){
    document.getElementById("myForm").reset();
}

