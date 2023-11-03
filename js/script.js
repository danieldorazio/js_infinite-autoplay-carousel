// ARRAY DI IMG
const img = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg"]

// CONTAINER
const container = document.querySelector (".container");
container.classList.add("style-bg");

// ProgressEvent, NEXT BUTTON
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");


// SLIDE BASSA DI IMG
const slideImg = document.querySelector(".slide-img");



/*********************************************************************/

// creazione di elementi
const imgList = createElement(img);

// ricerca delle imagine in slide-img
const imageArray = document.querySelectorAll(".image");


// aggiunta di nel nel background
container.style.backgroundImage = "url('img/01.jpg')";

// VARIABILE INDCE IMG
let imgIndex = 1;


/*********************************************************************/
// PER FAR VISULAIZZARE 8 ELEMENTI DI SLIDE-IMG
for (let i = 0; i < 8; i++) {
    const element = imageArray[i];
    element.classList.remove("none");  
    element.classList.add("active") 
}


// FUNZIONE CHE AL CLICK DELLA FOTO IN SLIDE-IMG CAMBIA IL background CON LA FOTO CLICCATA
for (let i = 0; i < imageArray.length; i++) {
    const element = imageArray[i];
    element.addEventListener("click", function() {
        const src = this.classList[1];
        container.style.backgroundImage = `url('${src}')`;
    })
}


// FUNZIONE DI AUTOSCROLLING
let autoScrolling;
container.addEventListener("mouseover", function() {
    /***********************************************/
    // AUTOSROLLING BACKGROUN

    autoScrolling = setInterval (function() {
    const imgBg = `url('${img[imgIndex]}')`;
    if (imgIndex < img.length -1){
        imgIndex++;

    } else {
        imgIndex = 0;
    }
    console.log(imgBg);
    container.style.backgroundImage =imgBg;


    /*****************************************************/
    // AUTOSCROLLING SLIDE-IMG DA VEDERE BENE
    const allActive = document.querySelectorAll(".active");
    console.log(allActive.length);

    if(allActive.length < 8) {
            const firstNone = document.querySelector(".none");
            firstNone.classList.remove("none");
            firstNone.classList.add("active");
        }

    // trova il primo active e lo traforma in none
    const firstActive = document.querySelector(".active");
    console.log(firstActive);
    firstActive.classList.remove("active");
    firstActive.classList.remove("border-blu")
    firstActive.classList.add("none");

    // trova l'active successivo che va visliazzato e mette lo stile
    const nextActive = document.querySelector(".active");
    nextActive.classList.add("border-blu");

    // trova il non subito dopoun active e lo trassforma in active
    const lastNone = document.querySelector(".active ~ .none");
    lastNone.classList.remove("none");
    lastNone.classList.add("active");
    console.log(lastNone);
    }, 5000);
})

container.addEventListener("mouseout", function(){
    clearInterval(autoScrolling);
})

slideImg.addEventListener("mouseover", function(){
    clearInterval(autoScrolling);
})


// FUNZIONE CHE CAMBIA BACKGRROUD CON IMG SUCCESSIVA da inserire il comportamento della slide-img
nextBtn.addEventListener("click", function() {

    const imgBg = `url('${img[imgIndex]}')`;
    if (imgIndex < img.length -1){
        imgIndex++;

    } else {
        imgIndex = 0;
    }
console.log(imgBg);
container.style.backgroundImage =imgBg;
})


// FUNZIONE CHE CAMBIA BACKGRROUD CON IMG PRECEDENTE  da inserire il comportamento della slide-img
prevBtn.addEventListener("click", function() {
    const imgBg = `url('${img[imgIndex]}')`;
    if (imgIndex > 0){
        imgIndex--;

    } else {
        imgIndex = img.length - 1;
    }
console.log(imgBg);
container.style.backgroundImage =imgBg;
})



// FUNZIONE CHE CREA UN ELEMENTO IMG
function createElement(imgList) {
    for (let i = 0; i < imgList.length; i++) {
    const imgElem = document.createElement("img");
    imgElem.src = imgList[i];
    imgElem.classList.add("image", `${imgList[i]}`, "none");
    slideImg.append(imgElem);
    }
}

