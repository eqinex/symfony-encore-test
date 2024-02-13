import { Button } from "@mui/material";
import { Link, Outlet } from 'react-router-dom';

export const App = () => {

    return (
        <div>
            <Button variant="contained">Hello world</Button>
            <br/>
            <Link to="/v3/production">Go to Production</Link>
            <Outlet />
        </div>
    );
};
