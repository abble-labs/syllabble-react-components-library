import { Field as FormikField } from "formik";
import { useId } from "react";
import FieldErrorMessage from "../FieldErrorMessage";
import PropTypes from 'prop-types';

const DEFAULT_LABEL_STYLE = {
    className: 'text-sm px-1 w-full',
    style: {}
}

const DEFAULT_INPUT_STYLE = {
    className: 'border-[1px] border-light-400 rounded-lg text-sm py-2 px-3 w-full outline-1 outline-primary-default/50 focus:border-primary-default',
    style: {}
}

export default function TextField({ name, value, type, label, inputStyle, labelStyle, onChange, placeholder, required, touched, errors }) {

    const id = useId();

    inputStyle = { 
        className: `${ DEFAULT_INPUT_STYLE.className } ${inputStyle.className}`,     
        style: { ...DEFAULT_INPUT_STYLE.style, ...inputStyle.style },
    };
    labelStyle = { 
        className: `${ DEFAULT_LABEL_STYLE.className } ${labelStyle.className}`,     
        style: { ...DEFAULT_LABEL_STYLE.style, ...labelStyle.style },
    };

    if (touched && touched[name] && errors && errors[name] ) {
        inputStyle.className = `${ inputStyle.className } outline-1 outline-danger-default/50 border-danger-default`;
    }

    return (
        <div className='relative mb-4 w-full'>
            { label &&
                <label htmlFor={`${ id }-${ name }`} className={labelStyle.className} style={labelStyle.style}>
                    {label}
                    {required && <span className="text-danger-default"> *</span>}
                </label>
            }
            <FormikField
                name={name}
                value={value}
                type={type}
                id={`${ id }-${ name }`}
                onChange={onChange}
                placeholder={`${ placeholder } ${ required && !label ? '*' : '' }`}
                className={inputStyle.className}
                style={inputStyle.style}
            />
            { touched && touched[name] && errors && errors[name] && <FieldErrorMessage message={ errors[name] } /> }
        </div>
    );
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    type: PropTypes.oneOf([
        'text',
        'email',
        'password',
        'tel',
        'url',
    ]),
    label: PropTypes.string,
    inputStyle: PropTypes.shape({
        className: PropTypes.string,
        style: PropTypes.object
    }),
    labelStyle: PropTypes.shape({
        className: PropTypes.string,
        style: PropTypes.object
    }),
    onChange: PropTypes.func,
    placeholder: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    required: PropTypes.bool,
    touched: PropTypes.object,
    errors: PropTypes.object,
};

TextField.defaultProps = {
    value: undefined,
    type: 'text',
    label: '',
    inputStyle: {
        className: '',
        style: {},
    },
    labelStyle: {
        className: '',
        style: {},
    },
    onChange: undefined,
    placeholder: '',
    required: false,
    touched: undefined,
    errors: undefined,
};