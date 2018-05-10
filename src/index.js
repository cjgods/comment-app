import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComApp from './component/ComApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ComApp />, document.getElementById('root'));
registerServiceWorker();
