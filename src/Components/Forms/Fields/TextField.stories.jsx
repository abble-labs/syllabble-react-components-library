import { Form, Formik } from "formik";
import TextField from "./TextField";

export default {
    title: 'Forms/Fields/TextField',
    component: TextField
}

export const Default = (args) => (
   <Formik
    initialValues={{
        firstname: 'John'
    }}
   >
     {({ values, errors, touched, handleChange }) => (
        <Form>
            <TextField name={ 'firstname' } value={ values.firstname } onChange={ handleChange } errors={ errors } touched={ touched } { ...args } />
        </Form>
     )}
   </Formik>
);

const Template = (args) => (
    <Formik>
     {({ values, errors, touched, handleChange }) => (
        <Form>
            <TextField value={ values && values[args.name] } onChange={ handleChange } {...args} />
        </Form>
     )}
   </Formik>
);

export const TextInput = Template.bind({});
TextInput.args = {
    name: 'firstname',
    label: 'First name',
    placeholder: 'Type your name here.',
    required: true,
};

export const EmailInput = Template.bind({});
EmailInput.args = {
    name: 'email',
    label: 'Email address',
    type: 'email',
    placeholder: 'example@example.com',
    required: true,
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'At least 8 characters',
    required: true,
};

export const TextInputWithoutLabel = Template.bind({});
TextInputWithoutLabel.args = {
    name: 'firstname',
    placeholder: 'First name',
    required: true,
};

export const TextInputWithError = Template.bind({});
TextInputWithError.args = {
    name: 'firstname',
    placeholder: 'First name',
    required: true,
    touched: {
        'firstname': true,
    },
    errors: {
        'firstname': 'Required!',
    },
};