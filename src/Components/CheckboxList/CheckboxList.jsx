import React, { useState } from 'react';
import './CheckboxList.css';

function CheckboxList() {
    const options = ['Rabin-Karp', 'Suffix Tree', 'Suffix Array', 'Naive String Matching', 'KMP'];
    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems({ ...checkedItems, [name]: checked });
    };

    const handleAnalyzeResults = () => {
        // Implement your logic to analyze the results here
        console.log('Checked Items:', checkedItems);
    };

    return (
        <div className="checkbox-list">
            {options.map((option, index) => (
                <div key={index} className="checkbox-container">
                    <input
                        type="checkbox"
                        name={option}
                        checked={checkedItems[option] || false}
                        onChange={handleCheckboxChange}
                        className="checkbox-input"
                    />
                    <label className="checkbox-label">{option}</label>
                </div>
            ))}
            <button className="analyze-button" onClick={handleAnalyzeResults}>
                Analyze Results
            </button>
        </div>
    );
}

export default CheckboxList;
