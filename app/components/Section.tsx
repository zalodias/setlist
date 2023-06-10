type SectionProps = {
  children: React.ReactNode;
};

type SectionHeaderProps = {
  title: string;
  actions?: React.ReactNode;
};

type SectionBodyProps = {
  children: React.ReactNode;
  variant: "stack" | "scroll";
};

export default function Section({ children }: SectionProps) {
  return <section className="grid gap-4">{children}</section>;
}

function SectionHeader({ title, actions }: SectionHeaderProps) {
  return (
    <header className="flex justify-between">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div>{actions}</div>
    </header>
  );
}
Section.Header = SectionHeader;

function SectionBody({ children, variant }: SectionBodyProps) {
  const variants = {
    stack: "grid-flow-row",
    scroll: "grid-flow-col overflow-x-scroll",
  };

  return <div className={`grid gap-4 ${variants[variant]}`}>{children}</div>;
}
Section.Body = SectionBody;
