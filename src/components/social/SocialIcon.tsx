// Simple Icons集中管理コンポーネント
import { 
  SiX, 
  SiGithub, 
  SiHuggingface, 
  SiYoutube, 
  SiTiktok 
} from "react-icons/si";
import { 
  FaStickyNote 
} from "react-icons/fa";

type Props = { 
  iconId: string; 
  className?: string; 
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiX, 
  SiNote: FaStickyNote, // noteアイコンはFaStickyNoteを使用
  SiGithub, 
  SiHuggingface, 
  SiYoutube, 
  SiTiktok,
};

export function SocialIcon({ iconId, className }: Props) {
  const Icon = iconMap[iconId] ?? SiX;
  return <Icon className={className} aria-hidden="true" />;
}
