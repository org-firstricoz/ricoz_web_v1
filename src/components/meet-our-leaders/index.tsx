import { motion } from "framer-motion";
import { BoxParentVariants } from "../../animation/entry002";
import LeaderInfoContainer from "./LeaderInfoContainer";
import { LEADERS } from "./constants";

export default function MeetOurLeaders() {
  return (
    <div className=" lg:px-40 md:px-24 sm:px-16 px-4 pb-16 text-black">
      <motion.h3
        variants={BoxParentVariants}
        className="playfair-display text-3xl font-semibold mb-12"
      >
        Meet Our Leaders
      </motion.h3>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        {LEADERS.map((leader,i) => (
          <LeaderInfoContainer
          key={`LEADER_${i}`}
            name={leader.name}
            about={leader.about}
            experience={leader.experience}
            position={leader.position}
            img={leader.img}
          />
        ))}
      </div>
    </div>
  );
}
