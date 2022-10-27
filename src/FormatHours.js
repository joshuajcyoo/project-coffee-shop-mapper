
export default function FormatHours(arrayOfCoffeeShops, day) {
    let workingAllHours = [];
    let finalAllHours = [];

    arrayOfCoffeeShops.map((coffeeShop) => {
        let workingCoffeeShopHours = [];
        workingCoffeeShopHours.push(coffeeShop.hours[day][0]);
        workingCoffeeShopHours.push(coffeeShop.hours[day][1][0]);
        workingCoffeeShopHours.push(coffeeShop.hours[day][1][1]);
    
        workingAllHours.push(workingCoffeeShopHours);
    });

    workingAllHours.map((info) => {
        let finalCoffeeShopHours = [];
        finalCoffeeShopHours.push(info[0]);

        let openingTime = info[1];
        let openingTimeHour = parseInt(openingTime.slice(0, 2));
        if (openingTimeHour < 12) {
            let finalOpeningTime = openingTime.slice(0, 2) + ":" + openingTime.slice(2,) + " AM";
            finalCoffeeShopHours.push(finalOpeningTime);
        }
        else {
            openingTimeHour = openingTimeHour - 12;
            if (openingTimeHour < 10) {
                let finalOpeningTime = "0" + openingTimeHour + ":" + openingTime.slice(2, ) + " PM";
                finalCoffeeShopHours.push(finalOpeningTime);
            }
            else {
                let finalOpeningTime = openingTimeHour + ":" + openingTime.slice(2, ) + "PM";
                finalCoffeeShopHours.push(finalOpeningTime);
            }
        }

        let closingTime = info[2];
        let closingTimeHour = parseInt(closingTime.slice(0, 2));
        if (closingTimeHour < 12) {
            let finalClosingTime = closingTime.slice(0, 2) + ":" + closingTime.slice(2,) + " AM";
            finalCoffeeShopHours.push(finalClosingTime);
        }
        else {
            closingTimeHour = closingTimeHour - 12;
            if (closingTimeHour < 10) {
                let finalClosingTime = "0" + closingTimeHour + ":" + closingTime.slice(2, ) + " PM";
                finalCoffeeShopHours.push(finalClosingTime);
            }
            else {
                let finalClosingTime = closingTimeHour + ":" + closingTime.slice(2, ) + "PM";
                finalCoffeeShopHours.push(finalClosingTime);
            }
        }

        finalAllHours.push(finalCoffeeShopHours);
    })

    return finalAllHours;
}