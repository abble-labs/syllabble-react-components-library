import { Form, Formik } from "formik";
import { string } from "prop-types";
import TextField from "./TextField";

export default {
    title: 'Forms/Fields/TextField',
    component: TextField,
    argTypes: {
        name: {
            name: 'name',
            type: { name: 'string', required: true },
            description: 'The name of the input field',
            table: {
                type: { summary: 'string' },
            },
            control: { type: 'text' },
        },
        value: {
            name: 'value',
            type: { name: 'string', required: false },
            description: 'The value of the input field',
            table: {
                type: { summary: 'string', required: false },
            },
            control: { type: 'text' },
        },
        type: {
            name: 'type',
            type: { name: 'string', required: false },
            defaultValue: 'text',
            description: 'The type of the input field',
            table: {
                type: { summary: 'string', required: false },
                defaultValue: 'text',
            },
            options: [ 'text', 'email', 'password', 'tel', 'url' ],
            control: { type: 'select' },
        },
        label: {
            name: 'label',
            type: { name: 'string', required: false },
            description: 'The label above the input field',
            table: {
                type: { summary: 'string | React.Node', required: false },
            },
            control: { type: 'text' },
        },
        inputStyle: {
            name: 'inputStyle',
            type: { name: 'object', required: false },
            description: 'Set the style of the input field',
            table: {
                type: { summary: '{ className: string, style: object }', required: false }
            },
            control: { type: 'object' }
        },
        labelStyle: {
            name: 'labelStyle',
            type: { name: 'object', required: false },
            description: 'Set the style of the label',
            table: {
                type: { summary: '{ className: string, style: object }', required: false }
            },
            control: { type: 'object' }
        },
        onChange: {
            name: 'onChange',
            description: 'Triggered on input changes',
            type: { name: 'function', required: false },
            defaultValue: null,
            table: {
                type: { summary: 'function', required: false },
                defaultValue: { summary: null },
            },
        },
        placeholder: {
            name: 'placeholder',
            type: { name: 'string', required: false },
            description: 'Set the placeholder text inside the input field',
            table: {
                type: { summary: 'string', required: false },
            },
            control: { type: 'text' },
        },
        required: {
            name: 'required',
            type: { name: 'boolean', required: false },
            defaultValue: false,
            description: 'Set the required parameter on the input field',
            table: {
                type: { summary: 'boolean', required: false },
                defaultValue: false,
            },
            control: { type: 'boolean' },
        },
        touched: {
            name: 'touched',
            type: { name: 'object', required: false },
            description: 'Touched object from Formik. Indicates if the field was focused or not (work with Yup)',
            table: {
                type: { summary: '{ <field_name>:<boolean> }', required: false },
            },
            control : { type: 'object' },
        },
        errors: {
            name: 'errors',
            type: { name: 'object', required: false },
            description: 'Errors object from Formik. Indicates if the value of the field is valid (work with Yup)',
            table: {
                type: { summary: '{ <field_name>:<boolean> }', required: false },
            },
            control : { type: 'object' },
        },
    }
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

export const TextInputWithReactNodeLabel = Template.bind({});
TextInputWithReactNodeLabel.args = {
    label: <span className="text-info-default font-bold">First name</span>,
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