import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'answerResult'
})
export class AnswerResultPipe implements PipeTransform {

  transform(success: boolean): string {
    if (success){
      return "Resposta Correta.";
    } else {
      return "Resposta Errada";
    }
    
  }

}
