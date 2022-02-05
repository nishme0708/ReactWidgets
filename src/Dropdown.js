import React, { useState, useEffect } from 'react';

const Dropdown = ({ options, selected, onSelect }) => {
    const [ open, setOpen ] = useState(false);
    const optionData = options.map((option) => {
        if (option.value == selected.value) {
            return null;
        }
        return (
            <div className='item' key={option.value} onClick={() => {onSelect(option);console.log('item called')}}>
                {option.label}
            </div>
        );
    });

    useEffect(() => {
        document.body.addEventListener('click', () => {
            console.log('body called');
            setOpen(false);
        });
    }, []);
    console.log('first and re-render');
    return (
        <div className='ui form'>
            <div className='field'>
                <label htmlFor='' className='label'>
                    Select a color
                </label>
                <div className='ui selection dropdown' onClick={(e) => {console.log('parent called');setOpen(!open);e.stopPropagation();;}}>
                    <i className={`drodown icon ${open ? 'visible active' : ''}`} />
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{optionData}</div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
