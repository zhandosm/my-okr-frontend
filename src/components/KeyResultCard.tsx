import React, { FunctionComponent } from 'react';

type keyResultCardProps = {
    title: string,
    onClick?: any
}

export const KeyResultCard: FunctionComponent<keyResultCardProps>  = ({ title, onClick }) => {
    return <button type="button" onClick={onClick} className='rounded-lg bg-plainwhite text-moblack font-normal px-7 py-5 my-3 flex justify-between items-center hover:text-mogreen transition-all active:drop-shadow max-w-full w-full'>
        <span>{title}</span>
        <div className="flex items-center">
            <span className="mx-3">view to-dos</span>
            <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.27958 0.323724C0.652353 -0.107908 1.25674 -0.107908 1.62951 0.323724L6.72042 6.21846C7.09319 6.65009 7.09319 7.34991 6.72042 7.78154L1.62951 13.6763C1.25674 14.1079 0.652353 14.1079 0.27958 13.6763C-0.0931933 13.2446 -0.0931933 12.5448 0.27958 12.1132L4.69552 7L0.27958 1.8868C-0.0931933 1.45517 -0.0931933 0.755356 0.27958 0.323724Z" fill="currentColor"/>
            </svg>
        </div>
    </button>
};