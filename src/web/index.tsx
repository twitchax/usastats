import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Title } from './components/title';
import { Selector } from './components/selector';

ReactDOM.render(<Title compiler="TypeScript" framework="React" />, document.getElementById('title'));
ReactDOM.render(<Selector compiler="TypeScript" framework="React" />, document.getElementById('selector'));