import Header from "../../Home/Header";
import Footer from "../../Home/Footer";

function Erreurs() {
  return (
    <div>
      <Header />
      <h2 className="bloc titre">Des erreurs à ne pas commetre</h2>
      <div className="bloc">
        <p className="bold">Devant les spectateurs, le figurant se doit d'avoir une conduite et un tenue irréprochables.</p>
        <h3>D’abord le costume :</h3>
        <p className="bold">Le costume est la première chose que va regarder un spectateur. Il est donc important de le soigner. Voici une liste des choses qui choquent:</p>
        <ul>
          <li>Les lunettes (bien que cela puisse être une obligation …),</li>
          <li>Les montres,</li>
          <li>Les bijoux « modernes »,</li>
          <li>Les chaussures : Surtout, pas de baskets ou de chaussures à lacets de couleur! Évitez également les chaussettes blanches si vous êtes en espadrilles noires, sauf si le costume le demande … </li>
          <li>Si le temps est incertain, ne vous promenez pas avec votre parapluie sous le bras (mais cette remarque ne sera pas d’application : il fera beau !)</li>
        </ul>
        <h3>Ensuite l’attitude :</h3>
        <p className="bold">Le figurant doit éviter de faire des anachronismes et d'énerver le public en voulant se montrer « c'est moi le plus beau ! ». Voici donc une liste de situations  qui nous semblent « choquantes »:</p>
        <ul>
          <li>Les cigarettes</li>
          <li>Les appareils photos (Essayez de trouver quelqu'un non costumé pour jouer au reporter!)</li>
          <li>L'absence de sourire (si le figurant s'ennuie, le spectateur aussi)</li>
          <li>Les téléphones portables</li>
          <li>S'adapter à l'époque reconstituée (Ex: Ne pas s'habiller en viking dans une fête XVIe)</li>
          <li>Le langage (Évitez de dire ouai ou ok. Dites soit! ...) : Ne pas insulter le spectateur (Ex: Ne pas dire « Du large, manant »', mais plutôt « Pousse-toi mon brave ») Préférer les vieilles tournures et surtout, surtout, ne pas jouer à Jacquouille dans les « Visiteurs ». </li>
        </ul>
        <h3>Résumé</h3>
        <p>Il faut toujours penser à enlever ou maquiller tout anachronisme (sur soi ou dans le décor). Pour cela, ce n'est pas la peine de chercher la complication (Souvent, un bout de tissu peut suffire...). Et surtout, pour que les spectateurs y croient, il faut y croire soi-même et être bien dans son rôle et son costume.</p>
        <p>Par exemple, il devient vite naturel d'employer de vieilles tournures lorsque nous sommes en costume!  </p>
        <p>Alors, respectons tous ces quelques idées, et la fête n'en sera que plus réussie ! </p>
        <h3>Nous souhaitons un très bon amusement et que la légende revive grâce à vous !</h3>
      </div>
      <Footer />
    </div>
  )
}

export default Erreurs