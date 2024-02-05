import { useEffect } from "react";
import ErrorPage from "../pages/Error";

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

export default NeedTokenPage;