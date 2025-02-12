let butt_y = document.querySelector('.option1')
let butt_n = document.querySelector('.option2')
const math = document.querySelector(".math")
const input = document.querySelector("input")
const answer = "(0,R)"
const site = "https://pl.pornhub.com/view_video.php?viewkey=ph62a380924030e"
let i=0


butt_n.addEventListener('click',()=>{
    if(i){
        if(answer == input.value){
            window.open(site)
        }else
        alert("Błędna Odpowiedź!!!")
    }
    math.style.opacity="1"
    i++
})