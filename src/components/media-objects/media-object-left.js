import React from 'react';
import './media-object.css';

import image from '../../assets/temporary/locations/loc (2).jpeg';

const MediaObjectLeft = () => 
{
    return (
        <div className="media-object">
            <div className="icon-left">
                <img className="icon" src= {image} alt="locatie cajvana"></img>
            </div>
            <div className="blurb-wrapper-right">
                <h3 className="blurb-header">Magazin Cajvana
                </h3>
                <div className="blurb-info">
                    <h5>Adresă</h5>
                    <p>
                        Cajvana, nr 2058
                        jud. Suceava, Romania
                    </p>
                    <h5>Contact</h5>
                    <p>
                        +400000000000
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MediaObjectLeft;