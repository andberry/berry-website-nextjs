import { Easing } from 'framer-motion';

export const easings: { [key: string]: Easing } = {
    easeOutCubic: [0.33, 1, 0.68, 1],
    easeOutQuart: [0.25, 1, 0.5, 1],
    easeOutQuint: [0.22, 1, 0.36, 1],
    easeOutExpo: [0.16, 1, 0.3, 1],

    easeInOutQuart: [0.76, 0, 0.24, 1],
    easeInOutCubic: [0.65, 0, 0.35, 1],

    easeInQuart: [0.5, 0, 0.75, 0],
};
