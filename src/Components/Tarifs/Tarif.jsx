import React from 'react';
import './Tarif.css';
import Mascotte from '../../Assets/MiniSardocheRobot.webp';
import Placeholder from '../../Assets/Devis-placeholder.webp';

const Tarif = () => {
    return (
        <>
            <div className='tarif-container' itemScope itemType="http://schema.org/OfferCatalog">
                <div className='tarif-formule-forfait' id='grille-forfait1' itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                    <img src={Mascotte} alt="Mascotte-Tarifs" className='RobotMascotte' loading='lazy' itemProp="image" />
                </div>
                <div className='tarif-formule-forfait' id='grille-forfait2' itemProp="itemListElement" itemScope itemType="http://schema.org/Offer">
                    <a href="https://app.voxiplan.com/s/9991590578" itemProp="url">
                        <div className='tarif-formule-content'>
                            <h2 itemProp="name">Formule Forfait</h2>
                            <p itemProp="description">Un site web complet pour un prix fixe</p>
                            <ul>
                                <li itemProp="itemOffered">Site vitrine</li>
                                <li itemProp="itemOffered">Blog</li>
                                <li itemProp="itemOffered">Portfolio</li>
                                <li itemProp="itemOffered">...</li>
                            </ul>
                            <p itemProp="price">200€ / Jours</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='tarif-formule-sur-mesure' itemScope itemType="http://schema.org/Offer">
                <span className='tarif-placeholder'>
                    <img src={Placeholder} alt="placeholder-Tarif-sur-mesure" loading='lazy' itemProp="image" />
                </span>
                <h2 className='en-travaux' itemProp="name">Fonction de devis dynamique en travaux</h2>
            </div>
        </>
    );
}

export default Tarif;