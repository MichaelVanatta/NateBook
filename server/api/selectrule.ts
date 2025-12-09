import rules from '~~/server/api/rules.json';

export async function selectRandomRule(): Promise<any>{
    var rule: any;
    switch(Math.floor(Math.random() * (6) + 1)){
        case 1:
            rule = rules.Rule1.Commandment;
            break;
        case 2:
            rule = rules.Rule2.Commandment;
            break;
        case 3:
            rule = rules.Rule3.Commandment;
            break;
        case 4:
            rule = rules.Rule4.Commandment;
            break;
        case 5:
            rule = rules.Rule5.Commandment;
            break;
        case 6:
            rule = rules.Rule6.Commandment;
            break;
    }
    return rule;
}

function selectChar(): string{
    var alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    var randNum: number = Math.floor(Math.random() * (26));
    return alphabet.charAt(randNum);
}