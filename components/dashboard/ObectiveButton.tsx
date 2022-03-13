import React, { FunctionComponent } from 'react';

type ObjectiveButtonProps = {
    active: boolean, 
    onClick?: any
}

const ObjectiveButton: FunctionComponent<ObjectiveButtonProps>  = ({ children, active, onClick }) => {
    return <button type="button" onClick={onClick} className={`w-full text-sm text-left ${active ? 'text-mogreen font-semibold': 'font-normal text-moblack'} hover:text-mogreen transition-colors`}>{children}</button>
};

export default ObjectiveButton;