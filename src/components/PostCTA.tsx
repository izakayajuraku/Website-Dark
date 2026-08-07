import { useLocale } from "next-intl";
import { SITE } from "@/lib/site";

export function PostCTA() {
  const locale = useLocale();
  const isJa = locale === "ja";

  return (
    <div className="card-elevated mt-12 rounded border-2 border-ink/20 bg-void p-6 text-center text-ink">
      <p className="font-display text-xl tracking-wide">
        {isJa ? "気になったらぜひジュラクへ" : "Hungry? Come see us."}
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <a
          href={SITE.links.order}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-ink bg-red px-5 py-2 font-display text-sm tracking-wide text-ink transition hover:bg-red-dark"
        >
          {isJa ? "オンライン注文（手数料なし）→" : "Order Direct (no fees) →"}
        </a>
        <a
          href={SITE.links.reserve}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-ink px-5 py-2 font-display text-sm tracking-wide text-ink transition hover:bg-ink hover:text-void"
        >
          {isJa ? "テーブルを予約する →" : "Reserve a Table →"}
        </a>
      </div>
    </div>
  );
}
