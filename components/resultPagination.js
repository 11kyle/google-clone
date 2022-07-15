import { useState } from 'react';
import styles from '../styles/ResultPagination.module.css';

export const ResultPagination = ({ href="#" }) => {
    const [isActive, setIsActive] = useState();

    const handleClick = (e) => {
        const { name } = e.target;
        e.target.className = styles.active;
    }

    return (
        <table className="text-center mx-auto my-10">
            <tbody>
                <tr className="font-semibold text-3xl">
                    <td className="text-[#5589f1]">G</td>
                    <td className="text-[#e14036]">o</td>
                    <td className="text-[#f5ba28]">o</td>
                    <td className="text-[#f5ba28]">o</td>
                    <td className="text-[#f5ba28]">o</td>
                    <td className="text-[#f5ba28]">o</td>
                    <td className="text-[#f5ba28]">o</td>
                    <td className="text-[#f5ba28]">o</td>
                    <td className="text-[#f5ba28]">o</td>
                    <td className="text-[#f5ba28]">o</td>
                    <td className="text-[#f5ba28]">o</td>
                    <td className="text-[#5589f1]">g</td>
                    <td className="text-[#43a758]">l</td>
                    <td className="text-[#e14036]">e</td>
                </tr>
                <tr className="text-sm text-blue-700">
                    <td></td>
                    <td><a id="1" href={href} onClick={handleClick}>1</a></td>
                    <td><a href={href}>2</a></td>
                    <td><a href={href}>3</a></td>
                    <td><a href={href}>4</a></td>
                    <td><a href={href}>5</a></td>
                    <td><a href={href}>6</a></td>
                    <td><a href={href}>7</a></td>
                    <td><a href={href}>8</a></td>
                    <td><a href={href}>9</a></td>
                    <td><a href={href}>10</a></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
};