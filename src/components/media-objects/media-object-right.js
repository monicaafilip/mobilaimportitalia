import React from 'react';
import './media-object.css';

import image from '../../assets/temporary/locations/loc (1).jpeg';

const MediaObjectRight = () => 
{
    return (
        <div className="media-object">
            <div className="icon-right">
                <img className="icon" src={image} alt="locatie danila"/>
            </div>
            <div className="blurb-wrapper-left">
                <h3 className="blurb-header">Magazin Dănila</h3>
                <div className="blurb-info">
                    <h5>Adresă</h5>
                    <p>
                        Dănila, str. Europeana
                        jud. Suceava, Romania
                    </p>
                    <h5>Contact</h5>
                    <p>
                        +40746 086 433
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MediaObjectRight;