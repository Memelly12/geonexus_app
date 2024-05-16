import "leaflet/dist/leaflet.css";
import { useInView } from "react-intersection-observer";
import styles from "../../style/reveal.module.css";
import { Link } from "react-router-dom";

export function Section2() {
  const { ref: img_ref, inView: isInView } = useInView();
  return (
    <div className="outils" ref={img_ref}>
      <div
        className={`card ${styles.reveal1} ${isInView ? styles.visible : ""}`}
        ref={img_ref}
      >
        <img
          src="/public/longue-fleche-pointant-vers-la-droite.png"
          width="15%
          "
          alt=""
        />
        <div className="title">VISUALISATION DE DECHETS COTIERS ET MARINS</div>

        <div>
          Cette rubirque vous propose un interface ou vous avez la possibilité
          de visualiser des informations sur des sites marins et cotiers
          spécifiques tels que la polution, lutilisation de lespace et les
          activité pratiqué dans la zone
        </div>
        <button>
          <Link to="/visData">VOIR PLUS</Link>
        </button>
      </div>

      <div
        className={`card ${styles.reveal2} ${isInView ? styles.visible : ""}`}
        ref={img_ref}
      >
        <img
          src="/public/longue-fleche-pointant-vers-la-droite.png"
          width="15%
          "
          alt=""
        />
        <div className="title">COLLECTE DE DECHETS COTIERS ET MARINS</div>

        <div>
          Cliquer sur le boutton ci-dessous pour avoir accés à un formulaire
          vous permettant de renseigner les informations spécifiques à un site
          précis. ces informations feront lobjet de vérifications avant detre
          mis à la disposition des utilisateurs de la plateforme
        </div>
        <button>
          <a href="https://ee.kobotoolbox.org/x/wbn7XiBR"> DECHETS MENAGERS</a>
        </button>
        <button>
          <a href="https://ee.kobotoolbox.org/x/ag2aOAJk">
            DECHETS ANARCHIQUES
          </a>
        </button>
      </div>
      <div
        className={`card ${styles.reveal3} ${isInView ? styles.visible : ""}`}
        ref={img_ref}
      >
        <img
          src="/public/longue-fleche-pointant-vers-la-droite.png"
          width="15%
          "
          alt=""
        />
        <div className="title">ACTUALITÉS SUR LA GESTION COTIERE ET MARINE</div>
        <div className="detail">
          Tenez vous au courant de toutes les activités et innovations sur le
          domaine marin et cotier. conférences, rencontres et découvertes, vous
          aurez la possibilité de lire les résumé de chaque innovations du
          domaine
        </div>
        <button>
          <Link to="/">VOIR PLUS</Link>
        </button>
      </div>
    </div>
  );
}
