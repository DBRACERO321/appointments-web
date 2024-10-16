// src/hooks/useForm.ts
import { useState } from 'react';

// Definir el hook con un tipo genérico T
const useForm = <T extends Record<string, any>>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target;

    let newValue: string | boolean = value;

    if (type === 'checkbox') {
      newValue = (e.target as HTMLInputElement).checked; // Si es un checkbox, usa checked
    }

    setValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  };

  const resetForm = () => setValues(initialValues);

  return {
    values,
    handleChange,
    resetForm,
    setValues,
  };
};

export default useForm;
