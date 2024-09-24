
// const myBalance = getTotalBalance('my-balance');

// funtion for Noakhali
document.getElementById('btn-noakhali')
.addEventListener('click', function(event){
    event.preventDefault();

    const donationNoakhali = getInputFieldValueById('donation-amount-noakhali');
    const myBalance = getTotalBalance('my-balance');
    const donationAmount = getTotalBalance('total-donation');

    if (typeof donationNoakhali == "number" && donationNoakhali > 0 && myBalance >= donationNoakhali) {
        const myTotalBalance = (myBalance - donationNoakhali).toFixed(2) ;
        document.getElementById('my-balance').innerText = myTotalBalance ;

        const totalDonation = (donationAmount + donationNoakhali).toFixed(2) ;

        document.getElementById('total-donation').innerText = totalDonation ;

        const div = document.createElement ('div');
        div.innerHTML = `
            <div class=" p-8 border rounded-2xl">
                <h3 class="text-xl font-bold mb-4">${donationNoakhali} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h3>
                <p class="text-[#111111b3]">Date: ${Date()}</p>
            </div>
        `;
        document.getElementById('donated-text').appendChild(div);
        
        my_modal_1.showModal();
    }
    else {
        alert("Invalid Donation Amount")
    }
})

// funtion for feni
document.getElementById('btn-feni')
.addEventListener('click', function(event){
    event.preventDefault();

    const donationFeni = getInputFieldValueById('donation-amount-feni');
    const myBalance = getTotalBalance('my-balance');
    const donationAmount = getTotalBalance('total-donation2');

    if (typeof donationFeni == "number" && donationFeni > 0 && myBalance >= donationFeni) {
        const myTotalBalance = (myBalance - donationFeni).toFixed(2) ;
        document.getElementById('my-balance').innerText = myTotalBalance ;

        const totalDonation = (donationAmount + donationFeni).toFixed(2) ;

        document.getElementById('total-donation2').innerText = totalDonation ;

        const div = document.createElement ('div');
        div.innerHTML = `
            <div class=" p-8 border rounded-2xl">
                <h3 class="text-xl font-bold mb-4">${donationFeni} Taka is Donated for Flood Relief in Feni, Bangladesh</h3>
                <p class="text-[#111111b3]">Date: ${Date()}</p>
            </div>
        `;
        document.getElementById('donated-text').appendChild(div);

        my_modal_1.showModal();

        
    }
    else {
        alert("Invalid Donation Amount")
    }
})

// funtion for flood relief
document.getElementById('btn-flood-relief')
.addEventListener('click', function(event){
    event.preventDefault();

    const donationFlood = getInputFieldValueById('donation-amount-flood');
    const myBalance = getTotalBalance('my-balance');
    const donationAmount = getTotalBalance('total-donation3');

    if (typeof donationFlood == "number" && donationFlood > 0 && myBalance >= donationFlood) {
        const myTotalBalance = (myBalance - donationFlood).toFixed(2) ;
        document.getElementById('my-balance').innerText = myTotalBalance ;

        const totalDonation = (donationAmount + donationFlood).toFixed(2) ;

        document.getElementById('total-donation3').innerText = totalDonation ;

        const div = document.createElement ('div');
        div.innerHTML = `
            <div class=" p-8 border rounded-2xl">
                <h3 class="text-xl font-bold mb-4">${donationFlood} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
                <p class="text-[#111111b3]">Date: ${Date()}</p>
            </div>
        `;
        document.getElementById('donated-text').appendChild(div);

        my_modal_1.showModal();
    }
    else {
        alert("Invalid Donation Amount")
    }
})
