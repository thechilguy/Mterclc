type ResultBannerProps = {
  monthlyPayment: string;
  totalPayment: string;
};

function ResultBanner({ monthlyPayment, totalPayment }: ResultBannerProps) {
  return (
    <div className="p-8 m-5 w-full max-w-sm  space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">Your results</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click{" "}
          <span className="font-semibold">"calculate repayments"</span> again.
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-lg shadow-inner border-t-4 border-yellow-400 space-y-4">
        <div className="space-y-1">
          <p className="text-gray-300 text-sm">Your monthly repayments</p>
          <p className="text-3xl font-bold text-yellow-400">{monthlyPayment}</p>
        </div>

        <hr className="border-gray-700" />

        <div className="space-y-1">
          <p className="text-gray-300 text-sm">
            Total you'll repay over the term
          </p>
          <p className="text-xl font-semibold text-white">{totalPayment}</p>
        </div>
      </div>
    </div>
  );
}

export default ResultBanner;
