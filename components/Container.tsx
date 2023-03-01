import classNames from 'classnames';
import React from 'react';

export const Container = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={classNames(
                'px-5 md:px-12 mx-auto max-w-screen-2xl',
                className
            )}
        >
            {children}
        </div>
    );
};
