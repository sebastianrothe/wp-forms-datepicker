import { render } from 'inferno';

import App from './components/app';
import * as serviceWorker from './serviceWorker';

const [habitat, ] = document.getElementsByClassName('form datepicker registration')
if (!habitat) {
    console.warn("Could not find node for datepicker.")
} else {
    render(<App />, habitat);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
