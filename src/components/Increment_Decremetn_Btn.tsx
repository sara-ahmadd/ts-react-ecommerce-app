function Increment_Decremetn_Btn({
  sign,
  action,
}: {
  sign: string;
  action: () => void;
}) {
  return (
    <button className="w-7 h-7 btn text-white text-center" onClick={action}>
      {sign}
    </button>
  );
}

export default Increment_Decremetn_Btn;
