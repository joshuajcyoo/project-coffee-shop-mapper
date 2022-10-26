import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import AllRegions from './AllRegions';
import { AllDays, AllHours } from './DayTime';
import image from './images/coffee-logo.png'
import {SelectShops} from './SelectShops';
import Map from './Map.js';
import Read from './Read';

export default function Page() {
    const allRegions = AllRegions();
    const [chosenRegion, setChosenRegion] = useState();
    const [chosenSeating, setChosenSeating] = useState();
    const allDays = AllDays();
    const allHours = AllHours();
    const [chosenOpenDay, setChosenOpenDay] = useState();
    const [chosenOpenTime, setChosenOpenTime] = useState();
    const [chosenCloseTime, setChosenCloseTime] = useState();

    const errorSelect = "Please select one of the search markers.";
    const [isHomeSubmitted, setIsHomeSubmitted] = useState(false);
    const [isResultsSubmitted, setIsResultsSubmitted] = useState(false);
    const read = Read();

    function submit(event) {
        event.preventDefault();
        if (chosenRegion || chosenSeating || chosenOpenDay) {
            setIsHomeSubmitted(true);
        }
        else {
            document.getElementById("error-message").className = "d-block text-danger"; 
        }
    }
    
    // Homeasdasdasdas
    if (!isHomeSubmitted) {    
        return (
            <div className="App">
                <div className="typewriter">
                    <h1 id="home-title">What's Brewing?</h1>
                </div>
                <div id="welcome-message">Helping you discover your next LA coffee shop.</div>

                <div>
                    <img src={image}></img>
                </div>

                {/* <ul>
                    {read.map((hours) => {
                        return <li>{hours}</li>
                    })}
                </ul> */}

                <div id="slidein">
                    <form onSubmit={submit}>
                        <div id="region-dropdown">
                            <label htmlFor="select-region" className="form-label" id="region-label">
                                Choose a coffee shop region to get started:
                            </label>
                            <select className="form-select" name="region" id="select-region" value={chosenRegion} onChange={((event) => {setChosenRegion(event.target.value);})}>
                                <option defaultValue="All Regions">All Regions</option>
                                {allRegions.map((region) => {
                                    return <option value={region}>{region}</option>
                                })}
                            </select>
                            <div id="error-message" className="d-none text-danger">{errorSelect}</div>
                        </div>

                        <button id="submit-button" type="submit" className="btn">
                            Search
                        </button>

                        {/* <div>
                            <div id="time-dropdown">
                                <label id="day-label" htmlFor="select-day">and/or, show me coffee shops open on</label>
                                <select className="form-select" name="time" id="select-day" value={chosenOpenDay} onChange={((event) => {setChosenOpenDay(event.target.value);})}>
                                    <option defaultValue="Select a day of the week">Select a day of the week</option>
                                    {allDays.map((day) => {
                                        return <option value={day}>{day}</option>
                                    })}
                                </select>
                                <label id="open-label" htmlFor="select-open">from</label>
                                <select className="form-select" name="open" id="select-open" value={chosenOpenTime} onChange={((event) => {setChosenOpenTime(event.target.value);})}>
                                    <option defaultValue="Select an opening time">Select an opening time</option>
                                    {allHours.map((hour) => {
                                        return <option value={hour}>{hour}</option>
                                    })}
                                </select>
                                <label id="close-label" htmlFor="select-close">to</label>
                                <select className="form-select" name="close" id="select-close" value={chosenCloseTime} onChange={((event) => {setChosenCloseTime(event.target.value);})}>
                                    <option defaultValue="Select a closing time">Select an closing time</option>
                                    {allHours.map((hour) => {
                                        return <option value={hour}>{hour}</option>
                                    })}
                                </select>
                            </div>
                        </div>

                        <div id="seating-dropdown">
                            <label id="seating-label" htmlFor="select-seating">
                                and/or, search by seating availability:
                            </label>
                            <select className="form-select" name="seating" id="select-seating" value={chosenSeating} onChange={((event) => {setChosenSeating(event.target.value);})}>
                                <option defaultValue="---">---</option>
                                <option value="Good Seating">Good Seating</option>
                                <option value="Any Seating">Any Seating</option>
                                <option value="Don't Care">Don't Care</option>
                            </select>
                        </div> */}
                    </form>
                </div>
                
            </div>
        );    
    }
    // Results Page
    else if (!isResultsSubmitted) {
        let returnTest = SelectShops(chosenRegion, chosenSeating);
        
        return (
            <div className="App">
                <div>{returnTest}</div>
                <div>
                    {/* <Map/> */}
                </div>
            </div>
        );
    }
    
}

