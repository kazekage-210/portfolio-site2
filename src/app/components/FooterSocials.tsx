import { footerSocials } from "@/config/socialLinks.config";
import { SocialCard } from "@/components/social/SocialCard";

export default function FooterSocials() {
  return (
    <section className="no-external-indicator">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {footerSocials.map((item) => (
          <SocialCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
