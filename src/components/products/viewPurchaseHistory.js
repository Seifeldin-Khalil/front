

const ViewPurchaseHistory = (props) => {
  const Purchase = (props) => {
    return (
      <div>
        {props.products.map((p) => (
          <Purchase product={p} key={p._id} />
        ))}
      </div>
    );
  };
  
};

export default ViewPurchaseHistory;

