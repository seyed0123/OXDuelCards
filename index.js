const cardObjectDefinitions=[
    {id:1 , imagePath:'/images/card-KingHearts.png'},
    {id:2 , imagePath:'/images/card-JackClubs.png'},
    {id:3 , imagePath:'/images/card-QueenDiamonds.png'},
    {id:4 , imagePath:'/images/card-AceSpades.png'}
]

const cardBackImg = '/images/card-back-blue.png'


const  cardContainerElem = document.querySelector('.card-container')
//     < div
// className = "card" >
//     < div
// className = "card-inner" >
//     < div
// className = "card-front" >
//     < img
// src = "/images/card-JackClubs.png"
// className = "card-img" >
//     < /div>
// <div className="card-back">
//     <img src="/images/card-back-Blue.png" className="card-img">
// </div>
// </div>
// </div>
function createCard(cardItem){
    const cardElem = createCard('div')
    const cardInnerElem = createCard('div')
    const cardFrontElem = createCard('div')
    const cardBackElem = createCard('div')

    const cardFrontImg = createCard('img')
    const cardBackImg = createCard('img')
    addClassToElement(cardElem ,'card')
    addIdToElement(cardElem , cardItem.id)

    addClassToElement(cardInnerElem ,'card-inner')
    addClassToElement(cardFrontElem ,'card-front')
    addClassToElement(cardBackElem ,'card-back')

    addSrcToImg(cardBackImg ,cardBackImg)
    addSrcToImg(cardFrontImg , cardItem.imagePath)

    addClassToElement(cardBackImg , 'card-img')
    addClassToElement(cardFrontImg , 'card-img')

    addChildElement(cardFrontElem , cardFrontImg)
    addChildElement(cardBackElem , cardBackImg)

    addChildElement(cardInnerElem , cardFrontElem)
    addChildElement(cardInnerElem , cardBackElem)

    addChildElement(cardElem , cardInnerElem)
}

function createElement(elemType) {
    return document.createElement(elemType)
}

function addClassToElement(elem , className) {
    elem.classList.add(className)
}

function addIdToElement(elem , id) {
    elem.id =id
}

function addSrcToImg(imgElem , imgPath) {
    imgElem.src=imgPath
}

function addChildElement(parentElem , childElem) {
    parentElem.appendChild(childElem)
}