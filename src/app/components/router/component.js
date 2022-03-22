import {
    Route,
    Routes,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout } from '..';

function Router(props) {
    const { routes, children } = props;
    const router = routes.map((item) => {
        const {
            Component, exact, path, key,
        } = item;
        return (
            <Route
                path={path}
                exact={exact === undefined ? false : exact}
                key={key}
                element={
                    <Component />
                }
            />
        );
    }, []);
    return (
        <Routes>
            <Route element={<Layout />}>
                {[...router, ...(Array.isArray(children) ? children : [children])]}
            </Route>
        </Routes>
    );
}

Router.propTypes = {
    routes: PropTypes.array.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
Router.defaultProps = {
    children: null,
};
export default Router;
