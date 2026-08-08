import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The community page used to live at /collaborations. Preview links to
      // the old path have already been shared around, so keep them working.
      {
        source: "/collaborations",
        destination: "/community",
        permanent: true,
      },
      {
        source: "/ja/collaborations",
        destination: "/ja/community",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
