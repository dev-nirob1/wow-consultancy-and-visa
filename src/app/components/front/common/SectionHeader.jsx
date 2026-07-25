const SectionHeader = ({
  subTitle,
  title,
  description,
  align = "center",
  className = "",
}) => {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {subTitle && (
        <span className="relative inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wide mb-4">
          <span className="w-6 h-[2px] bg-primary" />
          {subTitle}
        </span>
      )}

      <h2>{title}</h2>

      {description && <p className="mt-4">{description}</p>}
    </div>
  );
};

export default SectionHeader;
