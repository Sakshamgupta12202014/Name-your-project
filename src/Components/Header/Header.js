import React from 'react';
import './Header.css';

const Header = ({headTitle, headerImageExpanded, headerTextExpanded}) => {
    return (
        <div className='header'>
            <img className={`header-image ${headerImageExpanded ? 'header-image-expanded' : 'header-image-contracted'}`} src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="oops" />

            <h1 className={`header-text ${headerTextExpanded ? 'header-text-expanded' : 'header-text-contracted'}`}>{headTitle}</h1>
        </div>
    );
};

export default Header;
