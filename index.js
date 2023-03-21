const saatEl = document.querySelector('.saat')
const dakikaEl = document.querySelector('.dakika')
const saniyeEl = document.querySelector('.saniye')



setInterval(()=>{
    const date = new Date();
    console.log(date.getHours())

    const saatDeg = date.getHours() / 12 * 360 - 90;
    const dakikaDeg = date.getMinutes() / 60 * 360 - 90;
    const saniyeDeg = date.getSeconds() / 60 * 360 - 90;
    
    
    saatEl.style.transform = `rotate(${saatDeg}deg)`
    dakikaEl.style.transform = `rotate(${dakikaDeg}deg)`
    saniyeEl.style.transform = `rotate(${saniyeDeg}deg)`
}, 1000)


