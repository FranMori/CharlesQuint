import Header from "../../Home/Header";
import Footer from "../../Home/Footer";

function CarnavalBinche () {
  return (
    <div>
      <Header />
      <h2 className="bloc titre">Le Carnaval de Binche</h2>
      <div className="bloc">
        <p>La version de l’origine du carnaval qui remporte le plus de succès et qui a sans doute le plus marqué le coeur de chaque Binchois est celle qui fait remonter la naissance des fêtes carnavalesques au seizième siècle, période à laquelle correspondent les fastueuses cérémonies données par Marie de Hongrie en l'honneur de son illustre frère Charles-Quint et de son fils Philippe II d'Espagne.</p>
        <p>Imaginez-vous le 22 août 1549, par une belle journée estivale, l'empereur de l'Empire Romain Germanique accompagné de toute sa cour espagnole entre par la grande porte au sein de la place fortifiée, ceinte de ses remparts. Marie de Hongrie, la Dame de Binche veut éblouir l'héritier, Philippe II. Elle y parviendra sans doute. Les fêtes dureront une semaine. Sept jours de fastes, d'apparats, où bals, simulations d'actes militaires, banquets d'abondance et feux d'artifices furent de la partie. A cette époque des explorateurs, les conquistadores avec François Pizarre à leur tête étaient revenus des terres lointaines d'Amérique et avaient décrit ses habitants, les Incas.</p>
        <p>La légende veut que des courtisans se soient travestis de la sorte pour rappeler les victoires espagnoles en ces contrées. Les costumes bariolés furent quelque peu améliorés pour attirer d'autant plus le regard. Les Binchois auraient été séduits par ces personnages et auraient pris l'habitude, chaque année, de se travestir en "sauvages américains".</p>
        <p>Mais cette légende n'est pas unique et de nombreuses variantes existent. Ainsi, les "sauvages" présentés aux fêtes auraient pu être de véritables Incas amenés directement de leur pays.</p>
        <div className="legende">
          <p>Source : www.carnavaldebinche.be</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CarnavalBinche