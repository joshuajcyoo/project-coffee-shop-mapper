export default function AllHours () {
    const allNumbers = Array.from({length: 11}, (_, i) => i + 1);  
    let allHours = [];
    
    allHours.push("12:00 AM");
    // allHours.push("12:30 AM");
    allNumbers.forEach(number => {
        allHours.push(number + ":00 AM");
        // allHours.push(number + ":30 AM");
    })

    allHours.push("12:00 PM");
    // allHours.push("12:30 PM");
    allNumbers.forEach(number => {
        allHours.push(number + ":00 PM");
        // allHours.push(number + ":30 PM");
    })

    return allHours;
}
