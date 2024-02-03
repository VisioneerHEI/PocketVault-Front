import { useState } from "react";

const useError = (init, timeout) => {
    const [error, setError] = useState(init);

    var time = setTimeout(()=>{
        setError(init)
    }, timeout)

    return [error, setError]
};

export default useError;