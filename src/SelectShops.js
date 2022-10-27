import dataJSON from './CoffeeData.json';

function SelectShops(region) {
    const coffeeShopData = dataJSON;
    let selectedShops = [];
    const date = new Date();
    
    coffeeShopData.map((coffeeShop) => {
        if (coffeeShop.region == region) {
            selectedShops.push(coffeeShop);
        }
    })

    // function formatBooleans(selectedShops) {
    //     let allBooleans = [];

    //     selectedShops.map((shop) => {
    //         if (shop.has_food) {
    //             allBooleans.push("Yes");
    //         }
    //         else {
    //             allBooleans.push("No");
    //         }

    //         if (shop.has_outlets) {
    //             allBooleans.push("Yes");
    //         }
    //         else {
    //             allBooleans.push("No");
    //         }

    //         if (shop.has_restroom) {
    //             allBooleans.push("Yes");
    //         }
    //         else {
    //             allBooleans.push("No");
    //         }

    //         // if (shop.)
    //     })
    // }

    return (
        <table className="table table-bordered w-75">
            {selectedShops.map((shop) => {
                return (
                    <tr>
                        <td>
                            <div id="shop-title">{shop.name}</div>
                            <div>Address: {shop.address}</div>
                        </td>
                        <td>
                            <div>
                                Address: {shop.address} <br/>
                                Workspace: {shop.workspace} <br/>
                                Parking: {shop.parking} <br/>
                                
                            </div>
                        </td>
                    </tr>
                )
            })}
        </table>
    );
}

export {SelectShops};