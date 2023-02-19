import classNames from 'classnames';
import React from 'react';

export const HeroTitle = <C extends React.ElementType>({
    as,
    children,
    className,
    ...rest
}: {
    as?: C;
    children: React.ReactElement | string;
} & React.ComponentPropsWithoutRef<C>) => {
    const Tag = as ?? 'h1';

    return (
        <Tag
            className={classNames(
                'text-hero3 leading-[0.9] font-exo2 font-semibold',
                className
            )}
            {...rest}>
            {children}
        </Tag>
    );
};
