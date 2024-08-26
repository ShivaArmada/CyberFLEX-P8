import React from 'react';
import './Tarif.css';
import Mascotte from '../../Assets/MiniSardocheRobot.png';
import Placeholder from '../../Assets/Devis-placeholder.png';

const Tarif = () => {
    return (
        <>
            <div className='tarif-container' itemscope itemtype="http://schema.org/OfferCatalog">
                <div className='tarif-formule-forfait' id='grille-forfait1' itemprop="itemListElement" itemscope itemtype="http://schema.org/Offer">
                    <img src={Mascotte} alt="Mascotte-Tarifs" className='RobotMascotte' loading='lazy' itemprop="image" />
                </div>
                <div className='tarif-formule-forfait' id='grille-forfait2' itemprop="itemListElement" itemscope itemtype="http://schema.org/Offer">
                    <a href="https://app.voxiplan.com/s/9991590578" itemprop="url">
                        <div className='tarif-formule-content'>
                            <h2 itemprop="name">Formule Forfait</h2>
                            <p itemprop="description">Un site web complet pour un prix fixe</p>
                            <ul>
                                <li itemprop="itemOffered">Site vitrine</li>
                                <li itemprop="itemOffered">Blog</li>
                                <li itemprop="itemOffered">Portfolio</li>
                                <li itemprop="itemOffered">...</li>
                            </ul>
                            <p itemprop="price">200€ / Jours</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='tarif-formule-sur-mesure' itemscope itemtype="http://schema.org/Offer">
                <span className='tarif-placeholder'>
                    <img src={Placeholder} alt="placeholder-Tarif-sur-mesure" loading='lazy' itemprop="image" />
                </span>
                <h2 className='en-travaux' itemprop="name">Fonction de devis dynamique en travaux</h2>
            </div>
        </>
    );
}

export default Tarif;