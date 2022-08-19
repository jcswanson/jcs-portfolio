import React from 'react';
import bgShape from '../../../assets/images/Home/shape-bg.png';
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img
                    src={bgShape}
                    alt='Background Shape'
                />
            </div>
        </div>
    );
}
