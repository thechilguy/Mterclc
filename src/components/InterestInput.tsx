import { useFormContext } from "react-hook-form";
import {
  getInputWrapperClasses,
  getPrefixClasses,
  getInputFieldClasses,
} from "../../src/InputStyles";

function InterestInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const hasError = !!errors.rate;

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="rate" className="text-sm font-medium text-gray-700">
        Interest Rate
      </label>

      <div className={getInputWrapperClasses(hasError)}>
        <input
          id="rate"
          type="number"
          step="0.01"
          min={0.1}
          max={100}
          className={getInputFieldClasses(hasError) + " flex-1"}
          {...register("rate")}
        />
        <span className={getPrefixClasses(hasError)}>%</span>
      </div>

      {hasError && errors.rate && (
        <p className="text-red-600 text-sm">{errors.rate.message as string}</p>
      )}
    </div>
  );
}

export default InterestInput;
