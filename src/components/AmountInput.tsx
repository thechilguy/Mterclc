import { useFormContext } from "react-hook-form";
import {
  getInputWrapperClasses,
  getPrefixClasses,
  getInputFieldClasses,
} from "../../src/InputStyles";

function AmountInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = !!errors.amount;

  return (
    <div className="flex flex-col gap-2 mb-6">
      <label htmlFor="amount" className="text-sm font-medium text-gray-700">
        Mortgage Amount
      </label>

      <div className={getInputWrapperClasses(hasError)}>
        <span className={getPrefixClasses(hasError)}>£</span>
        <input
          id="amount"
          type="number"
          className={getInputFieldClasses(hasError)}
          {...register("amount")}
        />
      </div>

      {hasError && (
        <p className="text-red-600 text-sm">
          {errors.amount.message as string}
        </p>
      )}
    </div>
  );
}

export default AmountInput;
