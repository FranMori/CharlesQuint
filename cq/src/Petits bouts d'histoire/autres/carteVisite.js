import Header from "../../Home/Header";
import Footer from "../../Home/Footer";

function CarteVisite () {
  return (
    <div>
      <Header />
      <h2 className="titre bloc">La carte de visite de Charles-Quint</h2>
      <div className="bloc">
        <p>Charles Quint possédait des terres dans toutes les parties du monde, il pouvait se dire avec orgueil :  "Le soleil ne se couche jamais sur mes états".</p>
        <p>Un jour, il lui prit la fantaisie de vérifier cette affirmation et décida de faire le tour du monde. Arrivé au port de Bruges, sur le quai d'embarquement, il montra son blason pour se faire reconnaître, comme tous les nobles faisaient depuis des siècles. Malheureusement, la personne chargée d'enregistrer les passagers n'était pas un héraut(*) professionnel (en fait, c'était un simple employé du port), il ne comprenait absolument rien à tous ces dessins bizarres et c'est bien normal : à l'origine de</p>
        <p> l'héraldique, personne ne savait lire mais tout le monde savait que "trois léopards = Angleterre", "une fleur de lys = Royaume de France" ou "un château doré = Castille". Mais à l'époque de Charles Quint, presque tout le monde savait lire et presque plus personne ne se souciait de savoir que le blason de l'Empire germanique est un écartelé reprenant les blasons de Castille et de Léon dans le premier quart, d'Aragon et de Sicile dans le second, d'Autriche et de Bourgogne dans le troisième...</p>
        <p>Le temps d'expliquer tout ça à ce malheureux employé et le bateau serait parti depuis longtemps...  Alors Charles Quint prit un morceau de papier et écrivit "Charles-Quint".</p>
        <p>Il venait d'inventer la carte de visite... Elle allait sonner le glas de l'héraldique.</p>
        <div className="legende">
          <p>(*) Héraut : Officier public chargé de déclarer la guerre, d'annoncer les tournoi et d'y déclarer le vainqueur, de porter et d'annoncer les ordres de son maître. Il devait, de par sa fonction, avoir une profonde connaissance des règles héraldiques et des blasons et armes de ses contemporains.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CarteVisite