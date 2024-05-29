import { useState } from "react";

const calculateMove = (numbers) => {
  console.log("numbers", numbers);
  const moves = [];
  let currMove = 0;
  for (let i = 1; i < numbers.length; i += 1) {
    let tempNumbers = [...numbers]; // create a copy of the numbers array
    for (let j = i; j > 0; j -= 1) {
      console.log("i, j", i, j);
      console.log("currMove", currMove);
      if (tempNumbers[j - 1] > tempNumbers[j]) {
        const temp = tempNumbers[j - 1];
        tempNumbers[j - 1] = tempNumbers[j];
        tempNumbers[j] = temp;
      }
      console.log("numbers", tempNumbers);
      moves[currMove] = { sortArr: [...tempNumbers], currPos: j, sortPos: i };
      currMove++;
    }
    numbers = tempNumbers; // update the numbers array with the sorted subarray
  }
  return moves;
};

export default function Graph({ arr }) {
  const moves = calculateMove(arr);
  const [currMove, setCurrMove] = useState(1);
  console.log("moves", moves);

  const getCurrSnap = (sortedArr, currPos, sortedPos) => {
    console.log("sorttedArr", sortedArr);
    return sortedArr.map((value, index) => {
      return (
        <div
          style={{
            height: value + "px",
            width: "30px",
            margin: "10px",
            backgroundColor: `${
              index === currPos ? "red" : index <= sortedPos ? "green" : "black"
            }`,
          }}
        ></div>
      );
    });
  };
  return (
    <div>
      <h2>
        {currMove} out of {moves.length}
        <div style={{ display: "flex" }}>
          {getCurrSnap(
            moves[currMove-1].sortArr,
            moves[currMove-1].currPos,
            moves[currMove-1].sortPos
          )}
        </div>
      </h2>
      <button
        onClick={() => {
          setCurrMove(currMove + 1);
        }}
        disabled={currMove === moves.length}
      >
        {">>"}
      </button>
      <buttton
        onClick={() => {
          setCurrMove(currMove - 1);
        }}
        disabled={currMove === 0}
      >
        {"<<"}
      </buttton>
    </div>
  );
}
