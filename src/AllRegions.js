import dataJSON from './data.json'

export default function AllRegions() {
    const coffeeShopData = dataJSON;
   
    let allRegions = [];

    coffeeShopData.map((coffeeShop) => {
        if (!(allRegions.includes(coffeeShop.region))) {
            allRegions.push(coffeeShop.region);
        }
    })
    return allRegions;
}

