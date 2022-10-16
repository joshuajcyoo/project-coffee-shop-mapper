import data from './CoffeeData.json';

export default function Read() {
    const coffeeShopData = data;

    let hours = [];

    coffeeShopData.map((coffeeShop) => {
        console.log(coffeeShop.hours);
        console.log(coffeeShop.hours[0][1][0]);
        hours.push(coffeeShop.hours);
    })
    return hours;
}
