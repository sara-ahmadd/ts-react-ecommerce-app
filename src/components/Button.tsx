const Button = ({ action, text }: { action: () => void; text: string }) => {
  return (
    <button
      className="border-2 rounded-md h-14 w-36 text-white bg-blue-500"
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
