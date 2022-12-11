import ProductSummary from './Pending';

const Pending = (props) => {
  return (
    <div>
      {props.products.map((p) => (
        <ProductSummary product={p} key={p._id} />
      ))}
    </div>
  );
};

export default Pending;