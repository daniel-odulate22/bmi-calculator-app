import { useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;

    const h = height / 100;
    const result = (weight / (h * h)).toFixed(1);
    setBmi(result);

    if (result < 18.5) setCategory("Underweight 🥗");
    else if (result >= 18.5 && result <= 24.9) setCategory("Normal 💪");
    else if (result >= 25 && result <= 29.9) setCategory("Overweight 🍔");
    else setCategory("Obese ⚠️");
  };

  return (
    <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-8">
      <h1 className="text-2xl font-bold text-center mb-6">BMI Calculator</h1>

      <div className="space-y-4">
        <input
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="Enter height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="Enter weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <button
        onClick={calculateBMI}
        className="mt-6 w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold transition"
      >
        Calculate BMI
      </button>

      {bmi && (
        <div className="mt-6 text-center animate-fadeIn">
          <p className="text-lg">
            Your BMI: <span className="font-bold">{bmi}</span>
          </p>
          <p className="mt-2 text-blue-400 font-medium">{category}</p>
        </div>
      )}
    </div>
  );
}
