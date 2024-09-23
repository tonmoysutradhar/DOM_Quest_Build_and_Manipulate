function getInputFieldValueById (id){
    const inputValue = +document.getElementById(id).value
    return inputValue ;
}

function getTotalBalance (id){
    const inputText = +document.getElementById(id).innerText
    return inputText ;
}