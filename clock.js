let nameInput = prompt('Adiniz nedir?')

let timeStamp = document.getElementById('myClock')
let isim = document.getElementById('myName')
isim.innerHTML = nameInput;

function updateDate() {
    let d = new Date()
    let gun = d.getDay()
    let saat = d.getHours()
    let dakika = d.getMinutes()
    let saniye = d.getSeconds()

    function addZero(n) {
        if (n < 10) {
            return '0' + n
        } else return n 
    }

    let gunler = ['Pazar','Pazartesi','Sali','Çarşamba','Perşembe','Cuma','Cumartesi']


    let currentTime = `${addZero(saat)}:${addZero(dakika)}:${addZero(saniye)} ${gunler[gun]}`
    timeStamp.innerHTML = currentTime;

    setTimeout('updateDate()', 1000); 
}