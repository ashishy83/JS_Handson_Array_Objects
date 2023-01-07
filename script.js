//Q1------->
// let studentRecords = [{name: 'John', id: 123, marks : 98 }, {name: 'Baba', id: 101, marks : 23 }, {name: 'yaga', id: 200, marks : 45 }, {name: 'Wick', id: 115, marks : 75 } ];
//  let res=[];
//  for(let i=0;i< studentRecords.length;i++){
//    let obj=studentRecords[i];
//    res.push(obj.name.toUpperCase());
//  }
//  console.log(res);

//Q2----->
/*
let studentRecords = [
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } 
    ];
    let res=[];
    for(let i=0;i< studentRecords.length;i++){
        let obj=studentRecords[i];
        if(obj.marks>50){
            res.push(obj);
        }
    }
    console.log(res);
*/
//Q3------------>
/*
let studentRecords = [
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } 
    ];
    let res=[];
    for(let i=0;i< studentRecords.length;i++){
    let obj=studentRecords[i];
        if(obj.marks>50 && obj.id>120){
            res.push(obj);
        }
    }
    console.log(res);
    */

//Q4. ------->
/*
let studentRecords = [
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } 
];
let sum = 0;

studentRecords.forEach(element => {
  sum += element.marks;
});
console.log(sum);
*/

//Q5----------->
/*
let studentRecords = [
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } 
];
let res=[];
for(let i=0;i< studentRecords.length;i++){
  let obj=studentRecords[i];
  if(obj.marks>50){
      res.push(obj.name);
  }
}
console.log(res);
*/