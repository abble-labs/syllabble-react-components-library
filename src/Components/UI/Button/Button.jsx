import './Button.css';
import PropTypes from 'prop-types';

/**
 * Button component
 * @param {{
 *  variant: string,
 *  disabled: boolean,
 *  href: string,
 *  type: string,
 *  onClick: function,
 *  children: any
 * }} params
 * @returns Button
 */
export default function Button({ variant, disabled, block, href, type, onClick, children, className }) {

    if (href) {
        return(
            <div>

            </div>
        );
    }

    return(
        <button type={type} onClick={onClick} className={`btn btn-${ variant } text-sm ${ block ? 'w-full justify-center' : 'w-fit' }${ className ? className : '' }`} disabled={disabled}>
            {children}
        </button>
    );
}

Button.propTypes = {
    variant: PropTypes.oneOf([
        'primary',
        'primary-gradient',
        'primary-outline',
        'secondary',
        'secondary-gradient',
        'secondary-outline',
        'danger',
        'danger-gradient',
        'danger-outline',
        'success',
        'success-gradient',
        'success-outline',
        'warning',
        'warning-gradient',
        'warning-outline',
        'info',
        'info-gradient',
        'info-outline',
        'dark',
        'dark-gradient',
        'dark-outline',
        'light',
        'light-gradient',
        'light-outline',
    ]),
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    href: PropTypes.string,
    type: PropTypes.oneOf([
        'button',
        'submit'
    ]),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    variant: 'primary',
    disabled: false,
    block: false,
    href: null,
    type: 'button',
    onClick: null,
};