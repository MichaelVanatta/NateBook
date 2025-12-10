import rules from '~~/server/api/rules.json';

var currentLetter: string;
var characterLimit: number;

export async function selectRandomRule(): Promise<string>{
    var rule: any;
    switch(Math.floor(Math.random() * (5) + 1)){
        case 1:
            rule = rules.Rule1;
            var alphabet: string = "abcdefghijklmnopqrstuvwxyz";
            currentLetter = alphabet.charAt(Math.floor(Math.random() * (26)));
            rule = rule + currentLetter;
            break;
        case 2:
            rule = rules.Rule2;
            break;
        case 3:
            rule = rules.Rule3;
            break;
        case 4:
            rule = rules.Rule4;
            break;
        case 5:
            rule = rules.Rule5;
            characterLimit = Math.floor(Math.random() * (20) + 1);
            rule = rule + characterLimit;
            break;
    }
    return rule;
}

export async function enforceRule(text:string, rule:string): Promise<boolean>{
    if (rule === rules.Rule1 + currentLetter){
        return rule1(text);
    }
    else if (rule === rules.Rule2){
        return rule2(text);
    }
    else if (rule === rules.Rule3){
        return rule3(text);
    }
    else if (rule === rules.Rule4){
        return rule4(text);
    }
    else if (rule === rules.Rule5 + characterLimit){
        return rule5(text);
    }
    else {
        return false;
    }
}

function rule1(text:string): boolean{
    return text.includes(currentLetter);
}

function rule2(text:string): boolean{
    return text.includes(" ");
}

function rule3(text:string): boolean{
    return /A-Z/.test(text);
}

function rule4(text:string): boolean{
    return /a-z/.test(text);
}

function rule5(text:string): boolean{
    if (text.length > characterLimit){
        return true;
    } 
    else {
        return false
    }
}