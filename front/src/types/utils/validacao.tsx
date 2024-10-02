import * as Yup from 'yup';

    validationSchema: Yup.object({
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string()
       .oneOf([Yup.ref('password'),], 'Passwords must match')
  });
  
  

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório').max(150),
    email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido').max(250),
    password: Yup.string().required().min(6).max(12),
});
