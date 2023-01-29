const btnDecrementEl = document.querySelector('button[data-action="decrement"]')
const btnIncrementEl = document.querySelector('button[data-action="increment"]')
const valueEl = document.querySelector('#value')

btnIncrementEl.addEventListener('click', () => {
    valueEl.textContent++;

    // якщо поставити += 1 то додавання не відбувається, 
    //до існуючого числа додається ще одна одничка
    // замість дії 1 + 1 = 2 відбуваєтсья 1 + 1 = 11. чому так?
    //тому поставив ++, так працює 
})


btnDecrementEl.addEventListener('click', () => {
    valueEl.textContent -= 1;
})


