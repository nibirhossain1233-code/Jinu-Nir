import { names } from "@/api/names";

const Logo = ({ className = "" }) => {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
  {/* Icon mark */}
  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-rose-400 to-rose-600 font-serif text-sm font-bold text-white">
    {names.secondLogo.charAt(0)+names.firstLogo.charAt(0)}
  </span>

  {/* Wordmark */}
  <span className="inline-flex items-baseline font-serif text-[19px] font-semibold tracking-wide text-white">
    <span>{names.secondLogo}</span>
    <span className="mx-0.5 text-rose-400">{names.firstLogo}</span>
  </span>
</span>
  );
};

export default Logo;
