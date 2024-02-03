import { Flex } from "@chakra-ui/react";
import LoginForm from "./components/loginForm";

const Login = () => {
    return (
        <Flex
            w={"100vw"}
            h={"100vh"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            >
                <LoginForm />
        </Flex>
    )
};

export default Login;