let liEls = document.querySelectorAll("ul li")
let modalEl = document.querySelector("#modal")
let index = 0;

function show(indexSum){
    index = index + indexSum;
    index = Math.min(Math.max(index, 0), liEls.length - 1);
    liEls[index].scrollIntoView({behavior:"smooth"});
}

setInterval( () => {
    if(index === liEls.length - 1){
        show(index - 2);
    } else{
        show(index + 1);
    }
}, 5000);

const cardOption = [
    {
    title: "Scooter Elétrica Voltz EV1",
    paragraph: "O câmbio de 5 marchas da Scooter Elétrica Voltz EV1 oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
    img: "./assets/img-card-1.png"
    },
    {
        title: "Honda CB 500X",
        paragraph:"O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
        img: "./assets/img-card-2.png",
    }
]

function showModal(index) {
    modalEl.innerHTML = ""
    modalEl.innerHTML = `
    <div class="modal-card">
        <button onclick="closeModal()">
            <img src="./assets/close-btn.png" alt="Close button">
        </button>
        <h1>${cardOption[index].title}</h1>
        <p>${cardOption[index].paragraph}</p>
        <img src="${cardOption[index].img}" alt="">
        <button>Quero assinar!</button>
    </div>`;
    modalEl.style.visibility = "visible"
}

function closeModal(){
    modalEl.style.visibility = "hidden";
}


