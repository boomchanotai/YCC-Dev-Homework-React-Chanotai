import React from 'react';
import './Purchase.css';

function Purchase(){
    return(
        <div className="ordered">
            <h1>Thanks for your order</h1>
            <div>We will email you when your items ship</div>
            <a href="#" id="browse">Browse more product</a>
        </div>
    );
}

export default Purchase;