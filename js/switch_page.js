
document.getElementById('switch-page').addEventListener('click', function (event){
    event.preventDefault();
    let target = event.target.href ;
    console.log(event);

    fetch (target)
        .then(res => res.text())
        .then(data => {
           let container =  document.getElementById('show-page');
           container.innerHTML = data ;
        })
    
}) 

document.getElementById('switch-page2').addEventListener('click', function (event){
    event.preventDefault();
    let target = event.target.href ;
    console.log(event);

    fetch (target)
        .then(res => res.text())
        .then(data => {
           let container1 =  document.getElementById('show-page2');
           container1.innerHTML = data ;
        })
    
}) 