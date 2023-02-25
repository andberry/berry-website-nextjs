import { motion, Variant } from 'framer-motion';
import { easings } from '../utils/easings';
interface ISkillsGroup {
    title: string;
    skills: string[];
    id: number;
}

const motionVariantGroup: { [key: string]: Variant } = {
    hide: {},
    show: {},
};

const motionVariantTitle: { [key: string]: Variant } = {
    hide: { y: 10, opacity: 0 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            duration: 1.6,
            ease: easings.easeOutQuart,
            delay: i * 0.05,
        },
    }),
};

const motionVariantSkill: { [key: string]: Variant } = {
    hide: { x: -20, opacity: 0 },
    show: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            duration: 0.3,
            ease: easings.easeOutQuart,
            delay: i * 0.05 + 0.9,
        },
    }),
};

export const SkillsGroup = ({ title, skills, id }: ISkillsGroup) => {
    return (
        <motion.div className="mb-12" variants={motionVariantGroup}>
            <motion.h3
                variants={motionVariantTitle}
                custom={id}
                className="text-3xl font-extrabold mb-3 font-exo2"
            >
                {title}
            </motion.h3>
            <ul>
                {skills.map((item, index) => (
                    <motion.li
                        variants={motionVariantSkill}
                        custom={id + index}
                        className="py-2 font-extralight"
                        key={index}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};
