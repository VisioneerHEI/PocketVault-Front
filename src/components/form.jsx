import { Flex, Input, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const Form = ({name, additional, inputs, reverse, error}) => {
    const a = "40%"

    useEffect(()=>{
        console.log("render");
    }, [error])

    return (
        <>
            <Flex
                flexDir={!reverse ? "row" : "row-reverse"}
                justifyContent={"space-around"}
                alignItems={"center"}
                border={"1px black solid"}
                minH={"60px"}
                h={"70vh"}
                w={"35vw"}
                borderRadius={"20px"}
                boxShadow={"1em 1em 5em"}
                backgroundColor={"grey"}>
                <Flex
                    flexDir={"column"}
                    alignItems={"center"}
                    minH={"60px"}
                    h={"350px"}
                    padding={"0 0 0 1em"}
                    w={`calc(100% - ${a})`}
                    borderRadius={"20px"}
                    >
                    <Text fontSize={"4em"}>{name}</Text>
                    {additional}
                </Flex>
                <Flex
                    flexDir={"column"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    minH={"60px"}
                    maxH={"400px"}
                    h={"70vh"}
                    w={a}
                    borderRadius={"20px"}
                    padding={"20px 0px 20px 0"}
                    >
                        {inputs}
                    </Flex>
            </Flex>
            <Flex
                backgroundColor={"red"}
                h={"67vh"}
                w={"35vw"}
                position={"absolute"}
                zIndex={"-1"}
                borderRadius={"20px"}
                flexDir={"column"}
                justifyContent={"end"}
                alignItems="center"
                paddingBottom="10"
                transitionDuration="1s"
                marginTop={error ? "80px" : "0px"}
            >{error}</Flex>
        </>
    )
};

export default Form;