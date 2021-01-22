import React from 'react';
import Menubar from '../HomePage/Menubar/Menubar';

const NoMatch = () => {
    const nmStyle = {
        background: 'linear-gradient(203deg, rgba(255,255,255,1) 0%, rgba(255,240,240,1) 27%, rgba(255,239,216,1) 54%, rgba(245,255,228,1) 81%, rgba(216,250,255,1) 100%)',
        height: '100vh'
    }
    return (
        <div style={nmStyle}>
            <Menubar></Menubar>
            <div>
                <h1 className='d-flex justify-content-center align-items-center'>
                    <span className="text-danger">Error : </span> &emsp; No web page found...
                </h1>
            </div>
        </div>
    );
};

export default NoMatch;