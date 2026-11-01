import Link from "next/link";

interface Entry {
  href: string;
  title: string;
}

export function DocPager({ prev, next }: { prev?: Entry; next?: Entry }) {
  return (
    <div className="pager">
      {prev ? (
        <Link href={prev.href}>
          <span>Previous</span>
          {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link className="next" href={next.href}>
          <span>Next</span>
          {next.title}
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
