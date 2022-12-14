import Buscador from "../components/Buscador/Buscador";
import PanelNombres from "../components/PanelNombres/PanelNombres";
import Header from "../components/Header/Header";
import Pokeball from './pokeball.png'
import "./Layout.css";

const CANTIDAD_POKEMONES_ACTIVOS = 905

function Layout() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="panel-doble">
      <img src={Pokeball} alt="Pokeball" className="pokeball" />
        <div className="panel-izquierdo">
          <Buscador limit={CANTIDAD_POKEMONES_ACTIVOS} />
        </div>
        <div className="panel-derecho">
          <PanelNombres limit={CANTIDAD_POKEMONES_ACTIVOS} />
        </div>
      </div>
    </>
  );
}

export default Layout;
