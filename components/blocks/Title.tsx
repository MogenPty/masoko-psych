interface Props {
  title: string;
  color?: string;
}

export default function Title({ title, color }: Props) {
  return (
    <>
      <div className={`w-10 h-px bg-${color}`} />
      <span
        className={`font-body text-xs tracking-[0.2em] uppercase text-${color}`}
      >
        {title}
      </span>
    </>
  );
}
