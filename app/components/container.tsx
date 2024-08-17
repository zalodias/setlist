import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto max-w-[60rem] px-5">{children}</div>;
}
