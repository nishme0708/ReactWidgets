import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Router from './Router';

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

    const showAccordion = () => {
        if (window.location.pathname === '/') {
            return <Accordion items={items} />;
        }
    };
    const showDropDown = () => {
        if (window.location.pathname == '/dropdown') {
            return <Dropdown options={dropdownItems} selected={colorState} onSelect={setColorState} />;
        }
    };

    const showTranslate = () => {
        if (window.location.pathname === '/translate') {
            return <Translate />;
        }
    };

    const showList = () => {
        if (window.location.pathname === '/list') {
            return <Search />;
        }
    };

    let [ colorState, setColorState ] = useState(dropdownItems[0]);
    return (
        <div>
            {
                <Router path='/'>
                    <Accordion items={items} />
                </Router>
            }

            {
                <Router path='/list'>
                    <Search />
                </Router>
            }

            {
                <Router path='/translate'>
                    <Translate />{' '}
                </Router>
            }

            {
                <Router path='/dropdown'>
                    <Dropdown options={dropdownItems} selected={colorState} onSelect={setColorState} />
                </Router>
            }
        </div>
    );
};

export default App;
