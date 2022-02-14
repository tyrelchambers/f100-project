const first = () => <button></button>;

const second = (props) => (
  <button
    className={`p-2 w-full  rounded-lg ${
      props.active
        ? "text-gray-900 bg-yellow-300"
        : "text-gray-400 bg-slate-700"
    } `}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export const Button = ({ variant, ...props }) => {
  if (variant === "second") {
    return second(props);
  }

  return first(props);
};
