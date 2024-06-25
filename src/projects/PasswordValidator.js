import React, {useState} from "react";
import validator from "validator";

function PasswordValidator() {

  const [message, setMessage] = useState("");

  const [isStrong, setIsStrong] = useState(false);

  const validate = (value) => {
    if (validator.isStrongPassword(value, {
      minLength:8, minLowercase:1, minUppercase:1, minNumbers:1, minSymbols:1
    })) {
      setMessage("Password is strong!")
      setIsStrong(true);
    } else {
      setMessage("Password is not strong!")
      setIsStrong(false)
    }
  }

  return ( 
    <div style={{ 
        marginLeft: '200px', 
    }}> 
        <pre> 
            <h2>Checking Password Strength in ReactJS</h2> 
            <span>Enter Password: </span><input type="text"
                onChange={(e) => validate(e.target.value)}></input> <br /> 
            {message === '' ? null : 
                <span style={{ 
                    fontWeight: 'bold', 
                    color: isStrong  ? "green" : "red", 
                }}>{message}</span>} 
        </pre> 
        <div>
            For a password to be strong it needs to contain at least:
            <ul>
                <li>8 characters</li>
                <li>1 capital and 1 non-capital letter</li>
                <li>1 number</li>
                <li>1 symbol</li>
            </ul>
        </div>
    </div> 
); 
}

export default PasswordValidator;
