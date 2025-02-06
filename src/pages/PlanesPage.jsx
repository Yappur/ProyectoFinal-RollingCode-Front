import "../css/PagesCSS/PlanesPage.css";

const generateWhatsAppLink = (location) => {
  const phoneNumber = "5493814479781";
  const message = encodeURIComponent(
    `Hola, quiero asociarme al plan de ${location}. ¿Podrían darme más información?`
  );
  return `https://wa.me/${phoneNumber}?text=${message}`;
};

const locations = [
  {
    location: "PLAN APARATOS",
    plans: [
      { name: "Mensual Multisede", price: 29999 },
      { name: "Trimestral Multisede", price: 85000 },
      { name: "Semestral Premium", price: 149900 },
      { name: "Anual VIP", price: 252900, note: "(SOLO CLIENTES)" },
    ],
  },
  {
    location: "PLAN CLASES",
    plans: [
      { name: "Mensual", price: 47900 },
      { name: "Mensual Multisede", price: 54900 },
      { name: "Trimestral Multisede", price: 135000 },
      { name: "Semestral Premium", price: 229900 },
      { name: "Anual VIP", price: 349900, note: "(SOLO CLIENTES)" },
    ],
  },
  {
    location: "PLAN PERSONALIZADO",
    plans: [
      { name: "Mensual Multisede", price: 44900 },
      { name: "Trimestral Multisede", price: 105000 },
      { name: "Semestral Premium", price: 199900 },
      { name: "Anual VIP", price: 279900, note: "(SOLO CLIENTES)" },
    ],
  },
];

const PricingCard = ({ location, plans }) => (
  <div className="col-12 col-md-6 col-lg-4 mb-4">
    <div className="card pricing-card">
      <div className="pricing-header">
        <div className="gym-name">EnerGYM</div>
        <div className="location">{location}</div>
      </div>
      <div className="card-body">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="plan-row d-flex justify-content-between align-items-center"
          >
            <div>
              {plan.name}
              {plan.note && <span className="client-note">{plan.note}</span>}
            </div>
            <div className="price">$ {plan.price.toLocaleString()}</div>
          </div>
        ))}
        <a
          href={generateWhatsAppLink(location)}
          className="btn btn-primary btn-associate mt-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          QUIERO ASOCIARME
        </a>
      </div>
    </div>
  </div>
);

const PricingSection = () => {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="container-general estilo-degradado section-title mb-2">
          ELEGÍ TU PLAN IDEAL Y EMPEZÁ A ENTRENAR HOY.
        </h2>
        <p className="section-subtitle">
          Consultá nuestros planes de financiación y descuento por pago en
          efectivo.
        </p>
      </div>

      <div className="row">
        {locations.map((locationData, index) => (
          <PricingCard key={index} {...locationData} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
