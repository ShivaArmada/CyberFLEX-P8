import React from 'react';
import './Mentions.css';

function MentionsText() {
    return (
        <div className='mentions' itemScope itemType='http://schema.org/WebPage'>
        <div className='whoami mentions-container'>
            <h1 itemProp='headline'>Mentions Légales</h1>

            <h2 itemProp='headline'>Propriétaire du site</h2>
            <p className="mentions-container_text" itemScope itemType='https://schema.org/Person' itemProp='name'>PLANCKAERT Gabriel<br />
            Ligny-lès-Aires (62960)<br />
            shiva@cyberflex.fr</p>

            <h2 itemProp='headline'>Hébergeur web</h2>
            <p className="mentions-container_text">FastComet Inc.<br />
            350 Townsend St, Suite 780, San Francisco, CA 94107, États-Unis.</p>

            <h1>Conditions Générales d&apos;Utilisation</h1>

            <p className="mentions-container_text" itemProp='text'>Merci de lire avec attention et minutie les conditions générales d&apos;utilisation décrites ci-dessous avant d&apos;utiliser les services CyberFLEX. L&apos;utilisation de ces services implique de l&apos;utilisateur et de l&apos;éditeur des pages CyberFLEX l&apos;approbation et le respect de ces conditions. Celles-ci sont soumises au droit français. Par ailleurs, ces conditions peuvent être mises à jour par les membres dirigeants de CyberFLEX si ces derniers estiment nécessaire l&apos;application de certains changements au sein des règles qui composent les conditions générales d&apos;utilisation.</p>

            <h2>I. Propriété intellectuelle</h2>
            <p className="mentions-container_text" itemProp='text'>L&apos;intégralité des contenus présents sous quelconque forme sur les plateformes CyberFLEX, ou proposés par les services CyberFLEX, tels que les images, les textes, les logos, les programmes informatiques, le style, la dénomination de la plateforme, et celle de l&apos;entreprise sont la propriété exclusive de CyberFLEX. Seules exceptions la police d&apos;écriture proposée par les services Google Fonts, ainsi que des éléments visuels libres de droits (Icônes 3D et visuel d&apos;écran sur la page d&apos;accueil). La réutilisation, sans accord préalable de CyberFLEX, d&apos;un de ces éléments peut vous exposer à des poursuites judiciaires comme le permettent les articles L.111 à L.113 et L.121 à L.123 du code de la propriété intellectuelle de la loi française régissant l&apos;atteinte au droit d&apos;auteur.</p>

            <h2>II. Modification de contenu</h2>
            <p className="mentions-container_text" itemProp='text'>Le code informatique et les différents éléments contenus sur la plateforme CyberFLEX peuvent être sujets à différents changements au fil du temps. CyberFLEX se réserve le droit de pouvoir suspendre le fonctionnement de la plateforme et des services qui y sont inclus pour une durée indéterminée. La plateforme pourra ainsi subir différents changements d&apos;une ampleur plus ou moins importante. Les nouveaux éléments de la plateforme, ainsi que les anciens, seront soumis à la propriété intellectuelle de CyberFLEX.</p>

            <h2>III. Intégrité du code informatique</h2>
            <p className="mentions-container_text" itemProp='text'>Il est strictement interdit à quiconque utilisant les services CyberFLEX de tenter ou de parvenir, par quelconque moyen, à pirater le code informatique régissant le fonctionnement de la plateforme CyberFLEX. Est compris comme tentative de piratage, de manière non-exhaustive, une modification du code informatique par un utilisateur sans autorisation préalable de CyberFLEX, une corruption des données envoyées aux services CyberFLEX par quelconque moyen, une falsification des prix fixés par CyberFLEX, une utilisation de la plateforme CyberFLEX à des fins illégales ou frauduleuses. L&apos;article 323-1 du code pénal de la loi française prévoit jusqu&apos;à deux ans d&apos;emprisonnement ainsi que 60.000 euros d&apos;amende pour toutes actions enfreignant cette règle.</p>

            <h2>IV. Cookies</h2>
            <p className="mentions-container_text" itemProp='text'>Afin d&apos;assurer un fonctionnement optimal des services proposés sur la plateforme CyberFLEX, l&apos;utilisateur consent à lire la politique des cookies de CyberFLEX, disponible en ligne directement sur son site web, dans la partie dédiée.</p>

            <h2>V. Confidentialité de la commande</h2>
            <p className="mentions-container_text" itemProp='text'>CyberFLEX s&apos;engage à ce que toutes les informations communiquées par les utilisateurs soient strictement confidentielles, et qu&apos;elles ne soient communiquées en aucun cas à quelconque personne physique ou morale à l&apos;extérieur de CyberFLEX.</p>

            <h2>VI. Contenu de la commande</h2>
            <p className="mentions-container_text" itemProp='text'>CyberFLEX rejette toute responsabilité quant au contenu qui peut se trouver dans une demande d&apos;utilisateur ou une commande. CyberFLEX peut décider de rejeter une demande et/ou une commande et de procéder à son remboursement si CyberFLEX estime que le contenu de la commande comporte des informations obscènes, outrageantes, diffamantes ou injurieuses. L&apos;utilisateur à l&apos;origine de la commande sera tenu pour seul responsable des informations qu&apos;il saisira lors de sa commande et/ou de sa demande.</p>

            <h2>VII. Mineurs</h2>
            <p className="mentions-container_text" itemProp='text'>La navigation sur les différentes pages proposées par les services CyberFLEX est possible pour tout individu mineur, dont l&apos;âge est inférieur à 18 ans. Il sera cependant vivement déconseillé aux mineurs d&apos;entamer les démarches nécessaires afin de passer une commande de site web sur la plateforme CyberFLEX, et il leur sera interdit de procéder à quelconque paiement afin de finaliser la dite commande sans accord préalable d&apos;un tuteur légal ou d&apos;un parent de l&apos;individu mineur. CyberFLEX se réserve le droit de rejeter une commande et de procéder au remboursement de cette dernière si celle-ci a été réalisée par un mineur sans autorisation d&apos;un tuteur légal ou d&apos;un parent.</p>

            <h2>VIII. Sécurité</h2>
            <p className="mentions-container_text" itemProp='text'>Afin d&apos;assurer un bon fonctionnement des services CyberFLEX, et d&apos;une confidentialité respectée des informations communiquées par les utilisateurs dans le cadre de leur commande de site web, CyberFLEX assure une sécurité renforcée au travers de la vérification automatisée des informations qui lui seront communiquées par n&apos;importe quel biais. Les utilisateurs seront également protégés lors de leur navigation sur les différentes pages disponibles sur la plateforme CyberFLEX, et ne courront aucun risque à cet effet. Toute navigation web se faisant hors de la plateforme CyberFLEX ne relèvera pas de la responsabilité de CyberFLEX. L&apos;utilisateur est tenu de vérifier la conformité et l&apos;authenticité de quelconque lien hypertexte qu&apos;il suivra.</p>

            <h2>IX. Droit applicable</h2>
            <p className="mentions-container_text" itemProp='text'>Les précédentes conditions sont soumises au droit français. Tout litige qui serait susceptible d&apos;entraîner des actions juridiques à l&apos;encontre d&apos;un des parties, utilisateur ou éditeur, se fera donc dans le cadre du droit français et de la loi française., au Palais de Justice de Saint-Omer, au 3 Rue des Tribunaux, 62503 Saint-Omer.</p>

            <p className="mentions-container_text" itemProp='text'>L&apos;objectif de la plateforme CyberFLEX est de permettre aux utilisateurs de commander leur site web à l&apos;aide d&apos;un panel d&apos;options mêlant simplicité et exhaustivité, tout en leur permettant de découvrir ce qu&apos;il est possible de faire grâce à la programmation informatique, et de proposer différents produits et services résultant de programme informatique à la vente.</p>

            <h1>Conditions Générales de Ventes</h1>

            <p className="mentions-container_text" itemProp='text'>CyberFLEX propose sur sa plateforme CyberFLEX différents services, qui peuvent être gratuits ou moyennant une rémunération. Il est possible pour un utilisateur de faire appel à divers services proposés par CyberFLEX. Avant de procéder à tout achat sur la plateforme CyberFLEX, merci de lire avec attention et minutie les conditions générales de ventes listées ci-dessous.</p>

            <h2>I. Utiliser CyberFLEX</h2>
            <p className="mentions-container_text" itemProp='text'>Dans le cadre d&apos;une commande de site web sur la plateforme CyberFLEX, il sera demandé à l&apos;utilisateur une quantité d&apos;informations nécessaires au bon déroulement de la commande, informations qui resteront confidentielles et qui ne seront jamais volontairement divulguées hors du cadre de CyberFLEX. Un utilisateur peut demander la réalisation d&apos;un devis à CyberFLEX pour la prestation souhaitée.</p>

            <h2>II. Mineurs</h2>
            <p className="mentions-container_text" itemProp='text'>Il est déconseillé aux mineurs d&apos;entamer les démarches nécessaires afin de passer une commande de site web sur la plateforme CyberFLEX. Tout mineur souhaitant procéder à quelconque paiement pour des prestations proposées par CyberFLEX devra nécessiter un accord préalable d&apos;un tuteur légal ou d&apos;un parent. CyberFLEX se réserve le droit de rejeter une commande et de procéder au remboursement de cette dernière si celle-ci a été réalisée par un mineur sans autorisation d&apos;un tuteur légal ou d&apos;un parent.</p>

            <h2>III. Commande</h2>
            <p className="mentions-container_text" itemProp='text'>L&apos;utilisateur est seul responsable de la saisie des informations relatives à sa commande. CyberFLEX se décharge de toute responsabilité en cas d&apos;informations mal saisies ou non conformes par l&apos;utilisateur. Les commandes sont confirmées par email à l&apos;adresse renseignée par l&apos;utilisateur.</p>

            <h2>IV. Tarifs</h2>
            <p className="mentions-container_text" itemProp='text'>Les tarifs des services proposés par CyberFLEX sont indiqués sur le site web et peuvent varier en fonction des options choisies. Les prix sont affichés en euros, toutes taxes comprises (TTC). CyberFLEX se réserve le droit de modifier ses prix à tout moment, mais les services seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.</p>

            <h2>V. Paiement</h2>
            <p className="mentions-container_text" itemProp='text'>Le paiement des services se fait en ligne via les moyens proposés sur la plateforme CyberFLEX (carte bancaire, PayPal, etc.). Le paiement est sécurisé par les prestataires de services de paiement sélectionnés par CyberFLEX. Le paiement en plusieurs fois peut être proposé pour certaines commandes, sous conditions définies par CyberFLEX.</p>

            <h2>VI. Facturation</h2>
            <p className="mentions-container_text" itemProp='text'>Une facture détaillée est envoyée à l&apos;utilisateur par email après confirmation du paiement. Cette facture peut être téléchargée depuis le compte utilisateur sur la plateforme CyberFLEX. Elle reprend les détails de la commande et du paiement.</p>

            <h2>VII. Livraison</h2>
            <p className="mentions-container_text" itemProp='text'>Les services réalisés par CyberFLEX seront envoyés sous format numérique dans un délai fixé lors de la commande et convenu avec l&apos;utilisateur. Les délais de livraison peuvent varier en fonction de la complexité du projet. Aucune livraison physique n&apos;est effectuée, sauf mention contraire.</p>

            <h2>VIII. Droit applicable et juridiction compétente</h2>
            <p className="mentions-container_text" itemProp='text'>Les présentes conditions sont régies par la loi française. En cas de litige, et si aucun accord amiable n&apos;est trouvé, le tribunal de Saint-Omer sera seul compétent pour régler le différend, selon les règles de la loi française.</p>

            <p className="mentions-container_text" itemProp='text'>Ces documents peuvent être modifiés selon les nécessités légales ou les évolutions des services proposés par CyberFLEX. Assurez-vous de les consulter régulièrement pour vous tenir informé des dernières mises à jour.</p>
        </div>
    </div>
    );
}

export default MentionsText;