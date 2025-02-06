import { MissionPointProps } from "./about-types";

export const MissionPoint: React.FC<MissionPointProps> = ({ icon, title, description }) => {
  return (
    <div>
      <span className="font-bold">{icon} {title}</span>
  <br />
  {description}
  <br />
  <br />
  </div>
);
};