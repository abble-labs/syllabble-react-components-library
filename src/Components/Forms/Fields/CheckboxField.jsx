import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field as FormikField } from "formik";
import { useId } from "react";
import FieldErrorMessage from "../FieldErrorMessage";

const DEFAULT_LABEL_STYLE = {
    className: 'text-sm px-1 w-full flex gap-2',
    style: {}
}

const DEFAULT_INPUT_STYLE = {
    className: 'appearance-none peer-checked:bg-light-800 w-5 h-5 border-[1px] rounded-md border-light-400 flex items-center text-white justify-center text-xs',
    style: {}
}

export default function CheckboxField({ name, value, inputStyle = DEFAULT_INPUT_STYLE, label, labelStyle = DEFAULT_LABEL_STYLE, onChange, required = false, touched, errors }) {

    const id = useId();

    return (
        <div className='flex text-light-800 flex-wrap justify-between'>
            { label &&
                <label htmlFor={ `${ id }-${ name }` } className={ labelStyle.className } style={ labelStyle.style }>
                    <FormikField
                        name={ name }
                        value={ value }
                        type='checkbox'
                        id={ `${ id }-${ name }` }
                        onChange={ onChange }
                        className={ 'hidden peer' }
                        style={ inputStyle.style }
                    />
                    <div className={ inputStyle.className }>
                        <FontAwesomeIcon icon="fa-regular fa-check" />
                    </div>
                    { label }
                    { required && <span className="text-danger-default"> *</span> }
                </label>
            }
            { touched && errors && touched[name] && errors[name] && <FieldErrorMessage message={ errors[name] } messageStyle={ { className: 'text-sm flex flex-row-reverse ml-2 gap-2 items-center text-danger-default' } } /> }
        </div>
    );
}