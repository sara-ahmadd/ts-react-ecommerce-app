const Button = ({ action, text }: { action: () => void; text: string }) => {
  return (
    <button
      className="border-2 rounded-md min-h-14 min-w-16 max-w-lg p-4 text-white btn"
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
