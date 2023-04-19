const url = 'http://localhost:3000/ramens'
const ramenMenu = document.querySelector('#ramen-menu');
const ramenDetail = document.querySelector('#ramen-detail');
const imgDetail = document.querySelector('#ramen-detail img');
const names = document.querySelector('#ramen-detail h2');
const restaurant = document.querySelector('#ramen-detail h3');
const rating = document.querySelector('#rating-display');
const comment = document.querySelector('#comment-display');
const ramenForm = document.querySelector('#new-ramen');
const submitButton = document.querySelector('#submit-button');

let ramenArray
let currentRamen

function getRamen() {
    return fetch(url) 
    .then(response => response.json())
    .then(ramens => {
        ramenArray = ramens
        currentRamen = ramenArray[0]

        ramenArray.map(ramen => {
            addRamenImage(ramen)
        })
        ramenDetails(currentRamen)
    })
}

function addRamenImage(ramen) {
    const ramenImg = document.createElement('img')
    ramenImg.src = ramen.image
    ramenImg.alt = ramen.name
    ramenMenu.append(ramenImg)

    ramenImg.addEventListener('click', () => {
        ramenDetails(ramen)
        currentRamen = ramen
    })
}

const ramenDetails = (r) => {
    imgDetail.src = r.image
    names.textContent = r.name
    restaurant.textContent = r.restaurant
    rating.textContent = r.rating
    comment.textContent = r.comment
}

ramenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let newlyAddedRamen = {
        name: e.target.name.value,
        image: e.target.image.value,
        restaurant: e.target.restaurant.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value
    }
    addRamenImage(newlyAddedRamen)
})


getRamen()
getNewRamen()