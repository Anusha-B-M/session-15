import React, {useEffect, useState, useRef} from "react";

type  InputWithlabelProps = {
    id: string;
    value: string;
    type?: string;
    onInputChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
    isFocused?: boolean;
    children?: React.ReactNode;
}

const InputWithlabel = ({
    id, 
    children,
     type="text",
      value, 
      onInputChange,
      isFocused,
}: InputWithlabelProps) => {

    const [clickAutoFocus, setClickAutoFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        if(inputRef.current && clickAutoFocus) {
            inputRef.current.focus();
        }
    }, [clickAutoFocus]);
    

    
    return (

    <>
        <label htmlFor={id}>{children}</label>
        <input
        style={{
            display: "block",
            padding: "1rem",
            border: "none",
            outline: "none",
            borderRadius: "4px",
            margin: "1rem 0",
        }}
         id = {id}  
         type={type}
          value={value} 
          onChange={onInputChange}
           />
          </>
);
    }

export default InputWithlabel;