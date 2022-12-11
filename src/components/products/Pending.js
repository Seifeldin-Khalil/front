import Myaccountsummary from './Pending';

const Pending = (props) => {
  return (
    <div>
      {props.accounts.map((p) => (
        <Myaccountsummary account={p} key={p._id} />
      ))}
    </div>
  );
};

export default Pending;
