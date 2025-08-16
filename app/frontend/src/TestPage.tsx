import { Button } from "@/components/ui/button";
import { useState } from "react";

function TestPage() {
  const [inputValue, setInputValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
    console.log("Button was clicked!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Test UI Page</h1>
      <div className="mb-4">
        <label htmlFor="test-input" className="block mb-2 text-lg font-medium text-gray-700">
          Enter some text:
        </label>
        <input
          id="test-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
          className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <Button onClick={handleButtonClick}>Click me!</Button>
      {buttonClicked && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded shadow-lg">
          <p>Button was clicked! You entered: <strong>{inputValue || "No input"}</strong></p>
        </div>
      )}
      <div className="mt-6 space-x-4">
        <Button onClick={() => alert("Another action!")}>Another Action</Button>
        <Button onClick={() => console.log("Button 3 clicked")}>Button 3</Button>
      </div>
    </div>
  );
}

export default TestPage;
