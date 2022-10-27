export default function CurrentDay() {
    const d = new Date();
    let day = d.getDay();
    
    return day;
}