import { Flex, Input, Text } from "@chakra-ui/react";
import Form from "../../components/form";
import InputForm from "../../components/inputForm";

const Login = () => {
    return (
        <Flex
            w={"100vw"}
            h={"100vh"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            >
                <Form
                    name={"Login"}
                    additional={<Text>If you want to create a new account <a href="/signUp">signUp</a></Text>}
                    inputs={
                        <>
                            <InputForm placeholder={"account"} />
                            <InputForm placeholder={"password"} />
                            <Input type={"button"}  w={"150px"} h={"50px"} value={"Login"} />
                        </>
                    }
                />
        </Flex>
    )
};

export default Login;