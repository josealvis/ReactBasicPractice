import React from 'react';
// stateless component
export const Header  = (props)=>{
    return (
        <div>
            <h1>header {2+3}</h1>
            {props.children}
        </div>
    );
};

