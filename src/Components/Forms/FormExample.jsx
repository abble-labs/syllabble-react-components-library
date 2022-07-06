import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Formik } from "formik";
import Button from './Button/Button'
import Field from "./Form/Field";
import * as Yup from 'yup';
import RadioField from "./Form/Fields/RadioField";
import TextField from "./Form/Fields/TextField";
import TextareaField from "./Form/Fields/TextareaField";
import CheckboxField from "./Form/Fields/CheckboxField";
import SelectField from "./Form/Fields/SelectField";
import CheckboxGroup from "./Form/Groups/CheckboxGroup";
import RadioGroup from "./Form/Groups/RadioGroup";
import SignupForm from "./Signup/SignupForm";

function FormExample() {

  const FormSchema = Yup.object().shape({
    firstname: Yup.string().min(3, 'Minimum 3').required('Requis !!'),
    lastname: Yup.string().min(3, 'Minimum 3').required('Requis !!'),
    civility: Yup.string().required('Requis !!'),
    description: Yup.string().required('Requis !!'),
    choices: Yup.array(Yup.string()).required('Requis !!'),
    selected: Yup.string().required('Requis !!'),
    terms: Yup.bool().oneOf([true], 'Field must be checked'),
  });

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline text-primary-default mb-10">
        Hello world!
      </h1>
      <div className="mb-10">
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
          validationSchema={FormSchema}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form>
              <div className="mb-3">
                <RadioGroup name={ 'civility' } label={ 'Civitity' } touched={ touched } errors={ errors } onChange={ handleChange } required={ true } direction='row' options={ [
                  {
                    label: 'Madame',
                    value: 'Madame',
                  },
                  {
                    label: 'Monsieur',
                    value: 'Monsieur',
                  },
                ] } />
              </div>
              <div className="flex gap-2 items-center">
                <TextField name={'firstname'} placeholder={'Firstname'} label={'Firstname'} touched={touched} errors={errors} onChange={handleChange} required={true} />
                <TextField name={'lastname'} placeholder={'Lastname'} label={'Lastname'} touched={touched} errors={errors} onChange={handleChange} required={true} />
              </div>
              <TextareaField name={'description'} placeholder={'Write here...'} label={'Description'} type={'textarea'} touched={touched} errors={errors} onChange={handleChange} required={true} />
              <CheckboxGroup name={ 'choices' } label={ 'Checkboxes' } touched={ touched } errors={ errors } onChange={ handleChange } options={ [
                {
                  label: 'Choice 1',
                  value: 'Choice 1',
                },
                {
                  label: 'Choice 2',
                  value: 'Choice 2',
                },
                {
                  label: 'Choice 3',
                  value: 'Choice 3'
                },
                {
                  label: 'Choice 4',
                  value: 'Choice 4'
                }
              ] } />
              <div>
                <SelectField name={'selected'} label='Select' touched={touched} errors={errors} value={values.selected} onChange={handleChange} required={true} options={[
                  {
                    label: 'Select an option...',
                    value: '',
                    disabled: true,
                  },
                  {
                    label: 'Choice 1',
                    value: 'choice 1',
                  },
                  {
                    label: 'Choice 2',
                    value: 'choice 3',
                  },
                ]} />
              </div>
              <div className="my-5">
                <CheckboxField name={'terms'} label={'J\'accepte les CGU'} touched={touched} errors={errors} onChange={handleChange}/>
              </div>

              <Button variant="success-outline" type='submit' disabled={false}>
                <FontAwesomeIcon icon="fa-solid fa-floppy-disk" />
                Enregistrer
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="my-20">
        <SignupForm />
      </div>
    </div>
  );
}

export default FormExample;
