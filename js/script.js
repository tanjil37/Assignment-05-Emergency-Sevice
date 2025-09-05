
//heart count
let count = 0;
function increment(){
    count += 1; 
    document.getElementById("heart-count").innerText =count
}




 


//Call Button
document.querySelectorAll('.call-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        console.log("Call btn clicked")
        let coinCount = parseInt(document.getElementById('coin-count').innerText);
        console.log(coinCount)
        
        if (coinCount < 20) {
            alert('Not enough coins to make a call!');
            return;
        }

        const card = event.target.closest('.card');
        const serviceName = card.querySelector('.service-name-english').textContent;
        const serviceNumber = card.querySelector('.hotline-number').textContent;
        
        alert(`Calling ${serviceName} at ${serviceNumber}`);
        
        // Deduct coins
        coinCount -= 20;
        document.getElementById('coin-count').textContent = coinCount

        const historyList = document.getElementById('history-list');
        const now =new Date();
        const callTime = now.toLocaleTimeString();

        const historyItem = document.createElement('div');
        historyItem.innerHTML = `


           

             <div class="mt-4 bg-[#F2F2F2] flex justify-between rounded-lg p-5">
              <div class="text-lg">
                <h3 class="font-semibold text-black">${serviceName}</h3>
                <p class="font-normal">${serviceNumber}</p>
              </div>
              <div class="text-lg font-normal">${callTime}</div>
            </div>
        `;
        historyList.prepend(historyItem); 
    });
});


//  Clear History
const clearHistoryBtn = document.getElementById('clear-history-btn');
const historyList = document.getElementById('history-list');

clearHistoryBtn.addEventListener('click', function() {
    historyList.innerHTML = '';
});



