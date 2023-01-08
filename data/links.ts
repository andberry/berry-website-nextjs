import { ReactElement } from 'react';
import emailIcon from '../public/assets/icons/email.svg';
import linkedinIcon from '../public/assets/icons/linkedin.svg';
import {
    GrMail,
    GrLinkedin,
    GrLinkedinOption,
    GrTwitter,
    GrGithub,
} from 'react-icons/gr';
import { MdMail } from 'react-icons/md';
import { SiDevdotto } from 'react-icons/si';
import { BsTwitter } from 'react-icons/bs';
import { RiTwitterFill } from 'react-icons/ri';

interface ILink {
    name: string;
    link: string;
    icon: any;
}

export const links: ILink[] = [
    {
        name: 'Email',
        link: 'mailto:hello@andberry.me',
        icon: MdMail,
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/andrea-berardi/',
        icon: GrLinkedinOption,
    },
    {
        name: 'Twitter',
        link: 'https://www.linkedin.com/in/andrea-berardi/',
        icon: RiTwitterFill,
    },
    {
        name: 'Dev.to',
        link: 'https://dev.to/andberry',
        icon: SiDevdotto,
    },
    {
        name: 'GitHub',
        link: 'https://github.com/andberry',
        icon: GrGithub,
    },
];
