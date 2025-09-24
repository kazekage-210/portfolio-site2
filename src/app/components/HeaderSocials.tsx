import { headerSocials } from "@/config/socialLinks.config";
import { SocialPill } from "@/components/social/SocialPill";

export default function HeaderSocials() {
  return (
    <nav 
      aria-label="ソーシャルメディア（上部）" 
      className="no-external-indicator flex flex-wrap items-center gap-2"
    >
      {headerSocials.map((item) => (
        <SocialPill key={item.id} item={item} />
      ))}
    </nav>
  );
}
