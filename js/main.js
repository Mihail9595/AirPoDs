const chooseColor = document.querySelectorAll('.choose-color__btn');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function(element){
    element.addEventListener('click', open) 
})

function open(event){
    
    const target = event.currentTarget; // метод currentTarget находим того на кого тыкнули
    const buttona = target.dataset.button; // выцепляем элемент на который тыкнули
    const contentActive = document.querySelectorAll(`.${buttona}`);

   chooseColor.forEach(function(item){
    item.classList.remove('choose-color__btn--active')
   })
   
   target.classList.add('choose-color__btn--active')
   
   contentItem.forEach(function(item) {
    item.classList.remove('content-item__active')
   });

   contentActive.forEach(function(item){
    item.classList.add('content-item__active')
   });

}

