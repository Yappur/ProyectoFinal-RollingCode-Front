import "../../css/ComponentsCSS/PromocionGym.css";

const PromocionGym = () => {
  return (
    <div class="container my-4">
      <div class="row gym-promo-container">
        <div class="col-md-5 image-section">
          <div class="image-wrapper">
            <img
              src="https://res.cloudinary.com/doh6efk57/image/upload/v1738515132/Energym_lq9rsl.png"
              alt="Gimnasio del futuro"
              class="promo-image"
            />
          </div>
        </div>
        <div class="col-md-7 content-section">
          <h2 class="mb-4">💥 ¡Descubre el gimnasio del FUTURO! 💥</h2>

          <div class="promo-content">
            <p>
              Bienvenido a <span className="h1-titulo">ENERGYM</span>, donde el
              fitness se encuentra con la innovación. Ubicado en una de las
              mejores zonas de <span className="texto-destacado">Tucumán</span>,
              nuestro centro redefine la experiencia de entrenar. 🏋️‍♂️✨
            </p>

            <ul class="features-list">
              <li>
                🔥 Entrenamiento de alto nivel con equipamiento de última
                tecnología
              </li>
              <li>
                🧘 Clases personalizadas y grupales diseñadas para todos los
                niveles
              </li>
              <li>💆 Zona de SPA & Wellness para una recuperación total</li>
              <li>🎯 Coaching exclusivo para alcanzar tu máximo potencial</li>
            </ul>

            <p class="highlight-text">
              Aquí no solo entrenas… ¡EVOLUCIONAS! 💪⚡
            </p>

            <p>
              ¡Ven a conocer la revolución del fitness y lleva tu cuerpo y mente
              al siguiente nivel! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromocionGym;
