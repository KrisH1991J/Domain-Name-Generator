let pronoun = ['the','our'];
let adj = ['great', 'big', 'small', 'super', 'fast', 'slow'];
let noun = ['jogger','racoon', 'skater', 'runner', 'snake'];
let domain = ['.com', '.net', '.us', '.io', '.gov'];

for(let firstPart of pronoun) {
    for(let secondPart of adj) {
        for(let thirdPart of noun) {
            for(let fourthPart of domain) {
                 console.log(firstPart + secondPart + thirdPart + fourthPart);
            }
        }
    }
}