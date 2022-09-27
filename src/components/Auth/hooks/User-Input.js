import { useState } from "react";

const UserInput = (validValue) => {
  const [valueInput, setValueInput] = useState("");
  const [isError, setIsError] = useState(false);
  const nameIsValid = validValue(valueInput);
  const nameIsInValid = !nameIsValid && isError;

  const onValueInputHandler = (e) => {
    setValueInput(e.target.value);
  };

  const onErrorHandler = () => {
    setIsError(true);
  };
  
  const reset = () => {
    setValueInput("");
    setIsError(false);
  };
  
  return {
    value: valueInput,
    nameIsValid,
    nameIsInValid,
    onValueInputHandler,
    onErrorHandler,
    reset,
  };
};

export default UserInput;