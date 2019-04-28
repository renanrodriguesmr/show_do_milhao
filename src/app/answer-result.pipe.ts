import { Pipe, PipeTransform } from '@angular/core';
import { Round } from './round';

@Pipe({
  name: 'answerResult'
})
export class AnswerResultPipe implements PipeTransform {

  transform(success: boolean, round: Round, next_round: Round): string {
    if (success){
      if (next_round != null){
        return "Correta. Seu prêmio atual é de R$" + round.right_answer + ". Você pode desistir e ficar com R$" + next_round.stop + ". A próxima pergunta vale R$ " + next_round.right_answer + ". Mas se errar, leva pra casa R$ " + next_round.wrong_answer + ".";
      } else {
        return "Correta. Você ganhou 1 MILHÃO! Parabéns!"
      }
    } else {
      return "Errada. Você vai embora para casa com R$" + round.wrong_answer;
    }
    
  }

}
