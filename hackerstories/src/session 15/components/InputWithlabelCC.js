import React from "react";

class InputWithlabelCC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark",
        };
    }

    render() {
        const {
            id, 
            children,
             type = "text",
              value, 
              onInputChange,
               isFocused,
        } = this.props;

        return (

            <>
                <label htmlFor={id}>{children}</label>
                <input
                 id = {id}  
                 type={type}
                  value={value} 
                  onChange={onInputChange}
                   />
                   <button onClick={() => this.setState({ theme: "light" })}>
                       Click to Toggle
                   </button>
            </>
        );

    }

}

export default InputWithlabelCC;