const url1 = 'https://fakestoreapi.com/products'
const xhr = new XMLHttpRequest()

xhr.open('GET', url1)

function change() {
xhr.responseType = 'json'

let input = document.getElementById('input')




xhr.onload = function() {
    let malumot = this.response

    console.log(xhr.response);


    document.getElementById('id').innerHTML = malumot[input.value - 1].id

    document.getElementById('title').innerHTML = malumot[input.value - 1].title
    document.getElementById('price').innerHTML = malumot[input.value - 1].price
    document.getElementById('description').innerHTML = malumot[input.value - 1].description
    document.getElementById('category').innerHTML = malumot[input.value - 1].category
    document.getElementById('image').src = malumot[input.value - 1].image
    // document.getElementById('rating').innerHTML = malumot.rating
    document.getElementById('rate').innerHTML = malumot[input.value - 1].rating.rate
    document.getElementById('count').innerHTML = malumot[input.value - 1].rating.count

}

// xhr.onerror = () => {
//     console.log('xatolik');
// }



}
xhr.send()