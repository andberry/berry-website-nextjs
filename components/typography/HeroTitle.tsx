import classNames from 'classnames';
import React from 'react';

export const HeroTitle = <C extends React.ElementType>({
    as,
    children,
    className,
    ...rest
}: {
    as?: C;
    children: React.ReactNode | string;
} & React.ComponentPropsWithoutRef<C>) => {
    const Tag = as ?? 'h1';

    return (
        <Tag
            className={classNames(
                'text-hero3 leading-[0.85] font-exo2 font-extrabold',
                className
            )}
            {...rest}>
            {children}
        </Tag>
    );
};
