const dropTo = document.querySelectorAll('[data-dropTo]');
const priceTagEl=document.querySelectorAll('[data-price-tag]');

priceTagEl.forEach(tag =>{
    tag.addEventListener('click', () =>{
        dropTo.forEach(drop =>{
            drop.innerHTML = tag.innerHTML;
        })
    })
})