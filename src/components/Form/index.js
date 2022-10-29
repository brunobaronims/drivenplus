import {
  FormContainer,
  Input,
  ButtonContainer
} from './styled';

function Button() {
  return (
    <ButtonContainer />
  );
}

function Inputs({ inputData, setInputData }) {
  return (
    Object.entries(inputData).map(i => {
      return (
        <Input
          key={i[0]}
          type='text'
          placeholder={i[0]}
          value={inputData[i[0]]}
          onChange={(e) => setInputData({
            ...inputData, [i[0]]: e.target.value
          })}
        />
      );
    })
  );
};

export default function Form({ inputData, setInputData, formType }) {
  return (
    <FormContainer>
      <Inputs
        inputData={inputData}
        setInputData={setInputData}
        value='Lost'
      />
      <Button />
    </FormContainer>
  );
};