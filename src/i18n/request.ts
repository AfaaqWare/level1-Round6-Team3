import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
export default getRequestConfig(async params => {
  const store = await cookies();
  const locale = params.locale || store.get("locale")?.value || "ar";
  const messages = (await import(`../messages/${locale}.json`)).default;
  return {
    locale,
    messages,
  };
});
