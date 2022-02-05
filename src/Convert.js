import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [ response, setResponse ] = useState('');
    useEffect(
        () => {
            if (text && language) {
                axios
                    .post(
                        'https://translation.googleapis.com/language/translate/v2',
                        {},
                        {
                            params: {
                                q: text,
                                target: language,
                                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                            }
                        }
                    )
                    .then((res) => res.data.data)
                    .then((data) => data.translations[0].translatedText)
                    .then(setResponse);
            }
        },
        [ language, text ]
    );
    return (
        <div>
            <h1 className='ui header'>{response}</h1>
        </div>
    );
};
export default Convert;
