import React, { useEffect } from "react";
import ErrorPage from "../pages/Error";
import PropTypes from 'prop-types';

const LoadError = () => {
    useEffect(()=>{
        setTimeout(()=>{
            window.location.href = "/login";
        }, 5000)
    }, [])

    return (
        <ErrorPage error_code="400" />
    );
};

const NeedTokenPage = ({Page, token}) => {
    return (
        <>
            {
                token ?
                Page
                :
                <LoadError />
            }
        </>
    );
};

NeedTokenPage.propTypes = {
    Page: PropTypes.element,
    token: PropTypes.string,
}

export default NeedTokenPage;