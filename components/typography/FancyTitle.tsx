import classNames from 'classnames';
import React from 'react';

export const FancyTitle = <C extends React.ElementType>({
    as,
    children,
    className,
    ...rest
}: {
    as?: C;
    children: React.ReactElement | string;
} & React.ComponentPropsWithoutRef<C>) => {
    const Tag = as ?? 'h2';

    return (
        <Tag
            className={classNames(
                'leading-none uppercase font-extrabold',
                'dark:u-text-gradientbg u-text-gradientbg--light',
                className
            )}
            {...rest}
        >
            {children}
        </Tag>
    );
};
