import Header from "../../Home/Header";
import Footer from "../../Home/Footer";

function Ballon () {
  return (
    <div>
      <Header />
      <h2 className='titre bloc'>Le ballon de Beaumont</h2>
      <div className="bloc">
        <p className="bold">Quelques années avant la première guerre mondiale, on voulut faire monter une montgolfière à Beaumont. Spectacle rare pour l'époque. Hélas, pour des raisons restées obscures, le ballon n'est jamais monté. Cette attraction avait pourtant attiré beaucoup de monde à Beaumont.</p>
        <p>A l'heure dite, les villageois des environs s'étaient donné rendez-vous au point culminant de leur village pour voir passer ce ballon. Longue et vaine attente ! Las, tout le monde rentra chez lui, mais c'est alors que, prenant le relais d'un ballon défaillant, les quolibets jaillirent de toute part et eux montèrent sans cesse.</p>
        <p>Beaumont et les Beaumontois furent, des décades durant, l'objet de l'ironie de leurs voisins.</p>
        <p>« Avez-vu l'ballo, Tchot (1) »(2)</p>
        <p>« Il l'est pété, Tchot »(3).</p>
        <p>Ce malheureux ballon, poussé par un vent violent au moment de son ascension, avait été crevé en heurtant un clou mal placé, c'est pourquoi il était « pété » et n’était jamais monté.</p>
        <p>En 1913, non découragés, les Beaumontois remirent sur le tapis leur ouvrage, à l'occasion de la Joyeuse Entrée de la Princesse Jeanne de Caraman Chimay. Et cette fois, le 22 juin 1913, le ballon baptisé « le Princesse Jeanne » monta.</p>
        <p>Les Beaumontois de 1980, sans rancune ni malice tentèrent une nouvelle fois l’ascension d'une montgolfière  à l'occasion du 150ème anniversaire de la Belgique ! Dommage pour le folklore, ce fut un beau vol ! La tradition ne fut pas respectée et les quolibets ne purent renaître.</p>
        <div className='legende'>
          <p>(1) Surnom (« spô ») donné aux habitants de Beaumont.</p>
          <p>(2) Avez-vous vu le ballon, Tchot !</p>
          <p>(3) Il est crevé, Tchot !</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Ballon