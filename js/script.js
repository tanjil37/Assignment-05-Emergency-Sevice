
//heart count
let count = 0;
function increment(){
    count += 1; 
    document.getElementById("heart-count").innerText =count
}

//Copy Button
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        console.log("copy button clicked")
        const card = event.target.closest('.card');
        const hotlineNumber = card.querySelector('.hotline-number').textContent;
        
        // Copy the text to the clipboard
        navigator.clipboard.writeText(hotlineNumber).then(() => {
            alert(`Copied ${hotlineNumber} to clipboard!`);
            
            // Increment copy count
            let copyCount = parseInt(document.getElementById('copy-count').innerText);
            copyCount++;
            document.getElementById('copy-count').innerText = copyCount
           
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});


//Call Button
document.querySelectorAll('.call-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        let coinCount = parseInt(document.getElementById('coin-count').innerText);
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



