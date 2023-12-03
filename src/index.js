import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode></React.StrictMode>); */

/* const div = document.createElement('div'); */
const root =document.getElementById('root');

/* root.appendChild(div); */

const div = React.createElement('div');
ReactDOM.createRoot(root).render(div); 