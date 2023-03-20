import classnames from 'classnames';
import styles from './Text.module.css';
import React from 'react';
import { FancyTitle } from '../typography/FancyTitle';
import { DropCap } from '../typography/DropCap';
import { Container } from '../Container';

interface Iprops {
    title?: string;
    children: React.ReactElement;
    contentPosition?: 'left' | 'center' | 'right';
    extraClasses?: string;
    dropcap?: string;
}

export const Text = ({
    title,
    children,
    contentPosition = 'center',
    extraClasses,
    dropcap = undefined,
}: Iprops) => {
    return (
        <section
            className={classnames(
                'c-text',
                'relative',
                'font-light text-xl leading-8 xl:leading-10',
                'py-6',
                'md:py-12',
                'lg:py-20',
                '2xl:py-24',
                extraClasses
            )}
        >
            <Container>
                <div className="lg:grid lg:grid-cols-8 lg:gap-8">
                    <div
                        className={classnames(
                            {
                                'lg:col-start-2 lg:col-span-5 2xl:col-span-4 2xl:col-start-2':
                                    contentPosition === 'left',
                            },
                            {
                                'lg:col-start-3 lg:col-span-4 text-center':
                                    contentPosition === 'center',
                            },
                            {
                                'lg:col-start-4 lg:col-span-5 2xl:col-span-4 2xl:col-start-4':
                                    contentPosition === 'right',
                            }
                        )}
                    >
                        {title && (
                            <div className="relative">
                                {dropcap && (
                                    <div className="hidden lg:block lg:absolute lg:-translate-x-[calc(100%+30px)] text-white">
                                        <DropCap
                                            letter={dropcap}
                                            size="default"
                                        />
                                    </div>
                                )}
                                <FancyTitle className="text-3xl mb-3">
                                    {title}
                                </FancyTitle>
                            </div>
                        )}
                        <div className="dark:text-white2 text-black">
                            {children}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
