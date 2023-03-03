import { Info } from '@mui/icons-material';
import React from 'react';
import './widget.style.scss'
const WidgetsComponent = () => {
    return (
        <div className='widgets'>
            <div className="widget__header">
                <h2>LinkedIn News</h2>
                <Info/>
            </div>
        </div>
    );
}

export default WidgetsComponent;
