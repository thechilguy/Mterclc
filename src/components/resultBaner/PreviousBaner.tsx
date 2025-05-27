import img from "../../assets/illustration-empty.svg";

function PreviousBanner() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 max-w-md mx-auto space-y-6">
      <img src={img} alt="Illustration" className="w-40 h-40 object-contain" />

      <div className="space-y-2">
        <h2 className="text-white text-xl ">Results shown here</h2>
        <p className="text-gray-300 text-sm font-light leading-relaxed">
          Complete the form and click "calculate repayments" to see what your
          monthly repayments would be.
        </p>
      </div>
    </div>
  );
}

export default PreviousBanner;
