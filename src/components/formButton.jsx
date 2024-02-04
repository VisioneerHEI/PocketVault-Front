import { Input } from "@chakra-ui/react";

const FormButton = ({value, backgroundColor, color}) => {
    return (
        <Input 
        type="button"
        value={value}
        w="85%"
        h="50px"
        border="0"
        backgroundColor={backgroundColor}
        color={color}
        fontFamily="monospace"/>
    )
};

export default FormButton;