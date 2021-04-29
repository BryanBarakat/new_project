function generateRandomNumber(num){
    return Math.floor(Math.random() * num);        // generates random number
};

const sheet = {
    team: ['BFA','ahed','ansar','nejmeh','sagesse','salem zgharta'],
    player: ['Teebene','Badi3','lehi naha','Bryan','Farid','Floki'],   // objects containing words to be put randomly in the citings later
    number: [11,22,5,6,7,69]
};

const finalWords = [];  // final array

for(word in sheet){
    let rnd = generateRandomNumber(sheet[word].length);   // random object chosen from sheet

switch(word){
    case 'team':
        finalWords.push(`Espn sports selects you to play with ${sheet[word][rnd]}.`);
        break;
    case 'player':
        finalWords.push(`You , ${sheet[word][rnd]} are selected as mvp.`);      // implement the words from sheet in the following citings
        break;
    case 'number':
        finalWords.push(`The coach and manager decided to give you the number ${sheet[word][rnd]}.`);
        break;
    }
};

function format(){
    let finalFormat = finalWords.join('\n');     // add a newline between each element in array
    console.log(finalFormat);
};

format();  // call your function