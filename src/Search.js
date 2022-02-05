import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [ search, setSearch ] = useState('');
    
    useEffect(()=>{
        axios.get()
    },[search]);
    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input type='text' className='input' value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
        </div>
    );
};

export default Search;
