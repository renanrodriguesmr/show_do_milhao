import { Pipe, PipeTransform } from '@angular/core';
import { Round } from './round';

@Pipe({
  name: 'answerResult'
})
export class AnswerResultPipe implements PipeTransform {

  transform(success: boolean, round: Round, round_next: Round): string {
    if (success){
      return "Correta. Seu prêmio atual é de R$" + round.right_answer + ". Você pode desistir e ficar com R$" + round_next.stop + ". A próxima pergunta vale R$ " + round_next.right_answer + ". Mas se errar, leva pra casa R$ " + round_next.wrong_answer + ".";
    } else {
      return "Errada. Você vai embora para casa com R$" + round.wrong_answer;
    }
    
  }

}
