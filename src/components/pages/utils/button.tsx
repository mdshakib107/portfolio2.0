type props = {
  name: string;
};
const Button = ({ name }: props) => {
  return (
    <div>
      <button className="relative inline-block px-4 py-2 bg-teal-600 text-white rounded-xs overflow-hidden group">
        <span className="absolute inset-0 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 bg-white" />
        <span className="relative z-10 group-hover:text-teal-600 transition-colors duration-300">
          {name}
        </span>
      </button>
    </div>
  );
};

export default Button;
