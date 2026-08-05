interface Props {
  title: string;
}

export default function PageTitle({ title }: Props) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-10 h-px bg-common-green" />
      <span className="text-common-green uppercase tracking-[0.2em] text-xs">
        {title}
      </span>
    </div>
  );
}
