import React from 'react';
import './button.styles.scss';
/**
 * @description simple button component.  
 * @param {boolean} actived
 * @param {boolean} outline 
 * @param {boolean} loading
 * @param {boolean} border
 * @param {string} size "xs|sm|md|lg|xl|xxl"
 * @param {string} variant "primary|secondary|danger|warning|sucess|default"
 * @param {string} className
 * @param {boolean} rounded is button rounded ? 
 */
const Button = ({
    actived = false, 
    variant="default",
    loading, 
    border = true, 
    outline, 
    size, 
    className,
    disabled, 
    onClick, 
    rounded = false,
    ...rest}) =>
{
    return (
    <button {...rest} onClick={onClick} disabled={disabled || loading }
        className={`btn ${actived ? 'actived': ''} ${loading ? 'btn-loading': ''} ${!border ? 'btn-no-border': ''}
                    btn-${variant} ${variant ? '' : 'btn-default' } 
                    ${outline ? 'btn-outline': ''} 
                    ${size ? `btn-${size}` : ''}
                    ${className ? className : ''}
                    ${rounded ? 'btn-rounded' : ''}`}>
        {loading ? '' : rest.children}
    </button>)
}

export default Button;