import dataJSON from './data.json';

function SelectShops(region) {
    if (!region) {
        console.log("no region");
    }

    const coffeeShopData = dataJSON;

    console.log(coffeeShopData[0]);

    return (
        <div>
            <div>{region}</div>
        </div>
    );
}

export {SelectShops};