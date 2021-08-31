const closedEmoji = document.querySelector(['.closed'])
const openEmoji = document.querySelector(['.open'])


//Add event listerner using an arrow function () => 
closedEmoji.addEventListener('click', () => {
    //If the emoji has a particular class, do this... classList is a way to check if an element has a class.
    if(openEmoji.classList.contains('open')) {
        openEmoji.classList.add('active')
        closedEmoji.classList.remove('active')
    }

    openEmoji.addEventListener('click', () => {
        if (closedEmoji.classList.contains('closed')) {
            closedEmoji.classList.add('active')
            openEmoji.classList.remove('active')
        }
    })
} )



/*
Is it the same thing for menu bars and hamburger icons open and close?


*/

