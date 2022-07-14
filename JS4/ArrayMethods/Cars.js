let cars = [{ brand: "Hyndai", price: 1299999, model: '120', color: 'red' },
{ brand: "Hyndai", price: 1299999, model: '120', color: 'white' },
{ brand: "Maruthi", price: 800000, model: 'Brezza', color: 'black' },
{ brand: "Tata", price: 590000, model: 'indica', color: 'red' },
{ brand: "Maruthi", price: 299999, model: 'Alto 800', color: 'white' },
{ brand: "Tata", price: 1599999, model: 'Nexon', color: 'white' },
{ brand: "BMW", price: 11299999, model: 'x7', color: 'red' }]

let new_Cars = cars.filter((car) => {
    return car.color == 'white' && car.price > 1000000
})
//console.log(cars)
console.log(new_Cars)