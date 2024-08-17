import React from 'react';
import './Tarif.css';
import Mascotte from '../../Assets/MiniSardocheRobot.png';
import Placeholder from '../../Assets/Devis-placeholder.png';

const Tarif = () => {
    return (
        <>
            <div className='tarif-container'>
                <div className='tarif-formule-forfait' id='grille-forfait1'>
                    <img src={Mascotte} alt="Mascotte-Tarifs" className='RobotMascotte' />
                </div>
                <div className='tarif-formule-forfait' id='grille-forfait2'>
                    <a href="https://app.voxiplan.com/s/9991590578">
                    <div className='tarif-formule-content'>
                        <h2>Formule Forfait</h2>
                        <p>Un site web complet pour un prix fixe</p>
                        <ul>
                            <li>Site vitrine</li>
                            <li>Blog</li>
                            <li>Portfolio</li>
                            <li>...</li>
                        </ul>
                        <p>200€ / Jours</p>
                    </div>
                    </a>
                </div>
            </div>
            <div className='tarif-formule-sur-mesure'>
                <span className='tarif-placeholder'>
                    <img src={Placeholder} alt="placeholder-Tarif-sur-mesure" />
                </span>
                <h2 className='en-travaux'>Fonction de devis dynamique en travaux</h2>
            </div>
        </>
    );
}

export default Tarif;