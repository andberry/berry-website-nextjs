import classnames from 'classnames';
import styles from './Text.module.css';
import React from 'react';
import { FancyTitle } from '../typography/FancyTitle';

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
                    <div>
                        <FancyTitle className="text-3xl mb-3">
                            {title}
                        </FancyTitle>
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};
