import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';

const App = () => {
    let items = [
        {
            title: 'What is React?',
            content: 'It is a JS framework'
        },
        {
            title: 'What is Angular?',
            content: 'It is a JS framework'
        },
        {
            title: 'What is Ember?',
            content: 'It is a JS framework'
        }
    ];
    let dropdownItems = [
        {
            label: 'Red Color',
            value: 'red'
        },
        {
            label: 'Green Color',
            value: 'green'
        },
        {
            label: 'Blue Color',
            value: 'blue'
        },
        {
            label: 'Yellow Color',
            value: 'yellow'
        }
    ];
    
    let [ colorState, setColorState ] = useState(dropdownItems[0]);
    // return <Accordion items={items} />;
    // return <Dropdown options={dropdownItems} selected={colorState} onSelect={setColorState}/>;
    return <Translate/>;
};

export default App;
