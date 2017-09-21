import React from 'react';
import {render} from 'react-dom';
import Todo from './scenes/Todo';

import './styles/app.scss';

const Root = () => {
    return (
        <Todo />
    )
}

render(<Root />, document.getElementById('app'));