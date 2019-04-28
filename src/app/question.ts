export class Question {
    private _sentence: string;
    private _answer1: Answer;
    private _answer2: Answer;
    private _answer3: Answer;
    private _answer4: Answer;
    private _answer5: Answer;

    constructor(sentence: string, answer1_correct: boolean, answer1_text: string, 
                                  answer2_correct: boolean, answer2_text: string, 
                                  answer3_correct: boolean, answer3_text: string, 
                                  answer4_correct: boolean, answer4_text: string, 
                                  answer5_correct: boolean, answer5_text: string){
        this._sentence = sentence;
        this._answer1 = new Answer(answer1_correct, answer1_text);
        this._answer2 = new Answer(answer2_correct, answer2_text);
        this._answer3 = new Answer(answer3_correct, answer3_text);
        this._answer4 = new Answer(answer4_correct, answer4_text);
        this._answer5 = new Answer(answer5_correct, answer5_text);

    }

    get sentence() {
        return this._sentence;
    }
    public answers() {
        return [this._answer1.text,this._answer2.text,this._answer3.text,this._answer4.text,this._answer5.text];
    }
    public rightAnswer(){
        if (this._answer1.correct){
            return 0;
        } else if (this._answer2.correct){
            return 1;
        } else if (this._answer3.correct){
            return 2;
        } else if (this._answer4.correct){
            return 3;
        } else if (this._answer5.correct){
            return 4;
        } else {
            //nenhuma alternativa é verdadeira
            return 5;
        }
    }
}

export class Answer {
    private _correct: boolean;
    private _text: string;
    constructor(correct: boolean, text: string){
        this._correct = correct;
        this._text = text;
    }
    get correct() {
        return this._correct;
    }
    get text() {
        return this._text;
    }
}

export class Totais {
    private _questions: number;
    private _rounds: number;
    constructor(questions: number, rounds: number){
        this._questions = questions;
        this._rounds = rounds;
    }
    get questions() {
        return this._questions;
    }
    get rounds() {
        return this._rounds;
    }
}