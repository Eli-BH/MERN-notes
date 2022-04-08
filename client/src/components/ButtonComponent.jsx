import "./ButtonStyles.scss";

const ButtonComponent = ({ children, action }) => {
  return (
    <button onClick={() => action()} className="btn-component">
      {children}
    </button>
  );
};

export default ButtonComponent;
