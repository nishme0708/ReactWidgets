
import React, { useState, useEffect } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const Translate = () => {
    const translateOptions = [
        {
            label: 'Afrikaans',
            value: 'af'
        },
        {
            label: 'Arabic',
            value: 'ar'
        },
        {
            label: 'Hindi',
            value: 'hi'
        }
    ];

    const [ langSelect, setLangSelect ] = useState(translateOptions[0]);
    const [text,setText] = useState('');
   

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter a Text</label>
                    <input type="text" value={text} onChange={e=>setText(e.target.value)} />
                </div>
            </div>
            
            <Dropdown options={translateOptions} selected={langSelect} onSelect={setLangSelect} label="Select a Language"/>
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert language={langSelect.value} text={text}></Convert>
        </div>
    );
};

export default Translate;
