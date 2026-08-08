import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="border-t-4 border-red bg-void text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl tracking-wide text-ember">
            {t("footer.ourHome")}
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/85">
            {SITE.address}
            <br />
            <a href={SITE.phoneHref} className="hover:text-ember">
              {SITE.phone}
            </a>
          </p>
          <ul className="mt-3 space-y-1 text-sm text-ink/70">
            {SITE.hours.map((h) => (
              <li key={h.days} className="flex gap-4">
                <span className="w-20 shrink-0">
                  {locale === "ja" ? h.daysJa : h.days}
                </span>
                <span>{locale === "ja" ? h.timeJa : h.time}</span>
              </li>
            ))}
          </ul>
          <a
            href={SITE.links.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-display text-sm tracking-wide text-ember underline underline-offset-4"
          >
            {t("footer.getDirections")}
          </a>
        </div>

        <div>
          <h3 className="font-display text-xl tracking-wide text-ember">
            {t("footer.followTheGoodTimes")}
          </h3>
          <p className="mt-3 text-sm text-ink/70">{SITE.socialHandle}</p>
          <div className="mt-3 flex gap-4 text-sm">
            <a
              href={SITE.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ember"
            >
              Instagram
            </a>
            <a
              href={SITE.links.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ember"
            >
              TikTok
            </a>
            <a
              href={SITE.links.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ember"
            >
              Google
            </a>
            <a
              href={SITE.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ember"
            >
              WhatsApp
            </a>
          </div>
          <a
            href={SITE.links.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full border-2 border-gold px-4 py-1.5 font-display text-sm tracking-wide text-ember transition hover:bg-gold hover:text-ink"
          >
            {t("footer.writeAReview")}
          </a>
        </div>

        <div>
          <h3 className="font-display text-xl tracking-wide text-ember">
            {t("footer.orderAndRewards")}
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={SITE.links.order}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ember"
              >
                {t("footer.orderDirectNoFees")}
              </a>
            </li>
            <li>
              <a
                href={SITE.links.giftCards}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ember"
              >
                {t("nav.giftCards")}
              </a>
            </li>
            <li>
              <a
                href={SITE.links.rewards}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ember"
              >
                {t("nav.rewards")}
              </a>
            </li>
          </ul>
          <ul className="mt-6 space-y-2 text-sm text-ink/70">
            <li>
              <Link href="/collaborations" className="hover:text-ember">
                {t("footer.community")}
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-ember">
                {t("footer.faq")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/15 py-4 text-center text-xs text-ink/60">
        © {new Date().getFullYear()} Izakaya Juraku · {SITE.address}
      </div>
    </footer>
  );
}
