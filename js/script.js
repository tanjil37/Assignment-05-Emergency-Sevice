

// document.getElementById("heart").addEventListener("click", function(){
//     let count = 0 
//     count += 1;
   
   
//     document.getElementById("heart-count").innerText = count;
//     console.log(count)

// })

let count = 0;
function increment(){
    count += 1; 
    document.getElementById("heart-count").innerText =count
}

let copy = 0;
function copyCounter(){
    alert("Numer copyed")
    copy += 1;
    document.getElementById("copy-count").innerText=copy
}


// document.getElementById("call-btn").ATTRIBUTE_NODE.addEventListener






// document.querySelectorAll('.copy-btn').forEach(btn => {
//             btn.addEventListener('click', () => {
//                 const number = btn.dataset.number;
//                 navigator.clipboard.writeText(number).then(() => {
//                     alert(`Number ${number} copied to clipboard!`);
//                     copies++;
//                     updateNavbar();
//                 });
//             });
//         });