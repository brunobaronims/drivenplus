import {
  FormContainer,
  Input,
  ButtonContainer
} from './styled';

export function FormButton({ enabled, text, size }) {
  return (
    <ButtonContainer
      enabled={enabled}
      type='submit'
      small={(size === 'small')}
    >
      {text}
    </ButtonContainer>
  );
}

export function FormInputs({ inputData, setInputData, enabled, size }) {
  return (
    Object.entries(inputData).map(i => {
      return (
        <Input
          small={(size === 'small')}
          enabled={enabled}
          key={i[0]}
          type='text'
          placeholder={i[0]}
          value={inputData[i[0]]}
          onChange={(e) => {
            (enabled) ? setInputData({
              ...inputData,
              [i[0]]: e.target.value
            }) : setInputData({ ...inputData })
          }}
        />
      );
    })
  );
};

export function Form({ children, submit, data, dispatch, state, navigate }) {
  return (
    <FormContainer onSubmit={
      (e) => submit(e, data, dispatch, state, navigate)
    }>
      {children}
    </FormContainer>
  );
};