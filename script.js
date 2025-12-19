const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')
let myLi = ''

function showAll(productsArray) {
    myLi = ''

    productsArray.forEach((product) => {
        myLi += `
            <li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p>R$ ${product.price.toFixed(2)}</p>
            </li>
        `
    })

    list.innerHTML = myLi
}

function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }))

    showAll(newPrices)
}

function sumAllItens() {
    const finalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    alert(`O valor de todos os produtos somado é R$ ${finalValue.toFixed(2)}`)
}

function filterAllItens() {
    const filterVegan = menuOptions.filter(product =>{
        return product.vegan === true
    })
    showAll(filterVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
buttonSumAll.addEventListener('click', sumAllItens)
buttonFilterAll.addEventListener('click', filterAllItens)