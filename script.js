let butt_y = document.querySelector('.option1')
let butt_n = document.querySelector('.option2')
const jumscare = document.querySelector(".jumpscare")
let audio = document.querySelector("audio")
let scale = 20
let margin = 5

let answers = ["Na pewno?","aha?","Przestań!","To nie jest zabawne...","Będzie mi przykro","Popłaczę się zaraz",":<","Przykro mi teraz","Dobra jeszcze raz to pożałujesz!"]
let i = 0



butt_n.addEventListener('click',()=>{
    
    butt_n.innerText = answers[i]
    i++
    // if(i==answers.length+1){
    //     audio.play()
    //     jumscare.style.visibility="visible"
    // }
    scale+=5
    margin-=0.5
    butt_n.style.marginLeft = margin+"vw"
    butt_y.style.padding = scale+"px"; 
    butt_y.style.fontSize = scale+"px"; 
    butt_y.style.marginRight = margin+"vw"
})