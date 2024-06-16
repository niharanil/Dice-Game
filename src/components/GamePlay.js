import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import Button from "../styled/Button";
import Rules from "./Rules";

function GamePlay() {
    const [score,setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrenDice] = useState(1);
  const [error,setError] = useState("");
  const [showRules,setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
      if(!selectedNumber) {
        setError("You have not selected any number");
        return;
      }
    
        
    const randomNumber = generateRandomNumber(1, 7);
    setCurrenDice(randomNumber);


    if(selectedNumber === randomNumber){
        setScore((prev)=> prev + randomNumber);
    }
    else{
        setScore((prev)=> prev-2)
    }
    setSelectedNumber(undefined)
  };

  const resetScore = () => {
    setScore(0);
  }



  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector
        setError={setError}
        error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <Button onClick={resetScore}>Reset</Button>
        <Button onClick={()=> setShowRules((prev)=> !prev)}>
            {showRules ? 'Hide ' : 'Show '}
             Rules
            </Button>

      </div>
      { showRules && <Rules/>}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .btns{
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  gap: 10px;
    align-items: center;
  }
`;
