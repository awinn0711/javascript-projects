//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;//string
        this.mass = mass;//number
        this.scores = scores;//array of numbers
    }
        addScore(newScore) {
            this.scores.push(newScore);
        };

        average() {
            let average = 0;
            let total = 0;
            for (let i = 0; i < this.scores.length; i ++) {
                total += this.scores[i];
            }
            average = Math.round(total/(this.scores.length)*10)/10;
            return average;
        };

        status() {
            let output = "";
            if (this.average() >= 90) {
                output = "Accepted";
            } else if (this.average() >= 80) {
                output = "Reserve";
            } else if (this.average() >= 70) {
                output = "Probationary";
            } else {
                output = "Rejected";
            }
            return output;
        };

}


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
let crewArray = [bubbaBear, merryMaltese, gladGator];

for (let i=0; i < crewArray.length; i++) {
    console.log(`${crewArray[i].name} earned an average test score of ${crewArray[i].average()}% and has a status of ${crewArray[i].status()}.'`)
};

while (gladGator.average() < 80) {
    let newScore = Math.floor(Math.random() * 21) + 80;
    gladGator.addScore(newScore);
    gladGator.average();
};
console.log(`It took Glad Gator ${(gladGator.scores.length)-3} additional tests to earn ${gladGator.status()} status.`);

while (gladGator.average() < 90) {
    let newScore = Math.floor(Math.random() * 11) + 90;
    gladGator.addScore(newScore);
    gladGator.average();
};
console.log(`It took Glad Gator ${(gladGator.scores.length)-3} additional tests to earn ${gladGator.status()} status.`);

//console.log(Math.floor(Math.random() * 100))


//console.log(merryMaltese.average());
// bubbaBear.addScore(83);
// console.log(bubbaBear.scores);
// console.log(bubbaBear);
// console.log(merryMaltese);
// console.log(gladGator);


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.