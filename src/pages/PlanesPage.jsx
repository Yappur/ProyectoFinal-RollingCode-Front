import "../css/PagesCSS/PlanesPage.css";

const locations = [
  {
    location: "PLAN APARATOS",
    plans: [
      { name: "Mensual Multisede", price: 54900 },
      { name: "Trimestral Multisede", price: 145000 },
      { name: "Semestral Premium", price: 259900 },
      { name: "Anual VIP", price: 389900, note: "(SOLO CLIENTES)" },
    ],
  },
  {
    location: "PLAN CLASES",
    plans: [
      { name: "Mensual", price: 47900 },
      { name: "Mensual Multisede", price: 54900 },
      { name: "Trimestral Multisede", price: 145000 },
      { name: "Semestral Premium", price: 259900 },
      { name: "Anual VIP", price: 389900, note: "(SOLO CLIENTES)" },
    ],
  },
  {
    location: "PLAN PERSONALIZADO",
    plans: [
      { name: "Mensual Multisede", price: 54900 },
      { name: "Trimestral Multisede", price: 145000 },
      { name: "Semestral Premium", price: 259900 },
      { name: "Anual VIP", price: 389900, note: "(SOLO CLIENTES)" },
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
        <button className="btn btn-primary btn-associate mt-4">
          QUIERO ASOCIARME
        </button>
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
