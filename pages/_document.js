import { Html, Head, Main, NextScript } from 'next/document';
import classNames from 'classnames';

export default function Document() {
    return (
        <Html>
            <Head />
            <body
                className={classNames({
                    'debug-screens': process.env.NODE_ENV === 'development',
                })}
            >
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
