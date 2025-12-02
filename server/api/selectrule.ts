import rules from '~~/server/api/rules.json';

export function selectRandomRule(): any{
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

// function getRandomInt(min: number, max: number): number {
//   min = Math.ceil(min); // Ensure min is an integer
//   max = Math.floor(max); // Ensure max is an integer
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const randomInteger: number = getRandomInt(1, 10); // Generates a random integer between 1 and 10
// console.log(randomInteger); // e.g., 5