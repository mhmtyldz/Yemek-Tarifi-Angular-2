//Aşağıdaki constructor da public ön ekini koyarak fazlalıklardan kurtulduk
//Eğer public yazmazsak tanımlama ve cons.ta eşleştirmeleri yapmalıyız
export class Ingredient {
    // public name: string;
    // public amount: number;

    constructor(public name: string,public amount: number) {
        // this.name = name;
        // this.amount = amount;
    }
}