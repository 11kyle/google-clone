import Link from 'next/link';

export const NavLink = ({ name, href="#", className }) => {
    return (
        <Link href={href}>
            <a className={`${className} + underline-offset-1 hover:underline`}>{name}</a>
        </Link>
    );
};