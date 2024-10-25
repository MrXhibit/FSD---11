// MRF (MAP, FILTER, REDUCE)
console.log("-----------MRF---------");
console.log("----------MAP----------");
let mrfARR = [ 1 , 2 , 3 , 4 , 5 , 6 ,7 ];

mrfARR.map((value, index, accARR) => {
    console.log(`
         value : ${value}
         index : ${index}
         actualARR : ${accARR}
        `);
});

let StudentsData = [
    { name : "student1", batch: "FSD-WE-11", marks: 90},
    { name : "student2", batch: "FSD-WE-12", marks: 24},
    { name : "student3", batch: "FSD-WE-13", marks: 50},
    { name : "student4", batch: "FDS-WE-14", marks: 74},
];

const result = StudentsData
.map((students) => {
    return students.marks + 10;
})
.filter((mark) => {
    return mark >= 50;
})
.reduce((acc, value, index) => {
    acc += value;
    return acc / (index + 1);
}, 0);

console.log(result);




StudentsData.filter((marks) => {
    console.log(marks);
    return marks > 50
});













console.log("-----------filter--------------")
let filterdARR = mrfARR.filter((value, index, accARR) => {
    console.log(`
         value : ${value}
         index : ${index}
         actualARR : ${accARR}
        `);
        return value % 2 == 0 ;
});
console.log(filterdARR);

let ACC = mrfARR.reduce((acc, val, index, accARR) => {
    acc += val;
    return acc;
}, 0);
console.log(ACC)