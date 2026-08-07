import { ENV } from "@/config/env";

export const authGuardsDisabled = ENV.APP_ENV === "development";
