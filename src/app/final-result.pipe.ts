import { Pipe, PipeTransform } from '@angular/core';
import { Round } from './round';

@Pipe({
  name: 'finalResult'
})
export class FinalResultPipe implements PipeTransform {

  transform(success: boolean, round: Round, next_round: Round): string {
    if (success){
      if (next_round != null){
        return "R$ " + next_round.stop + ",00";
      } else {
        return "1 MILHÃO!"
      }
    } else {
      return "R$ " + round.wrong_answer + ",00" ;
    }
    
  }

}
