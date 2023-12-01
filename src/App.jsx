import { useState } from "react";
import { InputBox } from "./components";
import UseCurrencyInfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, SetFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = UseCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    SetFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const redirectToGitHub = () => {
    window.location.href = "https://github.com/PranshuRaj1";
  };

  const redirectToLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/pranshuraj/";
  };

  const redirectToTwitter = () => {
    window.location.href = "https://twitter.com/RajPranshu12";
  };

  return (
    <div className="w-full h-screen flex flex-wrap bg-black">
      {/* Social Media Buttons */}
      <div className="flex items-start justify-start space-x-4 ml-4 mt-4">
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
          onClick={redirectToGitHub}
        >
          GitHub
        </button>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded-md"
          onClick={redirectToLinkedIn}
        >
          LinkedIn
        </button>
        <button
          className="bg-blue-400 text-white px-4 py-2 rounded-md"
          onClick={redirectToTwitter}
        >
          Twitter
        </button>
      </div>

      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => SetFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {String(from).toUpperCase()} to {String(to).toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
