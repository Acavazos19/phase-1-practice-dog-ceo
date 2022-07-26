console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMConetenLoaded', function () {

   
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let breeds = []
    
    // fetch
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => data.message.forEach(dogImage => renderImage(dogImage)))
    
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => {
            let breeds = Object.keys(data.message)
            renderBreeds(breeds)
        })
    // DOM selectors
        const dropdown = document.getElementById('breed-dropdown')
        const ul = document.querySelector('#dog-breeds')

    // Event Listeners
    dropdown.addEventListener('change', handleChange)

    //Render Functions
    function renderImage(dogImage) {
        const container = document.querySelector('#dog-image-container')
        const image = document.createElement('img')
        image.src = dogImage
        container.appendChild(image)
    }

    function renderBreeds(breeds) {
        // const ul = document.querySelector('#dog-breeds')
        breeds.forEach(breed => {
            const li = document.createElement('li')
            li.innerText = breed
            ul.append(li)
            li.addEventListener('click', changeColor)
        })
    
    }


    //call functions
    function changeColor(e) {
        e.target.style.color = "blue"
    }

    function handleChange(e) {
        let letter = e.target.value
        let filteredBreeds = breeds.filter(breed => breed.startsWith(letter))
        ul.innerHTML = ''
        renderBreeds(filteredBreeds)
    }

})