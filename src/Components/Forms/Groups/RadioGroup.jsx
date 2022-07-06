import FieldErrorMessage from "../FieldErrorMessage";
import RadioField from "../Fields/RadioField";

export default function RadioGroup({ label, direction = 'column', name, touched, errors, onChange, options = [], required = false, className = '' }) {

    return (
        <div className={`mb-4 text-light-800 ${className}`}>
            <p className="text-sm flex mb-2">
                { label }
                { required && <span className="text-danger-default"> *</span> }
                { touched[name] && errors[name] && <FieldErrorMessage message={ errors[name] } messageStyle={{ className: 'ml-2 text-sm flex items-center text-danger-default' }} /> }
            </p>
            <div className={`flex ${ direction === 'row' ? 'flex-row gap-4' : 'flex-col gap-2' }`}>
                {
                    options.map((op, index) => (
                        <RadioField key={ index } name={ name } label={ op.label } value={ op.value } onChange={ onChange } />
                    ))
                }
            </div>
        </div>
    );
}