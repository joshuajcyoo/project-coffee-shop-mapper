import AllRegions from './AllRegions';

import { useState } from 'react';

export default function Page() {
    const allRegions = AllRegions();

    const [chosenRegion, setChosenRegion] = useState();

    const [isHomeSubmitted, setIsHomeSubmitted] = useState(false);
    const [isResultsSubmitted, setIsResultsSubmitted] = useState(false);

    // Home
    if (!isHomeSubmitted) {
        return (
            <div className="App">
                <form onSubmit={((event) => {
                        event.preventDefault();
                        setIsHomeSubmitted(true);
                    })}>
                    <label htmlFor="region" className="form-label">Select a coffee shop region.</label>
                    <div id="region-dropdown">
                        <select name="region" id="region" value={chosenRegion} onChange={((event) => {setChosenRegion(event.target.value);})}>
                            <option defaultValue="---">---</option>
                            {allRegions.map((region) => {
                                return <option value={region}>{region}</option>
                            })}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );    
    }
    // Results Page
    else if (!isResultsSubmitted) {
        return <div className="App">
            <div>{chosenRegion}</div>
        </div>
    }
    
}

