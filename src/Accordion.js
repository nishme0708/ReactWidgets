import React, { useState } from 'react';

const Accordion = (props) => {
    const [ activeIndex, setActiveIndex ] = useState(0);
    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    

    const items = props.items.map((item, index) => {
        const active = index === activeIndex ? 'active': '';
        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className='dropdown icon' />
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return (
        <div className='ui styled accordion'>
            {items}
        </div>
    );
};

export default Accordion;
