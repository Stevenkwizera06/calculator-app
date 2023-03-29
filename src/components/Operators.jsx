const KEYS = [  { text: "÷", value: "/" },  { text: "x", value: "*" },  { text: "-", value: "-" },  { text: "+", value: "+" },  { text: "=", value: "=" },];

const Operators = ({ setOperation, getResult, setLatestValue, latestValue, operation }) => {
  const handleClick = (operatorValue) => {
    if (latestValue || operation[operation.length - 1]) {
      setOperation((value) =>
        !isNaN(value[value.length - 1]) && Number(latestValue)
          ? value.length < 2
            ? [latestValue]
            : [...value.slice(0, -1)]
          : [...value, latestValue]
      );
      if (operatorValue === "=") getResult();
      else setOperation((operations) => [...operations, operatorValue]);
      setLatestValue(null);
    }
  };

  return (
    <div className="bg-orange-600 h-full grid grid-cols-1 grid-rows-5 font-bold text-white text-2xl">
      {KEYS.map((key, index) => (
        <div
          onClick={() => handleClick(key.value)}
          className="border active:bg-orange-500 transition-all border-gray-400 w-full h-full flex justify-center items-center cursor-pointer"
          key={index}
        >
          {key.text}
        </div>
      ))}
    </div>
  );
};

export default Operators;
