export interface TextBlockProps {
  text: string;
  isBold?: boolean;
  isItalic?: boolean;
}

export interface ChallengeContentProps {
  title: string;
  subtitle: string;
  paragraphs: string[];
  highlights: TextBlockProps[];
}

export interface MissionPointProps {
  icon: string;
  title: string;
  description: string;
}

export interface MissionSectionProps {
  points: MissionPointProps[];
}