import "./index.css";

const Ordertable = (props) => {
  const { orderData } = props;
  const {
    Add,
    channelimgUrl,
    orderNo,
    orderDate,
    city,
    customerName,
    orderValue,
    status,
    operation,
  } = orderData;
  return (
    <li className="table-row">
      <div className="Add-icon">
        <p className="transaction-text">{Add}</p>
        <input type="checkbox" />
      </div>
      <img src={channelimgUrl} alt="shopify" className="shopify-img" />
      <p className="transaction-text"> {orderNo}</p>
      <p className="transaction-text">{orderDate}</p>
      <p>{city}</p>
      <p>{customerName}</p>
      <p>{orderValue}</p>
      <p className="Status">{status}</p>
      <select>
        <option>{operation}</option>
      </select>
    </li>
  );
};

export default Ordertable;
