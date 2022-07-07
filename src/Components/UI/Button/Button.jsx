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

    const variants = {
        'primary': 'btn-primary',
        'primary-gradient': 'btn-primary-gradient',
        'primary-outline': 'btn-primary-outline',
        'secondary': 'btn-secondary',
        'secondary-gradient': 'btn-secondary-gradient',
        'secondary-outline': 'btn-secondary-outline',
        'danger': 'btn-danger',
        'danger-gradient': 'btn-danger-gradient',
        'danger-outline': 'btn-danger-outline',
        'success': 'btn-success',
        'success-gradient': 'btn-success-gradient',
        'success-outline': 'btn-success-outline',
        'warning': 'btn-warning',
        'warning-gradient': 'btn-warning-gradient',
        'warning-outline': 'btn-warning-outline',
        'info': 'btn-info',
        'info-gradient': 'btn-info-gradient',
        'info-outline': 'btn-info-outline',
        'light': 'btn-light',
        'light-gradient': 'btn-light-gradient',
        'light-outline': 'btn-light-outline',
        'dark': 'btn-dark',
        'dark-gradient': 'btn-dark-gradient',
        'dark-outline': 'btn-dark-outline',
    };

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