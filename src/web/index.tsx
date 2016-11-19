import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Title } from './components/title';
import { Selector } from './components/selector';

ReactDOM.render(<Title />, document.getElementById('title'));
ReactDOM.render(<Selector />, document.getElementById('selector'));