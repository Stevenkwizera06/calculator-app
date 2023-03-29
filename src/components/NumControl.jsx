const KEYS = [
    { text: "AC", value: "AC" },
    { text: "+/-", value: "-" },
    { text: "%", value: "%" },
    ...[...Array(10).keys()].reverse().map((k) => ({ text: k, value: k })),
    { text: ".", value: "." },
  ];
  
  const NumControl = ({ setOperation, onReset, setResult, setValue, value, operation }) => {
    const handleClick = (kValue = "") => {
      setResult(null);
      if (kValue === "AC") onReset();
      else if (kValue === "%") {
        if (operation.length < 1 && value) {
          setOperation([value, kValue]);
          setValue("");
        }
      } else {
        setValue((value) =>
          value
            ? `${value}${kValue === "." && value.toString().indexOf(".") !== -1 ? "" : kValue}`
            : kValue === "."
            ? "0."
            : kValue
        );
      }
    };
  
    return (
      <div className="bg-gray-300 text-2xl h-full col-span-3 grid grid-cols-3 grid-rows-5 place-items-center font-bold">
        {KEYS.map((key, index) => (
          <div
            className={`border active:bg-white transition-all border-gray-400 w-full h-full flex justify-center items-center cursor-pointer ${
              key.text === 0 &&"col-span-2 "
            }`}
            onClick={() => handleClick(key.value)}
            key={index}
          >
            {key.text}
          </div>
        ))}
      </div>
    );
  };
  
  export default NumControl;
  