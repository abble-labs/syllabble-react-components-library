import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field as FormikField } from "formik";
import { useId } from "react";

const DEFAULT_LABEL_STYLE = {
    className: 'text-sm px-1 w-full',
    style: {}
}

const DEFAULT_INPUT_STYLE = {
    className: 'border-[1px] border-light-400 rounded-lg text-sm py-2 px-3 w-full',
    style: {}
}

const RADIO_INPUT_STYLE = {
    className: 'border-none text-sm w-fit',
    style: {}
}

export default function Field({ name, value, type = 'text', inputStyle = DEFAULT_INPUT_STYLE, label, labelStyle = DEFAULT_LABEL_STYLE, onChange, placeholder, required = false, touched, errors }) {

    const id = useId();

    const blockLayout = type === 'radio' || type === 'checkbox' ? 'flex-row-reverse' : 'flex-col';

    switch (type) {
        case 'radio':
            inputStyle = RADIO_INPUT_STYLE;
            break;
    
        default:
            inputStyle = DEFAULT_INPUT_STYLE;
            break;
    }

    return (
        <div className={`relative flex ${blockLayout}`}>
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
                placeholder={`${ placeholder }
                ${ required && !label ? '*' : '' }`}
                className={inputStyle.className}
                style={inputStyle.style}
            />
            { touched[name] && errors[name] &&
                <span className='ml-2 flex items-center text-danger-default absolute bottom-2 right-2'>
                    <span className='mr-1'>{errors[name]}</span>
                    <FontAwesomeIcon icon="fa-regular fa-circle-exclamation" />
                </span>
            }
        </div>
    );
}