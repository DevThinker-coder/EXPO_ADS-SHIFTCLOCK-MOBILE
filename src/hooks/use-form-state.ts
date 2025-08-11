import { useState } from 'react';

const useFormState = <TData extends object>(initialState: TData) => {
  const [state, setState] = useState(initialState);

  const handleChange =
    <TKey extends keyof typeof state>(key: TKey) =>
    <TValue extends (typeof state)[TKey]>(value: TValue) => {
      setState((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    };
  return { values: state, handleChange };
};

export default useFormState;
