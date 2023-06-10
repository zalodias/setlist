import { useMemo } from "react";

type ShowCardProps = {
  name: string;
  date: string;
  location: string;
};

export default function ShowCard({ name, location, date }: ShowCardProps) {
  const formattedDate = useMemo(() => {
    const month = new Intl.DateTimeFormat("en-US", {
      month: "short",
    }).format(new Date(date));
    const day = new Intl.DateTimeFormat("en-US", {
      day: "numeric",
    }).format(new Date(date));

    return { month, day };
  }, [date]);

  return (
    <div className="relative aspect-video w-80 overflow-hidden rounded-lg">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        src="https://picsum.photos/seed/24/1920/1080"
        alt=""
      />
      <div className="absolute bottom-0 flex w-full items-center justify-between bg-background-02 p-4">
        <div>
          <h4 className="text-lg font-medium">{name}</h4>
          <p className="text-foreground-04">{location}</p>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-background-01 p-2">
          <span className="text-sm text-foreground-04">
            {formattedDate.month}
          </span>
          <span className="text-2xl font-bold">{formattedDate.day}</span>
        </div>
      </div>
    </div>
  );
}
