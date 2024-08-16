

import React from 'react';
import ReactDOM from 'react-dom/client';

const heading=React.createElement('div',{},"hello world from react parcel");

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);