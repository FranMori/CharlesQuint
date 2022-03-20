import Header from "../Home/Header"
import Footer from "../Home/Footer"

import legenderealite1 from "../assets/autres/legenderealite1.jpg"


function LegendeRealite () {
  return (
    <div>
    <Header />
      <div>
        <h2 className="titre bloc">Charles-quint à Beaumont, légende ou réalité ?</h2>
        <div className="bloc legenderealite">
          <img src={legenderealite1} className='imgRight'></img>
          <p>En cette année 1549, l’Empereur Charles Quint a pris une ferme décision, qu’il mûrit de longue date : las des affaires du gouvernement et miné par des problèmes de santé, il désire abdiquer.
              Son immense Empire, sur lequel, dit-on, le soleil ne se couche jamais, cet Empire sera partagé en deux. Son frère Ferdinand recevra l’Autriche et l’Allemagne ainsi que le titre d’Empereur. Son fils Philippe II dirigera pour sa part les possessions d’Italie, l’Espagne et les colonies prometteuses du Nouveau Monde. Il ajoutera à son royaume les XVII Provinces des Pays-Bas que son père aime tant</p> 
          <p>L’Empereur a pris soin de préparer sa succession. En imposant en 1548 la Transaction d’Augsbourg et l’année suivante la Pragmatique Sanction, Charles a fait des XVII Provinces, jusque là indépendantes les unes des autres, un seul et même Etat, indivisible et transmissible par succession héréditaire. Selon ses vœux, par conséquent, les provinces qui forment aujourd’hui le Bénélux devraient rester durablement unies, malgré leurs différences de langues, de religions, de mentalités. Un bloc dressé comme une barrière contre la France, l’éternelle rivale. </p>
          <p>C’est à son fils Philippe qu’il compte en laisser la direction. Celui-ci a alors 22 ans. A la différence de son père né à Gand et élevé chez nous, Philippe a reçu une éducation espagnole et n’a pour ainsi dire jamais quitté l’Espagne. Il connaît mal les Pays-Bas, il en ignore les coutumes et le caractère. Il ne parle ni le français ni le flamand. Son tempérament plutôt distant, froid, contraste avec la jovialité légendaire de Charles Quint. C’est un jeune homme un peu guindé, peut-être timide, en tout cas peu démonstratif.</p>
          <p>L’Infant Philippe doit donc être présenté à ceux qui seront bientôt ses sujets et qui ne le connaissent pas encore.</p>
          <p>Il quitte l’Espagne fin 1548. Par l’Italie et l’Allemagne, il gagne les Pays-Bas. Il entre à Namur en grandes pompes le 29 mars 1549. Le 1er avril, il est accueilli à Bruxelles par son père Charles Quint. En juillet, tous deux visitent les villes des Pays d’Embas : Louvain, Gand, Bruges, Ypres, Lille, Tournai, Arras et Valenciennes. Viennent ensuite Landrecies, Chimay, Mariembourg et… Beaumont où Charles et son fils sont reçus par le Comte Charles de Croy, le 21 août 1549… Ils passeront la nuit au château comtal, disparu aujourd’hui presque totalement. C’est à ce moment que l’Histoire devient une Légende…</p>

        </div>
      </div>
    <Footer />
    </div>
  )
}

export default LegendeRealite