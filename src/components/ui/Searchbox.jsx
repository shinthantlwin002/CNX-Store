import { Search } from "lucide-react";
import React from "react";

const Searchbox = ({
  onSubmit,
  placeholderText,
  className,
  containerClass,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`${containerClass} flex items-center gap-4 px-2 py-1 border border-[#D5D2D2]`}
    >
      <Search />
      <input
        type="text"
        placeholder={placeholderText}
        className={`${className} focus:outline-0 focus:border-0`}
      />
    </form>
  );
};

export default Searchbox;
