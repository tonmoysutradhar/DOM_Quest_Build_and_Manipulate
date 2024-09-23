function getInputFieldValueById (id){
    const inputValue = +document.getElementById(id).value
    return inputValue ;
}

function getTotalBalance (id){
    const inputText = +document.getElementById(id).innerText
    return inputText ;
}

function showSectionById (id) {
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}