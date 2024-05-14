import AchievementWrapper from "../achievement-wrapper";
import ACHIEVEMENTS from "./constants";

export default function AchievementStrip() {
  return (
    <div className="bg-rz-lategray flex gap-16 justify-center">
      {ACHIEVEMENTS.map((achievement) => (
        <AchievementWrapper
        key={`${achievement.title}_${achievement.value}`}
          img={achievement.img}
          title={achievement.title}
          value={achievement.value}
        />
      ))}
    </div>
  );
}
