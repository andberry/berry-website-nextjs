import classnames from 'classnames';
import styles from './Text.module.css';
import React from 'react';

interface Iprops {
    title?: string;
    children: React.ReactElement;
    contentPosition?: 'left' | 'center' | 'right';
}

export const Text = ({
    title,
    children,
    contentPosition = 'center',
}: Iprops) => {
    return (
        <section
            className={classnames(
                'c-text',
                'relative',
                'font-exo2 font-normal text-xl leading-8 xl:leading-10',
                'mx-auto max-w-screen-2xl px-5',
                'py-6',
                'md:py-12',
                'lg:grid lg:grid-cols-8 lg:gap-8 lg:py-20',
                'xl:py-24'
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
                {title && (
                    <h2 className="leading-none uppercase font-black text-2xl mb-3 u-text-gradientbg inline-block">
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
};
