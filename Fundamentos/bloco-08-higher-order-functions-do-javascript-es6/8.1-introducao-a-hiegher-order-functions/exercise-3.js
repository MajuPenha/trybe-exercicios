const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let rights = 0;

const checkAnswers = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
 
  for(let i =0; i < RIGHT_ANSWERS.length; i++) {
    
    if (RIGHT_ANSWERS[i] === STUDENT_ANSWERS[i]) {
     rights += 1;
      
    } if (STUDENT_ANSWERS[i] !== 'N.A' && RIGHT_ANSWERS[i] !== STUDENT_ANSWERS[i]) {
      rights -= 0.5
    }
    
  }
  return `Pontuação final: ${rights} pontos`;
}

const CorrectAnswers = (RIGHT_ANSWERS, STUDENT_ANSWERS, callback) => {
  
  return callback(RIGHT_ANSWERS, STUDENT_ANSWERS);


}

console.log(CorrectAnswers(RIGHT_ANSWERS,STUDENT_ANSWERS,checkAnswers))



