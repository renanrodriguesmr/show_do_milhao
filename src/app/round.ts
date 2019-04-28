export class Round {
    private _round_id: number;
    private _right_answer: number;
    private _wrong_answer: number;
    private _stop: number;

    constructor(round_id: number, right_answer: number, wrong_answer: number, stop: number){
        this._round_id = round_id;
        this._right_answer = right_answer;
        this._wrong_answer = wrong_answer;
        this._stop = stop;
    }
    get round_id(): number {
        return this._round_id;
    }
    get right_answer(): number {
        return this._right_answer;
    }
    get wrong_answer(): number {
        return this._wrong_answer;
    }
    get stop(): number {
        return this._stop;
    }
}
