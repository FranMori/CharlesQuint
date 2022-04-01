import Header from "../../Home/Header";
import Footer from "../../Home/Footer";

function Trek () {
  return (
    <div>
      <Header />
      <h2 className="titre bloc">Le "Trek van Keizer Karel"</h2>
      <div className="bloc">
        <p className="bold">« Le paiement de Charles Quint ».</p>
        <p> Cette authentique histoire ressemble, à part quelques détails, à notre légende beaumontoise des "Bourgeois stoquarts de Solre-St-Géry".</p>
        <p>Le trek van de Keizer Karel remonte à l'an 1531. Charles Quint, de retour d'une partie de chasse dans les forêts du Brabant flamand, s'embourbe avec son carrosse dans un gué de la rivière La Lane à hauteur du village de Tombeek, à proximité de Bruxelles. </p>
        <p>Les habitants, reconnaissant leur empereur, l'aident à se dégager.</p>
        <p>Charles-Quint n’est pas ingrat et en remerciement il leur remet quelques 70 hectares de terrain (Tombeek-Heyde) sur lesquels les habitants peuvent chasser, pêcher, cultiver la terre, laisser paître leurs animaux, ramasser du bois, sans payer de dîme à un quelconque seigneur. Ces terrains ont permis, durant des siècles, de nourrir les habitants et même lors d'années de disette, de les sauver de la famine !</p>
        <p>Les siècles passent et au 19ème siècle les terrains sont vendus pour y installer un sanatorium</p>
        <p>pour les patients tuberculeux.  L'argent est alors placé dans une banque communale et depuis lors, chaque année, à la fête des rois, le receveur communal vient payer à chaque chef de famille du village les intérêts du placement, lors d'une cérémonie folklorique en hommage au grand empereur !</p>
        <p>Joli non ?</p>
        <p>De là vient que la fanfare de Tombeek  participe, en tant que fanfare d'escorte à Charles Quint, chaque année, à l'Ommegang de Bruxelles.</p>
        <div className="legende">
          <p>https://www.facebook.com/DeDorpsraadTombeek/</p>
        </div>

      </div>
      <Footer />
    </div>
  )
}
export default Trek