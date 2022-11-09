import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import AllRegions from './AllRegions';
import AllHours from './AllHours';
import image from './images/coffee-logo.png'
import {SelectShops} from './SelectShops';

export default function Page() {
    const allRegions = AllRegions();
    const [chosenRegion, setChosenRegion] = useState();
    const allHours = AllHours();
    const [chosenSeating, setChosenSeating] = useState();
    const [chosenOpenTime, setChosenOpenTime] = useState();
    const [chosenCloseTime, setChosenCloseTime] = useState();
    const [chosenParking, setChosenParking] = useState();

    const errorSelect = "Please select one of the search markers.";
    const [isHomeSubmitted, setIsHomeSubmitted] = useState(false);
    const [isResultsSubmitted, setIsResultsSubmitted] = useState(false);

    function submit(event) {
        event.preventDefault();
        if (chosenRegion) {
            setIsHomeSubmitted(true);
        }
        else {
            document.getElementById("error-message").className = "d-block text-danger"; 
        }
    }
    
    // Home
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

                <div id="slidein">
                    <form onSubmit={submit}>
                        <div id="region-dropdown">
                            <label htmlFor="select-region" className="form-label" id="region-label">
                                Choose an LA coffee shop region to get started:
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
                    </form>
                </div>
                
            </div>
        );    
    }
    // Results Page
    else if (!isResultsSubmitted) {
        let returnResults;

        if (!chosenSeating & !chosenOpenTime & !chosenCloseTime & !chosenParking) {
            returnResults = SelectShops(chosenRegion);
        }
            
        return (
            <div className="App">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a id="nav-title" class="navbar-brand" onClick={() => {
                        setIsHomeSubmitted(false);
                        setChosenRegion();
                        setChosenOpenTime();
                        setChosenCloseTime();
                        setChosenParking();
                    }}>
                        What's Brewing?
                    </a>
                </nav>
                
                <div id="region-title">
                    Region: {chosenRegion}
                </div>

                <div class="row" id="search-dropdowns">
                    <div class="col-sm-3">
                        <label id="open-label" htmlFor="select-open">Search by opening time:</label>
                        <select className="form-select" name="open" id="select-open" value={chosenOpenTime} onChange={((event) => {setChosenOpenTime(event.target.value);})}>
                            <option defaultValue="Select an opening time">Open by</option>
                            {allHours.map((hour) => {
                                return <option value={hour}>{hour}</option>
                            })}
                        </select>
                    </div>
                    <div class="col-sm-3">
                        <label id="close-label" htmlFor="select-close">Search by closing time:</label>
                        <select className="form-select" name="close" id="select-close" value={chosenCloseTime} onChange={((event) => {setChosenCloseTime(event.target.value);})}>
                            <option defaultValue="Select a closing time">Open until</option>
                            {allHours.map((hour) => {
                                return <option value={hour}>{hour}</option>
                            })}
                        </select>
                    </div>
                    <div class="col-sm-3">
                        <label id="seating-label" htmlFor="select-seating">
                            Search by seating availability:
                        </label>
                        <select className="form-select" name="seating" id="select-seating" value={chosenSeating} onChange={((event) => {setChosenSeating(event.target.value);})}>
                            <option defaultValue="">---</option>
                            <option value="GOOD">Good Seating</option>
                            <option value="LIMITED">Any Seating</option>
                            <option value="NONE">Don't Care</option>
                        </select>
                    </div>
                    <div class="col-sm-3">
                        <label id="parking-label" htmlFor="select-parking">
                            Search by parking availability:
                        </label>
                        <select className="form-select" name="parking" id="select-parking" value={chosenParking} onChange={((event) => {setChosenParking(event.target.value);})}>
                            <option defaultValue="">---</option>
                            <option value="Lot">Parking Lot</option>
                            <option value="Street">Street Parking</option>
                            <option value="Garage">Parking Garage</option>
                        </select>
                    </div>
                </div>

                <div id="list-shops">{returnResults}</div>
            </div>
        );
    }
    
}


