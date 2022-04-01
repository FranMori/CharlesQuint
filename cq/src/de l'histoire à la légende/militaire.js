import Header from "../Home/Header";
import Footer from "../Home/Footer";

import militaire1 from "../assets/autres/militaire1.jpg"
import militaire2 from "../assets/autres/militaire2.jpg"
import militaire3 from "../assets/autres/militaire3.jpg"
import militaire4 from "../assets/autres/militaire4.jpg"
import militaire5 from "../assets/autres/militaire5.jpg"



function Militaire () {
  return(
    <div>
      <Header />
      <div>
        <h2 className="bloc titre">Les Confréries militaires</h2>
        <p className="auteur"> D'après Théodore Bernier</p>
      <div className="bloc">
        <p>Dans le cortège, vous pourrez apercevoir différents groupes armés qui représentent les anciennes confréries présentes à Beaumont lors de la visite de Charles-Quint en 1549.  Ces confréries existent encore aujourd'hui et leur histoire est déjà fort ancienne.</p>
        <h3>Le groupe des hallebardiers</h3>
        <img src={militaire1} className='imgLeft'></img>
        <p>Beaumont possédait une milice communale, dont le châtelain avait le commandement.</p>
        <p>Le Besoigné de 1608 donne quelques renseignements au sujet cette garde bourgeoise : elle se composait ordinairement de deux cents hommes portant des armes, répartis en vingt escadrons de dix hommes, sous la direction de trois capitaines, désignés par le prévôt au nom du seigneur; ces bourgeois étaient tenus de monter la garde en temps de guerre ; chaque garde ou patrouille était composée de dix hommes que l'on changeait alternativement.</p>
        <p>Les anciens comptes de la recette de la maltôte font mention des sommes dépensées pour la garde de la ville. En 1640, Pierre Bartholomé reçoit 12 livres pour avoir fait le guet au clocher, à raison de 8 patards par jour. Le 28 septembre de la même année, il reçoit 48 sols pour avoir fait le guet neuf jours au passage des Lorrains. Les mêmes comptes renseignent une dépense de 48 livres payée à Pierre Haverland pour avoir amené des tonneaux de poudre et plusieurs livres de plomb de Mons à Beaumont, le 1er juin 1640</p>
        <p>A partir de 1680, le guet fut confié à Barthélemi Lecomte, moyennant un gage annuel de 120 livres.</p>
        <p>Un compte de la massarderie de 1793 renseigne une dépense de 6 livres 6 patards payée à Alexis Cantineau et à d'autres particuliers qui ont servi de guides à la troupe.</p>
        <p>Le Besogné indique également que la ville disposait d'un certain nombre d'armes et de munitions : 22 piques et 21 arquebuses à crochets dans l'Hôtel de Ville, 3 tonnes de poudre et 22 livres de mèches dans la Tour Sainte Barbe, 4 arquebuses à crochets et 2 serpentines au Plouy.  En temps de guerre, le Comte de Beaumont renforçait les défenses de la ville en réparant et améliorant les remparts et les portes et en les équipant en hommes et en armes.</p>
        <p>Depuis 1830, une garde civique fut organisée à Beaumont  mais elle n'a pas été maintenue en activité. L'état récapitulatif du registre d'inscription, formé au mois de janvier 1876, en exécution de l'article 661 de l'instruction générale de 1859, porte à 298 le chiffre total des hommes de 21 à 50 ans inscrits pour le service de la garde civique.</p>
        <p>Pour la reconstitution de la légende de Beaumont, la « milice communale » est représentée par le groupe des hallebardiers. Cette compagnie d'environ 30 hommes est armée de hallebardes et commandée par le Capitaine « Le Boiteux ».</p>
        <h3>Les Serments</h3>
        <img src={militaire2} className='imgRight'></img>
        <p>La ville de Beaumont posséda quatre associations armées, connues sous le nom de Serments. Ces associations rendirent de grands services à la ville et au seigneur, aussi obtinrent-elles des faveurs et des privilèges tout spéciaux.</p>
        <p>Ainsi, les archers et les arbalétriers participaient à la garde renforcée lors des fêtes marchandes, de même que lorsqu'un danger menaçait : en 1443, des archers et des arbalétriers furent placés aux portes de Binche et du Ploich «pour doute des ecorcheurs ». Lors d'une exécution, une partie des membres des serments accompagnait le prévôt, l'autre partie assurant la garde à l'une des portes de la ville. Les confréries militaires aidaient aussi parfois le prévôt dans la poursuite et l'arrestation de malfaiteurs. A titre exceptionnel, elles pouvaient également seconder le tourier dans la garde des prisonniers. Elles prirent, en outre, part à la lutte contre les Gantois avec Philippe de Ternant. (1)</p>
        <p>Parmi les privilèges dont ces corporations jouissaient, rappelons d'abord que les confrères de Saint Sébastien et de Saint Georges étaient exempts du droit de bourgeoisie. Cette prérogative fut changée par ordonnance du 5 juillet 1714 : ils obtinrent en échange l'exemption de tout droit de maltôte et d'afforage sur une pièce de vin et sur deux brassins de bière par année; de plus, le roy de la confrérie était affranchi du logement militaire, quand il n'y avait pas plus d'un régiment en garnison dans la place (2) . L'oiseau se tirait tous les ans la veille de la fête communale. Les sociétés touchaient de ce chef sur la caisse de la commune : celle de Saint Sébastien , treize livres, celle de Saint-Laurent, dix-huit livres. La confrérie de Saint-Georges n'existait plus depuis la seconde moitié du XVII e siècle.</p>
        <h3>Le serment des arbalestriers de Saint Georges</h3>
        <img src={militaire3} className="imgLeft"></img>
        <p>La plus ancienne de ces associations était le Serment des arbalétriers de Saint-Georges. Nous ne connaissons pas son origine; mais il existait au commencement du XIVe siècle.</p>
        <p>Les confrères prirent part à divers concours organisés par d'autres serments du comté ; notamment a celui qui se donna à Valenciennes le 24 avril 1372 (3).</p>
        <p>Ce serment disparut à l'époque des guerres de don Juan, dans la seconde moitié du XVIe siècle. « La dite confrairie, dit un ancien registre, at un fort beau collier d'argent doré où sont les armoiries de feu monseigneur le duc de Croy, lequel collier et oiseau a été donné par iceluy à la dite confrairie Saint-George, l'année qu'il fut Roi d'icelle, l'an 1561. Et comme du depuis la dite confrairie Saint-George est allée à néant, mon dit seigneur a donné alors le collier et oyseau à la dite confrairie Saint-Laurent , laquelle l'a toujours tenu en sa possession. Et sy appartient aussy à la dite confrairie une enseigne de taffetas rouge, blanc et jaune, avec un tambour et une casaque violette, pour leur serviteur. »
            (Description de la Ville et du Comté de Beaumont, éditée par E. MATHIEU dans Annales du Cercle Archéologique de Mons, t. 15, Mons, 1880).</p>
        <p>Ce collier, véritable chef-d'œuvre d'orfèvrerie à présent revenu à la Confrérie, porte le millésime 1561 et se compose d'une chaîne formée d'un grand nombre de médaillons sur chacun desquels on lit :</p>
        <p>J'Y PARVIENDRAI CROY.</p>
        <p>RAISON LE VEULT HALLEWIN.</p>
        <p>Il rappelle donc les devises des donateurs, Philippe de Croy et Jeanne de Hallewin.Une médaille d'un travail grossier est appendue à un des chaînons; elle offre à l'avers l'image de saint Laurent et au revers cette inscription :</p>
        <p>CETTE MÉDAILLE A ESTÉ DONNÉE PAR LE SR. G. DUBOIS, R0Y 1713 ET 1714</p>
        <p>Le Serment de Saint Georges fut rétabli en 1820; il possède un collier en argent avec trois médaillons, dont le premier offre la représentation de Saint-Georges, le second les armes de la maison de Caraman, le troisième porte cette inscription :</p>
        <p>DONNÉ PAR M. LE C te MAURICE DE CARAMAN, G d MAITRE PROTECTEUR EN 1820, 1 ère ANNÉE DU RÉTABLISSEMENT DE CETTE CONFRAIRIE ÉRIGÉE EN LA VILLE DE BEAUMONT PAR SES ANCÊTRES.</p>
        <p>En dessous de l'oiseau on lit :</p>
        <p>CET OISEAU FUT DONNÉ PAR M. C. LAURENT, CONNÉTABLE, 1828.</p>
        <h3>Le serment des Archers de Saint Sébastien</h3>
        <img src={militaire4} className='imgRight'></img>
        <p>Le Serment des archers de Saint-Sébastien remonte, croit-on, à 1320 et doit sa création à Jean de Hainaut, sire de Beaumont. Il comptait vingt-et-un confrères et avait son local devant la porte du Plouy ; sa charte d'érection disparut dans l'incendie du 9 juin 1598.</p>
        <p>Par acte du 22 juin 1699, les confrères arrêtèrent de nouveaux statuts.</p>
        <p>Un décret de Maximilien-Emmanuel, électeur de Bavière, daté de Saint-Cloud, le 20 août 1714, confirma les privilèges accordés au serment de Saint-Sébastien par les archiducs Albert et Isabelle, et déclara en conséquence que le roi, ayant abattu l'oiseau la veille de la dédicace, serait exempt des logements des gens de guerre, de guet et de garde, et que sa confrérie jouirait de l'exemption de tous droits attachés à une pièce de vin et à deux brassins de bière chaque année. (4).</p>
        <p>La confrérie de Saint-Sébastien avait son autel dans la chapelle de Saint-Jean l'Évangeliste, où elle faisait dire une messe basse chaque semaine.</p>
        <p>Ce serment possédait jadis une enseigne aux couleurs blanche, rouge et jaune avec la croix de Bourgogne. Cette Confrérie possédait anciennement un magnifique collier d'argent avec deux médaillons. Le premier représentait saint Sébastien martyr, le second
            portait cette inscription :</p>
        <p>DON DE M. MAURICE DE CARAMAN A LA SOCIÉTÉ SAINT-SÉBASTIEN, A BEAUMONT. 1808.</p>
        <p>Cette pièce disparut malheureusement durant la seconde guerre mondiale. Sur base de photographies, les Confrères de Saint Sébastien en ont cependant
            fait réaliser une réplique. La Confrérie possède également de son saint patron une intéressante statue de bois polychrome du 18ème siècle.</p>
        <h3>Le Serment des archers de Sainte Christine</h3>
        <p>Un autre serment d'archers, dit la confrérie de Sainte-Christine, avait disparu pendant les guerres de don Juan. Le besoigné de 1608 mentionne seulement son nom et fait remarquer qu'elle est allée à néant et que son collier a été vendu pour payer une dépense de bouche.</p>
        <h3>La Confrérie du martyr et ami de Dieu Monsieur Saint Laurent</h3>
        <img className="imgLeft" src={militaire5}></img>
        <p>La confrérie des arquebusiers de Saint-Laurent fut érigée le 12 juillet 1514; Guillaume de Croy en approuva ses statuts le jour de la Saint Laurent (11août) en 1601.</p>
        <p>Les Confrères fondateurs s'étaient fixé d'ambitieux objectifs. Selon le texte de 1601, ils agissaient "pour l'honneur et révérence de nostre mère saincte Esglise, et par espécial pour la décoration dudict saint Laurens, et le salut de leurs âmes, et aussy pour l'entretènement du jeu de la culverinne, et mesmement pour le bien et défence, garde, conservation, et
            seureté de nostre dicte ville de Beaumont" (Description de la Ville et du Comté de Beaumont, éditée par E. MATHIEU dans Annales du Cercle Archéologique de Mons, t. 15, Mons, 1880 p.204)</p>
        <p>Les Arquebusiers ou Culvériniers de Saint Laurent maintinrent leur Confrérie
            jusqu'en 1939. C'est à l'occasion des fêtes de Charles Quint de 1985 qu'une poignée d'enthousiastes lui redonnèrent vie.</p>

      </div>
      <div className="legende">
        <p>BERNIER, Th., Histoire de la Ville de Beaumont, dans Mémoires et Publications de la Société des Sciences, des Arts et des Lettres du Hainaut, 4ème série, t. 4, Mons, 1879, p. 117-367.</p>
        <p>(1) A.MUSIN « Justice et criminalité dans la prévôté de Beaumont (1398-1474) – Mémoire présenté en vue de l'obtention du grade de Licencié en Histoire,
            Université catholique de Louvain, 2002-2003</p>
        <p>(2) Registre des bourgeois de Beaumont, Archives communales de cette ville</p>
        <p>(3) Essai sur l'organisation militaire de la ville de Valenciennes 1067-1780, dans les Mémoires historiques sur l'arrondissement de Valenciennes, publication de la Société d'Agriculture, etc. t. IV, p. 51 .</p>
        <p>(4) Gachard, Recueil des ordonnances des Pays-Bas autrichiens, 3eme série, t. il, p. 539</p>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Militaire