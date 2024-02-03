import { Flex, Input, Text } from "@chakra-ui/react";
import Form from "../../components/form";
import InputForm from "../../components/inputForm";
import useInput from "../../hooks/useInput";

const SignUp = () => {
    const [name, setName, modifyName] = useInput("");
    const [mail, setMail, modifyMail] = useInput("");
    const [password, setPassword, modifyPassword] = useInput("");
    const [confirmPassword, setConfirmPassword, modifyConfirmPassword] = useInput("");

    return (
        <Flex
        w={"100vw"}
        h={"100vh"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        >
            <Form
                name={"SignUp"}
                additional={
                    <Text>If you want to connect to an another account <a href="/login">Login</a></Text>
                }
                inputs={
                    <>
                        <InputForm placeholder={"name"} />
                        <InputForm placeholder={"mail"} />
                        <InputForm placeholder={"password"} />
                        <InputForm placeholder={"confirm password"} />
                        <Input type={"button"}  w={"150px"} h={"50px"} value={"Create"} />
                    </>
                }
                reverse={true}
                />
        </Flex>
    )
};

export default SignUp;