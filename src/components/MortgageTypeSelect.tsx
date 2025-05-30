import { useFormContext } from "react-hook-form";
import "../css/Radio.css"; // Підключаємо CSS

function MortgageTypeSelect() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-2 mb-6">
      <label className="text-sm font-medium text-gray-700">Mortgage Type</label>

      <div className="flex flex-col gap-3">
        <label className="radio-label">
          <input
            type="radio"
            value="repayment"
            {...register("type")}
            className="radio-input"
          />
          <span className="radio-custom"></span>
          Repayment
        </label>

        <label className="radio-label">
          <input
            type="radio"
            value="interestOnly"
            {...register("type")}
            className="radio-input"
          />
          <span className="radio-custom"></span>
          Interest Only
        </label>
      </div>

      {errors.type && (
        <p className="text-red-600 text-sm">{errors.type.message as string}</p>
      )}
    </div>
  );
}

export default MortgageTypeSelect;
