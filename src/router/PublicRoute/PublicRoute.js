import { Route } from 'react-router-dom';

export const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                Layout ? (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};
