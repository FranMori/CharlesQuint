import Header from "../Home/Header"
import Footer from "../Home/Footer"

import stocquarts1 from "../assets/autres/stocquarts1.jpg"
import stocquarts3 from "../assets/autres/stocquarts3.jpg"

function Stocquarts () {
  return(
    <div>
      <Header />
      <div>
        <h2 className="titre bloc">La légende des Douze Bourgeois Stocquarts de Solre-Saint-Géry</h2>
        <div className="bloc">
          <h3 className="titreStocquarts">A Solre-Saint-Géry, douze villageois ont un jour prêté main forte à leur seigneur. Celui-ci ne fut pas ingrat : il les fit Bourgeois de Beaumont. Légende ou réalité ?</h3>
          <img src={stocquarts1} className="imgRight"></img>
          <p>Une légende beaumontoise (une de plus) raconte qu’un jour le seigneur de Beaumont rentrait en son château. Il pleuvait à verse, les chemins étaient boueux et, à Solre-Saint-Géry, sa voiture s'enfonça dans une profonde ornière. Douze paysans le tirèrent de ce mauvais pas et le ramenèrent à Beaumont à bras sur une litière de branchage. En récompense, le comte les créa bourgeois de Beaumont (1).</p>
          <p>Coïncidence curieuse, une histoire semblable se retrouve dans le Brabant flamand, à Tombeek plus précisément où des habitants, un jour de pluie, auraient aidé des voyageurs à dégager leur voiture enlisée dans la boue. Tout comme chez nous. A cette différence près, mais elle est de taille, qu'au nombre des infortunés passagers se trouvait l'Empereur Charles-Quint en personne. Le souverain voulut remercier sans tarder les serviables villageois et leur octroya de multiples faveurs : c'était bien la moindre des choses. Depuis lors, pour rappeler cet événement, les habitants de Tombeek ont également l'insigne privilège d'ouvrir en fanfare le fameux cortège bruxellois de l'Ommegang.</p>
          <p>Nos douze habitants de Solre-Saint-Géry reçurent quant à eux le titre de bourgeois stocquarts ou stocquault et figurent sous cette appellation dans maints documents anciens de la Ville de Beaumont. Leur nom n'est pas sans évoquer le vieux français estoc, qui signifie le bâton, le pieu, la bûche, le tronc ou encore la souche d'arbre (2). Allusion aux pieux qu'ils utilisèrent pour tenter de dégager la voiture de leur maître ou aux branchages dont ils firent la litière sur laquelle ils le transportèrent ensuite ? C'est en tout cas ce qu'affirme la tradition. Celle-ci est-elle fondée ? Et les deux histoires, celle de Solre et celle de Tombeek, sont-elles apparentées ? Impossible à dire. A moins qu'il faille parler ici aussi de légendes ?</p>
          <img src={stocquarts3} className='imgLeft'></img>
          <p>Quoi qu'il en soit, nous savons avec certitude que le titre de bourgeois stocquarts se transmettait de père en fils. Lorsque l'un des douze mourait sans descendance, un tiers pouvait acheter la place laissée vacante entre les mains du maire et des échevins de Beaumont. De leur vivant, les bourgeois stocquarts étaient exemptés de certaines taxes prélevées sur les marchés, au passage de marchandises sur les routes ou les ponts appartenant au seigneur de Beaumont (3). A leur mort, cependant, leurs héritiers devaient remettre au seigneur de Beaumont le plus bel objet de la succession, ce que l'on appelait alors le meilleur catel (4).</p>
          <p>En tout cas, si la légende dit vrai (et comment, un jour comme aujourd'hui, pourrions-nous croire le contraire ?), les habitants de Solre-Saint-Géry avaient une fois de plus fait la preuve de leur grand courage et d'une loyauté sans faille envers leur seigneur. De telles qualités devaient être mises en exergue.</p>
          <p>C'est pourquoi les douze bourgeois stocquarts avaient eux aussi le droit de participer à notre cortège aux côtés du Comte de Beaumont. Et pour tenir leur rôle, pas question de figurants issus de n'importe où : les costumes des bourgeois stocquarts ne pouvaient être confiés qu'à des habitants du cru, à des Solréziens pure ... souche, bref, à de véritables Turcs.</p>
          <p>Des Turcs ? Oui, mais c'est une autre histoire...(5).</p>
        <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PKOcl59U9Y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
              
        <div className="legende">
          <p>(1) BERNIER, Th., Histoire de la Ville de Beaumont, dans Mémoires et Publications de la Société des Arts et des Lettres du Hainaut, IVème série, t. 4, Mons, 1878, pp. 178 -179, note n°5.</p>
          <p>(2) L'ancien droit d'estocage consistait d'ailleurs à pouvoir ramasser les vieilles souches dans les forêts seigneuriales. Cette origine est sans doute aussi celle de nos fameux astokeus et destokeus du Grand Feu de Barbençon : armés de cales en bois qu'ils placent sous les roues du charriot, les astokeus cherchent à empêcher la progression du véhicule dans les rues du village, tandis que les destokeus s'évertuent à débloquer la situation à l'aide de pieux d'une épaisseur appréciable. Le tout au plus grand péril de leurs orteils, mais dans une ambiance des plus sympathique !</p>
          <p>(3) II s'agit de péages nommés tonlieux, winages et pontenages pour lesquels les bourgeois stocquarts étaient exemptés à l'intérieur d'un assez large périmètre géographique (MATTHIEU, E., Le Besoigné ou Description de la ville et comté de Beaumont, dans Annales du Cercle Archéologique de Mons, t. 16, 1880, p. 228). Manifestement, le seigneur de Beaumont avait voulu favoriser une activité d'ordre commercial, peut-être liée à la vente du fer dont la production est attestée dès les débuts du Moyen Age dans la région.</p>
          <p>(4) La disposition relative au meilleur catel semble indiquer que les bourgeois en question étaient en réalité d'anciens serfs, c'est-à-dire des paysans non libres, affranchis au moins partiellement par leur seigneur à une époque indéterminée.</p>
          <p>(5) Turcs est en effet le surnom (le spo) donné aux habitants de Solre-Saint-Géry. D'où vient-il ? Encore un mystère ! Certains racontent qu'au onzième siècle, lorsqu'il prêchait la première croisade contre les Arabes, Pierre l'Ermite en personne vint dans le village y recruter des volontaires. Devant le peu d'ardeur guerrière manifestée par les villageois, le saint homme finit par s'emporter, les qualifiant de paresseux, de mauvais chrétiens, presque de Musulmans, puisqu'il finit par leur dire : « Vos n'astez qu'une bînde de Turcs ! ». Ces paroles sont-elles authentiques ? En tout cas, le lecteur voudra bien noter que ce fut la première et la dernière fois que l'envoyé du pape s'exprima en wallon...</p>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Stocquarts