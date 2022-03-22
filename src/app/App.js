import {
    BrowserRouter, Route,
} from 'react-router-dom';
import { Router, Error404 } from './components';
import routes from './pages';

import './style/index.scss';

function App() {
    return (
        <BrowserRouter>
            <Router routes={routes}>
                <Route component={Error404} />
            </Router>
        </BrowserRouter>
    );
}

export default App;
