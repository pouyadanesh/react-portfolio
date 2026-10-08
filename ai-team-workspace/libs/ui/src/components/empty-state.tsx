interface IProps {
  title: string;
  description: string;
}

export function EmptyState({
  title,
  description}: IProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}