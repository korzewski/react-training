import React from 'react';
import {render} from 'react-dom';
import Home from './scenes/Home';

import './styles/app.scss';

const Root = () => {
    return (
        <Home />
    )
}

render(<Root />, document.getElementById('app'));