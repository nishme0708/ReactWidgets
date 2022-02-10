import { useEffect,useState } from 'react';

const Router = ({ path, children }) => {
    const [winPath,setPath] = useState(window.location.pathname);
    const onLocationChange = ()=>{
        setPath(window.location.pathname);
    };
    useEffect(()=>{
        window.addEventListener('popstate',onLocationChange)
    },[]);
    return winPath === path ? children : null;
};

export default Router;