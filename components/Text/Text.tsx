import classnames from 'classnames';
import styles from './Text.module.css';
import React from 'react';

interface Iprops {
    children: React.ReactElement;
    contentPosition?: 'left' | 'center' | 'right';
}

export const Text = ({ children, contentPosition = 'center' }: Iprops) => {
    return (
        <section
            className={classnames(
                'c-text',
                'mx-auto max-w-screen-2xl',
                'lg:grid lg:grid-cols-8 lg:gap-8 md:py-24 relative',
                'font-mulish font-extralight text-xl leading-10'
            )}>
            <div
                className={classnames(
                    {
                        'lg:col-start-2 lg:col-span-4':
                            contentPosition === 'left',
                    },
                    {
                        'lg:col-start-3 lg:col-span-4 text-center':
                            contentPosition === 'center',
                    },
                    {
                        'lg:col-start-4 lg:col-span-4':
                            contentPosition === 'right',
                    }
                )}>
                {children}
            </div>
        </section>
    );
};
