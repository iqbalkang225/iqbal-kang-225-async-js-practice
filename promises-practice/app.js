const container = document.querySelector('.container')

const URL = `https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json`


// using .then method
// const createList = (data) => {

//     const itemsList = document.createElement('ul')
//     container.appendChild(itemsList)

//     data.forEach(itemData => {
//         const item = document.createElement('li')
//         item.setAttribute('class', "item")
//         item.innerHTML = `<div>
//                             <p> ${itemData.name} </p>
//                             <p> ${itemData.price} </p>
//                         </div>`
//         itemsList.appendChild(item)
//     })
// }

// const fetchData = () => {
//     fetch(URL)
//     .then(response => response.json())
//     .then(data => createList(data) )
//     .catch(error => console.log("Something went wrong"))
// }

// fetchData()


//////////////////////////////////////

// using async await
const createList = (data) => {

    const itemsList = document.createElement('ul')
    container.appendChild(itemsList)

    data.forEach(itemData => {
        const item = document.createElement('li')
        item.setAttribute('class', "item")
        item.innerHTML = `<div>
                            <p> ${itemData.name} </p>
                            <p> ${itemData.price} </p>
                        </div>`
        itemsList.appendChild(item)
    })
}


const fetchData = async () => {

    try{
        const response = await fetch(URL)
        
        if(!response.ok) throw new Error('Something went wrong')
        
        const data = await response.json()
        createList(data)
    } 
    catch (error) {
        console.log(error)
    }
}

fetchData()