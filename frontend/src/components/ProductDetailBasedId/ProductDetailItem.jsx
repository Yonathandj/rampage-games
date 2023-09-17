import PropTypes from "prop-types";

const ProductDetailItem = ({ loading, error, game }) => {
  return <div>{(loading, error, game)}</div>;
};

ProductDetailItem.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  game: PropTypes.array,
};

export default ProductDetailItem;
