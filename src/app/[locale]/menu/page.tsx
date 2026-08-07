import { redirect } from "next/navigation";
import { SITE } from "@/lib/site";

export default function MenuPage() {
  redirect(SITE.links.menu);
}
