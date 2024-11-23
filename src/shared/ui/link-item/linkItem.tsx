import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  href: string;
}

export const LinkItem = ({ children, className, href, ...props }: Props) => {
  return (
    <>
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    </>
  );
};
