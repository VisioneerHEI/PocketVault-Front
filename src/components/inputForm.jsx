import { Input } from "@chakra-ui/react";

const InputForm = ({placeholder}) => {
    return (
        <Input
            minH={"20px"}
            h={"5vh"}
            w={"80%"}
            padding={"0 1em 0 1em"}
            placeholder={placeholder ? placeholder : "Default input form"}
        />
    )
};

export default InputForm;