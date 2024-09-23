document.getElementById('btn-noakhali').addEventListener('click', function(event){
    event.preventDefault();
    console.log("hello");
    

    const donationNoakhali = +document.getElementById('donation-amount-noakhali').value;

    console.log(donationNoakhali);

    const myBalance = +document.getElementById('my-balance').innerText ;
    const myTotalBalance = myBalance - donationNoakhali ;
    document.getElementById('my-balance').innerText = myTotalBalance ;
    console.log(myTotalBalance);
    

    const donationAmount =  +document.getElementById('total-donation').innerText ;
    const totalDonation = donationAmount + donationNoakhali ;

    document.getElementById('total-donation').innerText = totalDonation ;
    console.log(totalDonation);
})
