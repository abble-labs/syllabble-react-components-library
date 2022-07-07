import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../../../../Components/UI/Button/Button';
import CheckboxField from '../../../../Components/Forms/Fields/CheckboxField';
import TextField from '../../../../Components/Forms/Fields/TextField';
import RadioGroup from '../../../../Components/Forms/Groups/RadioGroup';
import googleLogo from '../assets/google.webp';
import appleLogo from '../assets/apple.webp';

const SignupForm = () => {
    const SIGNUP_FORM_SCHEMA = Yup.object().shape({
        civility: Yup.string().required('Required!'),
        firstname: Yup.string().required('Required!'),
        lastname: Yup.string().required('Required!'),
        email: Yup.string().email('Invalid email input!').required('Required!'),
        password: Yup.string().min(8, 'Minimum 8 characters.').required('Required!'),
        passwordConfirm: Yup.string().min(8, 'Minimum 8 characters.').required('Required!'),
        terms: Yup.bool().oneOf([true], 'Field must be checked'),
      });
    
      const handleSubmit = (e) => {
        console.log(e);
      };

      return (
        <div className="mb-10 rounded-2xl text-light-800 text-sm bg-white drop-shadow-2xl p-6" style={ { width: 400 } }>
            <h1 className='text-center mb-6 text-2xl font-bold'>Signup with</h1>
            <div className="flex gap-6 justify-center mb-6">
                <Button variant='light-outline' className='w-16 h-16 justify-center'>
                    <img src={ googleLogo } alt="Google" className='w-6' />
                </Button>
                <Button variant='light-outline' className='w-16 h-16 justify-center'>
                    <img src={ appleLogo } alt="Apple" className='w-6' />
                </Button>
            </div>
            <div className='mb-6 flex gap-4 justify-center items-center'>
                <hr className='w-14 h-px bg-gradient-to-l from-light-600 border-none' />
                <span>OR</span>
                <hr className='w-14 h-px bg-gradient-to-r from-light-600 border-none' />
            </div>
            <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                civility: '',
                description: '',
                choices: '',
                selected: '',
                terms: false,
            }}
            validateOnChange={false}
            onSubmit={handleSubmit}
            validationSchema={SIGNUP_FORM_SCHEMA}
            >
            {({ errors, touched, handleChange, values }) => (
                <Form>
                    <div className="mb-3">
                        <RadioGroup name={ 'civility' } label={ 'Civitity' } touched={ touched } errors={ errors } onChange={ handleChange } required={ true } direction='row' options={ [
                        {
                            label: 'Madam',
                            value: 'Madam',
                        },
                        {
                            label: 'Mister',
                            value: 'Mister',
                        },
                        ] } />
                    </div>
                    <div className="flex gap-2 items-center">
                        <TextField name={ 'firstname' } placeholder={ 'Firstname' } touched={ touched } errors={ errors } onChange={ handleChange } required={ true } />
                        <TextField name={ 'lastname' } placeholder={ 'Lastname' } touched={ touched } errors={ errors } onChange={ handleChange } required={ true } />
                    </div>
                    <TextField name={ 'email' } type={ 'email' } placeholder={ 'Email address' } touched={ touched } errors={ errors } onChange={ handleChange } required={true} />
                    <TextField name={ 'password' } type={ 'password' } placeholder={ 'Password' } touched={ touched } errors={ errors } onChange={ handleChange } required={true} />
                    <TextField name={ 'passwordConfirm' } type={ 'password' } placeholder={ 'Confirm Password' } touched={ touched } errors={ errors } onChange={ handleChange } required={true} />

                    <div className="mb-9">
                        <CheckboxField name={ 'terms'} label={<span>I accept <strong>Terms and conditions</strong></span>} required={true} touched={ touched } errors={ errors } onChange={ handleChange } />
                    </div>

                    <Button variant="primary-gradient" type='submit' disabled={ false } block={ true }>
                        SIGN UP
                    </Button>
                    <p className='mt-6 text-center'>
                        Already have an account ? <span className='text-primary-default'>Sign in</span>
                    </p>
                </Form>
            )}
            </Formik>
        </div>
      );
}

export default SignupForm;