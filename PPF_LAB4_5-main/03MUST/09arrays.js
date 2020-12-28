const dogs=[
{
    id: 'dog-1',
    name:'Poodle',
    temperament:[
        'Intelligent',
        'Active',
        'Alert',
        'Faithful',
        'Trainable',
        'Instinctual',
    ],
},
{
    id: 'dog-2',
    name: 'Bernese Mountain Dog',
    temperament: ['Affectionate','Intelligent', 'Loyal', 'Faithful'],
},
{
    id: 'dog-3',
    name: 'Labrador Retriver',
    temperament:[
        'Intelligent',
        'Even Tempered',
        'Kind',
        'Agile',
        'Outgoing',
        'Trusting',
        'Gentle',
    ],
},
{
    id:'dog-4',
    name: 'German Shepherd',
    temperament:[
        'Szarik',
        'Tank-driver',
        'Wardog',
        'Anti-Nazi',

    ],
},
{
    id:'dog-5',
    name: 'Scrub',
    temperament:[
        'Łajka',
        'Astronaut',
        'Communist',
        'Trusting',
        'Faithful',
        'Dead',
    ],
},
]

console.log(dogs.find(dog=>dog.name ==='Bernese Mountain Dog'));

console.log(dogs.some(dog => dog.temperament.includes('Aggressive')));

console.log(dogs.some(dog => dog.temperament.includes('Trusting')));

console.log(dogs.every(dog => dog.temperament.includes('Trusting')));

console.log(dogs.every(dog => dog.temperament.includes('Intelligent')));

console.log(dogs.map(dog => dog.name));

console.log(dogs.filter(dog =>dog.temperament.includes('Faithful')));

console.log(dogs.reduce((allTemperaments, dog) => {
    return [...allTemperaments, ...dog.temperament]
}, []));

console.log(dogs.find(dog=>dog.name ==='German Shepherd'));

console.log(dogs.filter(dog => dog.name.includes('Scrub')));

console.log(dogs.map(dog => dog.temperament));