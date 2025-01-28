let cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.onmousemove = function(e){
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px')
    }
})


let cards2 = document.querySelectorAll('.card2');
cards2.forEach(card2 => {
    card2.onmousemove = function(e){
        let x = e.pageX - card2.offsetLeft;
        let y = e.pageY - card2.offsetTop;

        card2.style.setProperty('--x', x + 'px');
        card2.style.setProperty('--y', y + 'px')
    }
})

let cards3 = document.querySelectorAll('.card3');
cards3.forEach(card3 => {
    card3.onmousemove = function(e){
        let x = e.pageX - card3.offsetLeft;
        let y = e.pageY - card3.offsetTop;

        card3.style.setProperty('--x', x + 'px');
        card3.style.setProperty('--y', y + 'px')
    }
})
let cards4 = document.querySelectorAll('.card4');
cards4.forEach(card4 => {
    card4.onmousemove = function(e){
        let x = e.pageX - card4.offsetLeft;
        let y = e.pageY - card4.offsetTop;

        card4.style.setProperty('--x', x + 'px');
        card4.style.setProperty('--y', y + 'px')
    }
})
