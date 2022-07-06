import { Field as FormikField } from "formik";
import { useId } from "react";
import FieldErrorMessage from "../FieldErrorMessage";

const DEFAULT_LABEL_STYLE = {
    className: 'text-sm px-1 w-full',
    style: {}
}

const DEFAULT_INPUT_STYLE = {
    className: 'border-[1px] border-light-400 rounded-lg text-sm py-2 px-3 w-full',
    style: {}
}

export default function SelectField({ name, value, options = [], inputStyle = DEFAULT_INPUT_STYLE, label, labelStyle = DEFAULT_LABEL_STYLE, onChange, placeholder, required = false, touched, errors }) {

    const id = useId();

    return (
        <div className='relative text-light-800'>
            { label &&
                <label htmlFor={ `${ id }-${ name }` } className={ labelStyle.className } style={ labelStyle.style }>
                    { label }
                    { required && <span className="text-danger-default"> *</span> }
                </label>
            }
            <FormikField
                name={ name }
                value={ value }
                as='select'
                id={ `${ id }-${ name }` }
                onChange={ onChange }
                placeholder={` ${ placeholder } ${ required && !label ? '*' : '' }` }
                className={ inputStyle.className }
                style={ inputStyle.style }
            >
                { options.map((op, index) => (
                    <option key={index} value={ op.value } disabled={ op.disabled }>{ op.label }</option>
                )) }
            </FormikField>
            { touched[name] && errors[name] && <FieldErrorMessage message={ errors[name] } /> }
        </div>
    );
}