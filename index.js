document.addEventListener("DOMContentLoaded", function() {
    const cardObjectDefinitions = [
        {id: 1, imagePath: '/images/card-KingHearts.png'},
        {id: 2, imagePath: '/images/card-JackClubs.png'},
        {id: 3, imagePath: '/images/card-QueenDiamonds.png'},
        {id: 4, imagePath: '/images/card-AceSpades.png'}
    ]

    const cardBackImgPath = 'images/card-back-Blue.png'


    const cardContainerElem = document.querySelector('.card-container')

    let cards=[]
    const playGameButtonElem = document.getElementById('playGame')

    const collapsedGrid ='"a a" "a a"'
    const cardCellClass = '.card-pos-a'







    loadGame()
    
    function loadGame() {
        createCards()

        cards=document.querySelectorAll('.card')

        playGameButtonElem.addEventListener("click" , () => startGame())

    }
    
    function startGame() {
        initNewGame()
        startRound()
    }
    function initNewGame() {
        
    }
    
    function startRound() {

        initNewRound()
        collectCards()
        debugger
        flipCards(true)
    }
    
    function initNewRound() {
        
    }
    
    function collectCards() {
        transformGridArea(collapsedGrid)
        addCardsToGridAreaCell(cardCellClass)
    }
    function transformGridArea(areas) {
        cardContainerElem.style.gridTemplateAreas = areas
    }

    function addCardsToGridAreaCell(cellPosition) {
        const cellPositionElem = document.querySelector(cellPosition)
        console.log(cellPositionElem)
        cards.forEach((card , index) =>{
            addChildElement(cellPositionElem , card)
        })
    }
    
    function flipCards(flipToBack) {
        cards.forEach((card,index) =>{
            setTimeout(() =>{
                flipCard((card,flipToBack))
            },index *100)
        })
    }
    
    function flipCard(card,flipToBack) {
        const innerCardElem = card.firstChild

        if(flipToBack && !innerCardElem.classList.contains('flip-it')) {
            innerCardElem.classList.add('flip-it')
        }else if(innerCardElem.classList.contains('flip-it')){
            innerCardElem.classList.remove('flip-it')
        }
    }

    function createCards() {
        cardObjectDefinitions.forEach((cardItem) => {
            createCard(cardItem)
        })
    }
    function createCard(cardItem) {
        const cardElem = createElement('div')
        const cardInnerElem = createElement('div')
        const cardFrontElem = createElement('div')
        const cardBackElem = createElement('div')

        const cardFrontImg = createElement('img')
        const cardBackImg = createElement('img')
        addClassToElement(cardElem, 'card')
        addIdToElement(cardElem, cardItem.id)

        addClassToElement(cardInnerElem, 'card-inner')
        addClassToElement(cardFrontElem, 'card-front')
        addClassToElement(cardBackElem, 'card-back')

        addSrcToImg(cardBackImg, cardBackImgPath)
        addSrcToImg(cardFrontImg, cardItem.imagePath)

        addClassToElement(cardBackImg, 'card-img')
        addClassToElement(cardFrontImg, 'card-img')

        addChildElement(cardFrontElem, cardFrontImg)
        addChildElement(cardBackElem, cardBackImg)

        addChildElement(cardInnerElem, cardFrontElem)
        addChildElement(cardInnerElem, cardBackElem)

        addChildElement(cardElem, cardInnerElem)

        addCardToGrid(cardElem, cardItem.id)
    }

    function createElement(elemType) {
        return document.createElement(elemType)
    }

    function addClassToElement(elem, className) {
        elem.classList.add(className)
    }

    function addIdToElement(elem, id) {
        elem.id = id
    }

    function addSrcToImg(imgElem, imgPath) {
        imgElem.src = imgPath
    }

    function addChildElement(parentElem, childElem) {
        parentElem.appendChild(childElem)
    }

    function addCardToGrid(card, id) {
        debugger;
        const cardPosition = mapCardIdToGrid(id)
        const cardPostElem = document.querySelector(cardPosition)
        addChildElement(cardPostElem, card)
    }

    function mapCardIdToGrid(id) {
        if (id === 1) {
            return '.card-pos-a'
        } else if (id === 2) {
            return '.card-pos-b'
        } else if (id === 3) {
            return '.card-pos-c'
        } else if (id === 4) {
            return '.card-pos-d'
        }
    }
});