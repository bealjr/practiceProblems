function bowlingScore(frames) {
  console.log("Bowling round = " + frames)
   var gameScore = 0;
   var turn = {
      rollCount: 0,
      firstRoll: 0,
      turnCode: "regular"
    };

  for(var idx = 0; idx < frames.length; idx++){

    var currentRoll = frames[idx];
    if(currentRoll === " ") continue;
    console.log("current Roll is " + currentRoll)

    if(currentRoll === "X"){
      if(turn.turnCode === "regular"){
        turn.turnCode = "strike";
        continue;
      }
      if(turn.turnCode === "strike"){
        turn.turnCode = "doubleStrike";
        console.log("DOUBLE STRIKE!");
        continue;
      }
      if(turn.turnCode === "doubleStrike"){
        gameScore += 30;
        console.log("gameScore is " + gameScore);
        console.log("TRIPLE STRIKE!");
        continue;
      }
      if(turn.turnCode === "spare"){
        gameScore += 20;
        console.log("gameScore is " + gameScore);
        turn.turnCode = "strike";
        continue;
      }
    }

    if(currentRoll === "/"){
      if(turn.turnCode === "strike"){
        gameScore += 20;
        console.log("gameScore is " + gameScore);
        turn.turnCode = "spare";
        turn.rollCount = 0;
        continue;
      }
      if(turn.turnCode === "regular"){
        turn.turnCode = "spare";
        turn.rollCount = 0;
        continue;
      }
    }

    if(Number(currentRoll) || currentRoll === "0"){

      if(turn.turnCode === "regular"){
        if(turn.rollCount){
          gameScore += Number(currentRoll) + Number(turn.firstRoll);
          console.log("gameScore is " + gameScore);
          turn.rollCount = 0;

          continue;
        }
        if(turn.rollCount === 0){
          turn.firstRoll = currentRoll;
          turn.rollCount = 1;
          continue;
        }
      }

      if(turn.turnCode === "strike"){
        if(turn.rollCount){
          gameScore += 10 + Number(currentRoll) * 2 + Number(turn.firstRoll) * 2;
          console.log("gameScore is " + gameScore);
          turn.rollCount = 0;
          turn.turnCode = "regular";
          continue;
        }
        if(turn.rollCount === 0){
          turn.firstRoll = currentRoll;
          turn.rollCount = 1;
          continue;
        }
      }

      if(turn.turnCode === "spare"){
        if(turn.rollCount === 0){
          gameScore += 10 + Number(currentRoll);
          console.log("gameScore is " + gameScore);
          turn.turnCode = "regular";
          turn.rollCount = 1;
          turn.firstRoll = currentRoll;
          continue;
        }
      }

      if(turn.turnCode === "doubleStrike"){
        gameScore += 20 + Number(currentRoll);
        console.log("gameScore is " + gameScore);
        turn.turnCode = "strike";
        turn.rollCount = 1;
        turn.firstRoll = currentRoll;
        continue;
      }
    }
  }
  return gameScore;
}
