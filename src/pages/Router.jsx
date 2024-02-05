import { Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NeedTokenPage from "../components/needTokenPage";
import ErrorPage from "./Error";
import Login from "./login";
import SignUp from "./signup";

const Router = () => {
    const [error, setError] = useState(200);

    return (
        <Flex>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={
                        <NeedTokenPage Page={<Text>Test</Text>} token="2" />
                    } />
                    <Route path="*" element={<ErrorPage error_code={error} />} />
                </Routes>
            </BrowserRouter>
        </Flex>
    )
};

export default Router;