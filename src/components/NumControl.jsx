const KEYS = [
    { text: "AC", value: "AC" },
    { text: "+/-", value: "-" },
    { text: "%", value: "%" },
    ...[...Array(10).keys()].reverse().map((element) => ({ text: element, value: element })),
    { text: ".", value: "." },
  ];
  
  const NumberControl = ({ setOperation, onReset, setResult, setValue, value, operation }) => {
    const handleClick = (elementValue = "") => {
      setResult(null);
      if (elementValue === "AC") onReset();
      else if (elementValue === "%") {
        if (operation.length < 1 && value) {
          setOperation([value, elementValue]);
          setValue("");
        }
      } else {
        setValue((value) =>
          value
            ? `${value}${elementValue === "." && value.toString().indexOf(".") !== -1 ? "" : elementValue}`
            : elementValue === "."
            ? "0."
            : elementValue
        );
      }
    };
  
    return (
      <div className="bg-gray-200 text-2xl h-full col-span-3 grid grid-cols-3 grid-rows-5 place-items-center font-bold">
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
  
  export default NumberControl;
  