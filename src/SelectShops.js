import dataJSON from './data.json';

function SelectShops(region, seating, open, price) {
    if (!region) {
        console.log("no region");
    }
    if (!seating) {
        console.log("no seating");
    }
    if (!open) {
        console.log("no open late");
    }
    if (!price) {
        console.log("no price");
    }
    if (region && price && open && seating) {
        console.log("all set!")
    }

    const coffeeShopData = dataJSON;

    console.log(coffeeShopData[0]);

    return (
        <div>
            <div>{region}</div>
            <div>{seating}</div>
            <div>{open}</div>
            <div>{price}</div>
        </div>
    );
}

export {SelectShops};