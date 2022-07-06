import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DEFAULT_STYLE = {
    className: 'ml-2 text-sm flex items-center text-danger-default absolute bottom-2 right-2',
    style: {}
}

export default function FieldErrorMessage({ message, messageStyle = DEFAULT_STYLE }) {

    return (
        <span className={ messageStyle.className } style={ messageStyle.style }>
            <span className='mr-1'>{ message }</span>
            <FontAwesomeIcon icon="fa-regular fa-circle-exclamation" />
        </span>
    );
}