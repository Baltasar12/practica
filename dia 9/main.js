const dogs = [{name: 'Snikers', age: 2},{name: 'hugo', age: 8}];

function makeGreen(){
    const p = document.querySelector('p');
    p.style.color = '#BADASS';
    p.style.fontSize = '50px';
}

//Regular
console.log('hello');
//Interpolated
console.log('hello I am a %s string','baltasar');
//Con estilo
//console.log('%c hello I am some great text','font-size:50px;background:yellow');

//Warning
console.warn('Peligro');
//Error
console.error('Mierda');
//Informacion
console.info('informacion loca');
//Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'Thats is wrong!');
//Para limpiar
console.clear();

//Para ver elementos DOM
console.log(p);
console.dir(p);
//Grouping together
dogs.forEach(dog =>{
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(` ${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});

//Para contar cuantas veces alguna palabra o cosa en especifico se repite
console.count('Wes');
console.count('Wes');
console.count('Wes');

//Timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data =>{
        console.timeEnd('fetching data');
        console.log(data);
    });


//Tabla
console.table(dogs);