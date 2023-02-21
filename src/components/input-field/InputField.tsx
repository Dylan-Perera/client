import styled from "styled-components/native";


export interface InputField {
    placeholder?: string;

}
const StyledInputFieldTextInput = styled.TextInput`
  padding: 8px 16px;
  border-radius: 30px;
  
  
`;

const StyledInputField = styled.View`
`;



export const InputField = ({placeholder = 'placeholder'}: InputField)=>{
    return <StyledInputField>
        <StyledInputFieldTextInput placeholder={placeholder}>

        </StyledInputFieldTextInput>
    </StyledInputField>
}
