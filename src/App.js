import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

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
    // return <Accordion items={items} />;
    return <Search />;
};

export default App;
