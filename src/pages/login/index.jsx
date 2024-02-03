import { Flex, Input, Text } from "@chakra-ui/react";
import Form from "../../components/form";
import InputForm from "../../components/inputForm";
import useInput from "../../hooks/useInput";

const Login = () => {
    const [account, setAccount, modifyAccount] = useInput("");
    const [password, setPassword, modifyPassword] = useInput("");

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
                            <InputForm placeholder={"account"} onChange={modifyAccount} />
                            <InputForm placeholder={"password"} onChange={modifyPassword} />
                            <Input type={"button"}  w={"150px"} h={"50px"} value={"Login"} />
                        </>
                    }
                />
        </Flex>
    )
};

export default Login;