import { Flex, Input, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "../../components/form";
import InputForm from "../../components/inputForm";
import useError from "../../hooks/useError";
import useInput from "../../hooks/useInput";
import { verify } from "../../utils/password";

const SignUp = () => {
    const [name, setName, modifyName] = useInput("");
    const [mail, setMail, modifyMail] = useInput("");
    const [password, setPassword, modifyPassword] = useInput("");
    const [confirmPassword, setConfirmPassword, modifyConfirmPassword] = useInput("");

    const [error, setError] = useError("", 5000);

    const submit = () => {
        if (!verify(password, confirmPassword)){
            setError("The password is not the same different")
        }
    };

    useEffect(()=>{}, [error])

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
                        <InputForm placeholder={"name"} onChange={modifyName} />
                        <InputForm placeholder={"mail"} onChange={modifyMail} />
                        <InputForm placeholder={"password"} onChange={modifyPassword} />
                        <InputForm placeholder={"confirm password"} onChange={modifyConfirmPassword} />
                        <Input
                            type={"button"}
                            w={"150px"}
                            h={"50px"}
                            value={"Create"}
                            onClick={submit}
                            />
                    </>
                }
                reverse={true}
                error={error}
                />
        </Flex>
    )
};

export default SignUp;