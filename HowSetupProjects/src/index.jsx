// Import modules from the node_modules
// based on the given 'from' <module folder name> the module will be loaded through the package.json file in the module folder name.
import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => {
    return (
        <div>
            Hallo
        </div>
    )
}

ReactDOM.render(
    React.createElement(Hello),
    document.getElementById('app')
);