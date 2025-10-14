// get the input field element
const inputField = document.querySelector("#name-input");
// get the cards div element
const cardsContainer = document.querySelector("#cards-container");
// get the name div element
const nameContainer = document.querySelector("#name-display");
// get the button element
const button = document.querySelector("#addBtn");

inputField.addEventListener('input', function() {
    nameContainer.textContent = inputField.value;
});

// function
function cardsGenerator(){
    let activities = [
        "going to the beach",
        "hanging out with friends",
        "six flags trip",
        "splish splash trip",
        "trip to puerto rico"
    ];
    activities.forEach( (activity) => {
        // make the html to be inserted
        // use backtick, left of 1 button
        let cardHTML = `<div class="card">
                            <p>${activity}</p>
                        </div>`
        // insert it
        cardsContainer.insertAdjacentHTML("afterbegin", cardHTML);
    });
}

button.addEventListener('click', cardsGenerator);
