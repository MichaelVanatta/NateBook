import rules from '~~/server/api/rules.json';

export async function selectRandomRule(): Promise<any>{
    var rule: any;
    switch(Math.floor(Math.random() * (6) + 1)){
        case 1:
            rule = rules.Rule1;
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
            break;
        case 6:
            rule = rules.Rule6;
            break;
    }
    return rule;
}