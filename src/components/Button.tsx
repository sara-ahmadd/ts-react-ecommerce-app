const Button = ({ action, text }: { action: () => void; text: string }) => {
  return (
    <button
      className="border-2 rounded-md max-w-52 p-4 text-white btn mb-2"
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
