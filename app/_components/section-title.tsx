import { cn } from "../_lib/utils";

const SectionTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2 className={cn("text-xs uppercase text-gray-400 font-bold", className)}>
      {title}
    </h2>
  );
};

export { SectionTitle };
