import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';


const MenuItem = ({title, size, imageUrl, history, match, linkUrl}) => (
        <div
            className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div 
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="sub-title">SHOP NOW</span>
            </div>npm 
        </div>
    )

export default withRouter(MenuItem);