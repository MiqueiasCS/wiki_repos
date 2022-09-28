import { InputContainer } from "./styles";

const Input = ({ value, onChange }) => {
  return (
    <InputContainer>
      <input
        type={"text"}
        value={value}
        onChange={onChange}
        placeholder="user/repositorio"
      />
    </InputContainer>
  );
};

export default Input;
