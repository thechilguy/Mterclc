// src/utils/inputStyles.ts

export const getInputWrapperClasses = (hasError: boolean) =>
  `flex w-full rounded border overflow-hidden group ${
    hasError
      ? "border-red-500 focus-within:ring-red-400"
      : "border-gray-300 focus-within:ring-1 focus-within:ring-[var(--color-limeCustom)]"
  }`;

export const getPrefixClasses = (hasError: boolean) =>
  `bg-blue-50 px-3 flex items-center text-gray-600 text-sm ${
    hasError
      ? "bg-red-500 text-red-600 text-white"
      : "group-focus-within:bg-[var(--color-limeCustom)]"
  }`;

export const getInputFieldClasses = (hasError: boolean) =>
  `focus flex-1 px-3 py-2 outline-none appearance-none
  [&::-webkit-outer-spin-button]:appearance-none
  [&::-webkit-inner-spin-button]:appearance-none
  ${
    hasError
      ? "border-red-500 focus:border-red-500"
      : "focus:border-[var(--color-limeCustom)]"
  }`;
