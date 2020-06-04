import React from 'react';
import Part from './part';

const Content = ({content}) => {
    return(
        <ul>
            {content.map(part => <Part key={part.id} content={part} />)}
        </ul>
    )
}

export default Content