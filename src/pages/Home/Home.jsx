import { Link } from "react-router-dom";
import logo from "../../assets/fenicia.png";

const Home = () => {
  return (
    <section className="container-xl">
      <div className="d-flex flex-column justify-content-center align-items-center mx-auto logo-box">
        <img className="h-100 w-100" src={logo} />
        <Link
          to={"/form"}
          className="btn btn-primary text-center w-100"
        >
          HACER PEDIDO
        </Link>
      </div>
    </section>
  );
};

export default Home;
