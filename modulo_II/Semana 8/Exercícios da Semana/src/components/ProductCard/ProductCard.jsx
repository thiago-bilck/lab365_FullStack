import PropTypes from "prop-types";
import "./ProductCard.css";

function ProductCard({ name, price, description, features, imageUrl, id }) {
  return (
    <div className="card" key={id}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <ul className="card-text">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <p className="card-text">
          <small className="text-body-secondary">R$: {price}</small>
        </p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductCard;
