import "../css/PagesCSS/AboutPage.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const AboutPage = () => {
  const owners = [
    {
      name: "Mateo Lopez Yapur",
      role: "CEO & Fundador",
      image:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1738719051/programadorMateo_lzyjqq.jpg",
      linkedin: "https://www.linkedin.com/in/mateoyapur/",
      github: "https://github.com/Yappur",
    },
    {
      name: "Santiago Llapur",
      role: "CTO & Co-fundador",
      image:
        "https://res.cloudinary.com/doh6efk57/image/upload/v1738719059/programadorSantiago_mddmfe.jpg",
      linkedin: "https://www.linkedin.com/in/santiago-llapur-126139167/",
      github: "https://github.com/santiago590",
    },
  ];

  return (
    <div className="about-page">
      <div className="container container-general app-mejorVista">
        <h1 className="text-center mb-2 estilo-degradado">Sobre Nosotros</h1>

        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 col-md-10 text-center">
            <p className="section-subtitle">
              Nuestro equipo está compuesto por profesionales apasionados y
              altamente funcionales. Nos dedicamos a ofrecer soluciones
              innovadoras y eficientes para nuestros clientes.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mb-4">
          {owners.map((owner, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-3">
              <div className="card owner-card h-100 text-center">
                <div className="card-img-wrapper">
                  <img
                    src={owner.image || "/placeholder.svg"}
                    className="card-img-top"
                    alt={owner.name}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{owner.name}</h5>
                  <p className="card-text">{owner.role}</p>
                  <div className="social-icons">
                    <a
                      href={owner.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon linkedin"
                    >
                      <FaLinkedin size={30} />
                    </a>
                    <a
                      href={owner.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon github"
                    >
                      <FaGithub size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/contact" className="btn btn-primary contact-btn">
            Contáctanos
          </a>
          <p className="mt-3">© 2025 EnergyM. Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
