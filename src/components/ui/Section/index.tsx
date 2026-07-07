import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-semibold text-white">
        {title}
      </h2>

      {children}
    </section>
  );
};

export default Section;