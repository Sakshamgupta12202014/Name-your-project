import React from 'react';
import './ResultsContainer.css';

const ResultsContainer = (props) => {
    const suggestNameJsx = props.suggestedNames.map((suggestName) => {
        return <p>{suggestName}</p>
    });

    return (<div>
        <p>There results are!!</p>
        <p>{suggestNameJsx}</p>
    </div>
    );
}

export default ResultsContainer;

