// creating data in cards. eg ones use in pricing membership premium cards, etc.

let data = [
    {
        name:'Mateo',
        age: 30
    },
    {
        name:'Raphael',
        age: 23
    },
    {
        name:'Michael',
        age: 22
    },
    {
        name:'Marvelous',
        age: 21
    },
    {
        name:'Janet',
        age: 21
    },
    {
        name:'Onyia',
        age: 19
    }
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return (
        '<div>' + item.name + ' ' + item.age + '</div>'
    )
       
    
})

info.innerHTML = details.join(
    '\n'
);
