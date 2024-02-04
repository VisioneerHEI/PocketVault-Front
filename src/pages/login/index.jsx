import { Flex, Input, Text } from "@chakra-ui/react";
import Form from "../../components/form";
import FormButton from "../../components/formButton";
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
                    additional={<Text fontSize="small"><a href="/signUp">Sign Up now</a></Text>}
                    inputs={
                        <>
                            <InputForm placeholder="Email or UserName" onChange={modifyAccount} />
                            <InputForm placeholder="Password" onChange={modifyPassword} />
                            <FormButton 
                                value="Login"
                                backgroundColor="cyan"
                                color="white"/>
                        </>
                    }
                />
        </Flex>
    )
};

export default Login;