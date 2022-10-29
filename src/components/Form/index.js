import {
  FormContainer,
  Input,
  Button
} from './styled';

function Inputs({ inputData, setInputData }) {
  return (
    Object.entries(inputData).map(i => {
      return (
        <Input
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

export default function Form({ inputData, setInputData }) {
  return (
    <FormContainer>
      <Inputs
        inputData={inputData}
        setInputData={setInputData}
      />
    </FormContainer>
  );
};