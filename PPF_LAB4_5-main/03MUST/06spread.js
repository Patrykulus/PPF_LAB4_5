const languages = ['javascript', 'c++', 'python','java'];
const dsl = ['SQL', 'HTML', 'CSS','NoSQL'];

const allLanguages = [...languages,...dsl];

console.log(languages);
console.log(dsl);
console.log(allLanguages);

const courseDataForYear={
    name: 'Projektowanie i programowanie front-end',
    shortcut: 'PPFront',
    year: '2',
    time:{
        begin:2020,
        end:2022
    },
    content:{
        types:{
            lectures: true,
            laboratories: true,
            projects:true
        },
        hours:{
            lectures:15,
            laboratories: 15,
            projects:15
        }
    }
}

const periodOfTime= courseDataForYear.time;
console.log(periodOfTime);