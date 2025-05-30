import { useFormContext } from "react-hook-form";
import {
  getInputWrapperClasses,
  getPrefixClasses,
  getInputFieldClasses,
} from "../../src/InputStyles";

function TermInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = !!errors.term;

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="term" className="text-sm font-medium text-gray-700">
        Mortgage Term
      </label>

      <div className={getInputWrapperClasses(hasError)}>
        <input
          id="term"
          type="number"
          step="1"
          min="1"
          max="40"
          className={getInputFieldClasses(hasError) + " flex-1"}
          {...register("term")}
        />
        <span className={getPrefixClasses(hasError)}>years</span>
      </div>

      {hasError && (
        <p className="text-red-600 text-sm">{errors.term?.message as string}</p>
      )}
    </div>
  );
}

export default TermInput;
