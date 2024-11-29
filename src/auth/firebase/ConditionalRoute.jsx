import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import PropTypes from "prop-types";

const ConditionalRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext);

    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <Loading></Loading>
    }
    

    if(user){
        return <Navigate to={location?.state ? location.state : '/'}></Navigate>
    }

    return (
        children
    );
};

ConditionalRoute.propTypes = {
    children : PropTypes.node.isRequired,
}

export default ConditionalRoute;