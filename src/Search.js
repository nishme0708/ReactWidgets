import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [ search, setSearch ] = useState('');
    const [ results, setResults ] = useState([]);

    useEffect(
        () => {
            let timer;
            const searchData = async () => {
                const res = await axios.get('https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: search
                    }
                });
                console.log('res', res.data);
                setResults(res.data.query.search);
            };
            if (search) {                
                timer = setTimeout(searchData, 500);
            } else {
                setResults([]);
            }
            return ()=>{
                if(timer)clearTimeout(timer);
            }
        },
        [ search ]
    );

    const resultData = results.map((result) => (
        <div className='item' key={result.pageid}>
            <div className='right floated content'>
                <a href={`https://en.wikipedia.org/?curid=${result.pageid}`} className='ui button' target='_blank'>
                    Go
                </a>
            </div>
            <div className='content'>
                <div className='header'>{result.title}</div>
                <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
            </div>
        </div>
    ));
    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input type='text' className='input' value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className='ui celled list'>{resultData}</div>
        </div>
    );
};

export default Search;
