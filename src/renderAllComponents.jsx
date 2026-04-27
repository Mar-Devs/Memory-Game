import { useEffect, useState } from "react";
import { Diffculty } from "./diffcultyLevel";
import { GetImages } from "./getImages";

export function Main() {
  const [diffculty, setDiffculty] = useState("");
  const [shift, setShift] = useState(false);
  const [images, setImages] = useState([]);
  const [choice, setChoice] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [scoreArray, setScoreArray] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const set = new Set(choice);
  const highestScore = Math.max(...scoreArray);

  function checkDuplicate() {
    if (highestScore >= 0) {
      setBestScore(highestScore);
    }

    if (choice.length > 1) {
      setScoreArray((prev) => [...prev, currentScore]);
      console.log(`Set: ${scoreArray}`);
      console.log(`Choice: ${choice.length} `);
      if (choice.length !== set.size) {
        setCurrentScore(0);
        setRefresh(refresh + 1);
        setChoice([]);
        console.log("DUPE");
      } else {
        setCurrentScore(currentScore + 1);
        setRefresh(refresh + 1);
      }
    } else if (choice.length === 1) {
      setCurrentScore(currentScore + 1);
      setRefresh(refresh + 1);
    }
  }

  useEffect(checkDuplicate, [choice]);

  return (
    <>
      {shift === false ? (
        <Diffculty
          diffculty={diffculty}
          setDiffculty={setDiffculty}
          shift={shift}
          setShift={setShift}
        />
      ) : (
        <GetImages
          diffculty={diffculty}
          images={images}
          setImages={setImages}
          choice={choice}
          setChoice={setChoice}
          currentScore={currentScore}
          bestScore={bestScore}
          refresh={refresh}
        />
      )}
    </>
  );
}
