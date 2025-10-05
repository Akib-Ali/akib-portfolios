// "use client"

// import Confetti from "react-confetti-boom";

// interface CelebrationProps {
//   showConfetti: boolean;
// }

// const Celebration = ({ showConfetti }: CelebrationProps) => {
//   return (
//     <>
//       {showConfetti && (
//         <>
//           {/* Left bottom boom */}
//           <Confetti
//             active={showConfetti}
//             style={{
//               position: "fixed",
//               bottom: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               pointerEvents: "none",
//               zIndex: 9999,
//             }}
//             config={{
//               angle: 60,
//               spread: 100,
//               startVelocity: 80,
//               elementCount: 60,
//               dragFriction: 0.1,
//               duration: 3000,
//               origin: { x: 0, y: 1 },
//               colors: ["#4161ba", "#dfedc5", "#4161ba", "#dfedc5"],
//               scalar: 1.2,
//             }}
//           />

//           {/* Right bottom boom */}
//           <Confetti
//             active={showConfetti}
//             style={{
//               position: "fixed",
//               bottom: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               pointerEvents: "none",
//               zIndex: 9999,
//             }}
//             config={{
//               angle: 120,
//               spread: 100,
//               startVelocity: 80,
//               elementCount: 60,
//               dragFriction: 0.1,
//               duration: 3000,
//               origin: { x: 1, y: 1 },
//               colors: ["#4161ba", "#dfedc5", "#4161ba", "#dfedc5"],
//               scalar: 1.2,
//             }}
//           />
//         </>
//       )}
//     </>
//   );
// };

// export default Celebration;



"use client"

import Confetti from "react-confetti-boom";

interface CelebrationProps {
  showConfetti: boolean;
}

const Celebration = ({ showConfetti }: CelebrationProps) => {
  return (
    <>
      {showConfetti && (
        <>
          {/* Left bottom boom */}
          <Confetti
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 9999,
            }}
            mode="boom"
            particleCount={60}
            colors={["#4161ba", "#dfedc5", "#4161ba", "#dfedc5"]}
            x={0} // origin left
            y={1} // origin bottom
          />

          {/* Right bottom boom */}
          <Confetti
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 9999,
            }}
            mode="boom"
            particleCount={60}
            colors={["#4161ba", "#dfedc5", "#4161ba", "#dfedc5"]}
            x={1} // origin right
            y={1} // origin bottom
          />
        </>
      )}
    </>
  );
};

export default Celebration;



