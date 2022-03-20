import Header from "../Home/Header"
import Footer from "../Home/Footer"

import lettremarie1 from "../assets/autres/lettremarie1.jpg"

function LettreMarie () {
  return (
    <div>
      <Header />
      <div>
        <h2 className="titre bloc">Lettre à Marie de Hongrie</h2>
        <div className="bloc">
            <p>Nous avons retrouvé, dans des archives longtemps oubliées, une lettre que l'empereur Charles-Quint a écrite à sa soeur Marie de Hongrie, peu après son arrivée à Beaumont le 21 août 1549. (1)</p>
        </div>
        <div className="bloc">
            <h3 className="titreMarie">Beaumont, ce 21 du mois d'aoust 1549</h3>
              <p>Une journée de plus d’un long périple, de routes poudreuses, de soleil écrasant. Une journée de plus où ma vieille blessure m’a tiraillé la jambe, maudit souvenir de cette ancienne chute. Mais j’ai gardé le cheval toute la matinée, depuis notre départ de Mariembourg de bonne heure, jusqu’au moment du dîner à Rance. </p>
              <p>Nous y avons, ma foi, délicieusement mangé. On prépare ici le poisson de rivière d’une façon qui n’est pas sans rappeler notre escabecha espagnole. Il s’agissait d’anguilles coupées en brefs tronçons et marinées dans une sauce pimentée de  vin aigre et d’oignons, où l’on ajoute quelques herbes. La préparation est assez relevée et pleine de goût. Ceux d’ici la nomment plaisamment escaviches ou escavêches. Philippe, mon bon fils, qui siégeait à ma droite, les a bien appréciées.  </p>
              <p>Il fut moins enthousiaste au moment des charcuteries. Des jambons et des pâtés comme s’il en pleuvait. Le tout s’arrosait d’une bonne bière noire, encore assez forte, que boivent les gens d’ici. J’en ai repris à trois fois, tant les poussières du chemin m’avaient desséché le gosier. Philippe n’y a pas touché. Vous savez bien, ma sœur, combien votre neveu est de goût difficile. Il se satisfait d’un peu de vin, bien souvent coupé d’eau. Avec cet air sentencieux qui me déplaît tant, il affirme bien haut qu’un bon vin stimule le corps et l’esprit, à condition (s’empresse-t-il d’ajouter) de le boire lentement et en petite quantité. Je prétends pour ma part que la bière donne aux visages un teint joyeux et aide à la digestion des mets les plus copieux. Et puis, comme je le dis toujours, le sang de la vigne me convient moins bien que la fille de l’orge. Ce qui chagrine un peu Monsieur Vésale, mon médecin. </p>
              <p>Après ces agapes, nous avons repris la route sans tarder. Malgré le vacarme de l’escorte, je crois avoir somnolé quelque peu. Et vers six heures de relevée, nous avons vu Beaumont, d’une hauteur nommée Falin.</p>
              <p>La ville avait fière allure. On voyait au loin les clochers de l’église paroissiale et de la chapelle du cimetière ainsi que les murailles qui enserrent le bâti sur une longueur d’onze cents toises. Nous avons laissé à senestre la belle Tour Sainte Barbe (qui sert de magasin à poudre) et l’antique donjon de la comtesse Richilde. C’est une tour énorme et carrée,  qui touche au palais du Comte Charles. Elle se nomme la Salamandre, animal que l’on rencontre encore volontiers dans les taillis des environs. Les gens d’ici s’en méfient pourtant, considérant la bête comme animal du diable (c’est pourquoi sans doute le roi des Français l’a choisie comme emblème).  </p>
              <p>Lorsqu’enfin nous avons franchi la Porte de France sur le dessus de la Ville, toute la population de Beaumont nous attendait. Me croiras-tu si je te dis, ma bien chère sœur, que chacune des trois cents façades du clos était décorée de bannières et de guirlandes de fleurs, tant que nous ne pouvions plus voir que des maisons blanches et rouges ? Partout nous étions acclamés, partout nous étions applaudis. Ce n’était que des « Vive l’Empereur » et des « Vive notre Souverain ». Dans les rues, on entendait des airs de musique et l’on voyait les jeunes gens danser. Comme ces Beaumontois semblent joyeux lurons ! </p>
              <p>Sur le Grand Marché, notre fidèle Comte Charles de Croy nous a accueillis de manière fort digne. Son château de Beaumont est un bien bel édifice, qui n’est pas loin de valoir, ma sœur, votre résidence de Binche. Le Comte a coutume de dire que son palais est si beau que Dieu lui-même le prendrait pour  logis si d’aventure il revenait sur terre. Vous connaissez sa gouaille, Marie, et son sens des formules. </p>
              <p>Il nous a fait servir au souper des volailles mijotées dans la crème de lait. Un délice. Chaque morceau embaumait l’estragon et s’accompagnait de curieux biscuits ronds à la pâte d’amandes. Au dessert, le Comte nous a donné à goûter un gâteau bien original, alternant le pain d’épices, la crème et le massepain. Sur le dessus, le Comte avait fait sculpter en médaillon mon propre portrait… en chocolat ! Vous savez, cet extrait de cacao venu du Nouveau Monde. Mon Dieu que cela était bon. Voilà la plus douce manière de clore une journée éprouvante. </p>
              <p>Sur l’avis de mon médecin, je termine maintenant mon bouillon de légumes.</p>
              <p>Il est déjà bien tard. Je n’entends plus les pas du couloir : je gage que mes gardes s’endorment devant ma porte. Leur sommeil est profond mais leur oreille est fine. J’ai pleine confiance en eux.</p>
              <p>Quelques marchands circulent encore en ville, je les entends qui s’affairent à la foire de demain.</p>
              <p>Ce dimanche sera une belle journée. Si ma jambe le permet, j’irai chevaucher un peu dans les campagnes d’ici. Vous ai-je dit, ma soeur, qu’elles sont assez vallonnées et gentiment bucoliques ? J’irai y voir dès l’aube.</p>
              <p>Nous reprendrons la route après-demain pour Binche où je pourrai enfin vous serrer dans mes bras.</p>
              <p className="politesse"> Bien à vous, ma sœur,</p>
              <p className="signature">Votre Charles</p>
            <div className="imgLettremarie">
              <img src={lettremarie1}></img>
            </div>   
        </div>
        <div className="legende">
        (1) « Cette lettre est un faux ! », dénonce un historien local. Nous sommes entièrement de son avis.
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LettreMarie