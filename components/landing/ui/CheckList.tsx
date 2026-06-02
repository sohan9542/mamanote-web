import { checkText } from "../styles";

export function CheckList({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <ul className="list-none m-0 mt-1 p-0 flex flex-col gap-3.5" aria-label={label}>
      {children}
    </ul>
  );
}

export function CheckItem({ checkClass, children }: { checkClass: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className={checkClass} aria-hidden="true">
        ✓
      </span>
      <span className={checkText}>{children}</span>
    </li>
  );
}
