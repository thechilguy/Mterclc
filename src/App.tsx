import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import AmountInput from "./components/AmountInput";
import TermInput from "./components/TermInput";
import InterestInput from "./components/InterestInput";
import MortgageTypeSelect from "./components/MortgageTypeSelect";
import PreviousBanner from "./components/resultBaner/PreviousBaner";
import ResultBanner from "./components/resultBaner/ResultBaner";
import { mortgageSchema } from "./schema/mortgageSchema";
import calc from "../src/assets/icon-calculator.svg";

type FormValues = {
  amount: number;
  term: number;
  rate: number;
  type: "repayment" | "interestOnly";
};

function App() {
  const methods = useForm<FormValues>({
    resolver: yupResolver(mortgageSchema),
    mode: "onBlur",
  });

  const [monthlyPayment, setMonthlyPayment] = useState<string | null>(null);
  const [totalPayment, setTotalPayment] = useState<string | null>(null);

  const onSubmit = (data: FormValues) => {
    const { amount, term, rate, type } = data;

    const monthlyRate = rate / 12 / 100;
    const numPayments = term * 12;
    let payment = 0;

    if (type === "repayment") {
      payment =
        (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
    } else if (type === "interestOnly") {
      payment = amount * monthlyRate;
    }

    const total = payment * numPayments;

    setMonthlyPayment(`£${payment.toFixed(2)}`);
    setTotalPayment(`£${total.toFixed(2)}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-2xl overflow-hidden shadow-md bg-white">
        {/* Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-xl mb-5">Mortgage Calculator</h1>
                <button
                  type="button"
                  className="font-light underline text-sm"
                  onClick={() => {
                    methods.reset();
                    setMonthlyPayment(null);
                    setTotalPayment(null);
                  }}
                >
                  Clear All
                </button>
              </div>

              <AmountInput />
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <div className="flex-1 min-w-0">
                  <TermInput />
                </div>
                <div className="flex-1 min-w-0">
                  <InterestInput />
                </div>
              </div>

              <MortgageTypeSelect />

              <button
                type="submit"
                className="mt-6 flex items-center gap-2 bg-[var(--color-limeCustom)] hover:bg-[hsl(61,70%,62%)] text-black font-semibold px-6 py-3 rounded-full shadow transition-colors"
              >
                <img src={calc} alt="calculator icon" className="w-5 h-5" />
                Calculate Repayments
              </button>
            </form>
          </FormProvider>
        </div>

        {/* Banner */}
        <div
          className="
            w-full md:w-1/2 min-h-[300px] bg-slate-700 flex items-center justify-center
            md:rounded-tr-2xl md:rounded-br-2xl md:rounded-tl-none md:rounded-bl-[80px]
            rounded-none
          "
        >
          {monthlyPayment && totalPayment ? (
            <ResultBanner
              monthlyPayment={monthlyPayment}
              totalPayment={totalPayment}
            />
          ) : (
            <PreviousBanner />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
