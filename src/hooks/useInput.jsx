import { useState } from "react";

const useInput = (init) => {
    const [v, setV] = useState(init);

    const modify = (e) => {
        setV(e.target.value)
        console.log(v);
    };

    return [v, setV, modify]
};

export default useInput;