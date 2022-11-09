import dataJSON from './CoffeeData.json';
import CurrentDay from './CurrentDay';
import FormatHours from './FormatHours';

function SelectShops(region) {
    const coffeeShopData = dataJSON;
    const today = CurrentDay();
    let selectedShops = [];
    
    coffeeShopData.map((coffeeShop) => {
        if (coffeeShop.region === region) {
            selectedShops.push(coffeeShop);
        }
    })
    let selectedShopsHours = FormatHours(selectedShops, today);

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

    let currentShopNumber = 0;

    return (
        <table className="table table-bordered w-75">
            {selectedShops.map((shop) => {
                let currentShopHours = selectedShopsHours[currentShopNumber];
                currentShopNumber += 1;

                return (
                    <tr>
                        <td>
                            <div id="search-info">
                                <div className="shop-title">{shop.name}</div>
                                <div className="shop-address">Address: {shop.address}</div>

                                        <div className="shop-hours">Today's Hours ({currentShopHours[0]}): {currentShopHours[1]} - {currentShopHours[2]}</div>
                            </div>
                        </td>
                        <td>
                            <div>
                                Insert Image Here 
                            </div>
                        </td>
                    </tr>
                )
            })}
        </table>
    );
}



export {SelectShops};