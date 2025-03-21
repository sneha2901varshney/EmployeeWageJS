//UC1
const IS_ABSENT = 0

let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck == IS_ABSENT) {

console.log("Employee is Absent");

return;

} else {

console.log("Employee is PRESENT");

}


// UC2
const IS_PART_TIME = 1; IS_PART_TIME = 1

const IS_FULL_TIME = 2;IS_FULL_TIME = 2

const PART_TIME_HOURS = 4; PART_TIME_HOURS = 4

const FULL_TIME_HOURS = 8;FULL_TIME_HOURS = 8

const WAGE_PER_HOUR = 20; WAGE_PER_HOUR = 20

let empHrs = 0; empHrs = 4

empCheck= Math.floor(Math.random() *10) % 3; empCheck = 1

switch (empCheck) {

case IS_PART_TIME: IS_PART_TIME = 1

empHrs = PART_TIME_HOURS; empHrs = 4, PART_TIME_HOURS = 4

break;

case IS_FULL_TIME: IS_FULL_TIME = 2

empHrs = FULL_TIME_HOURS; break; empHrs = 4, FULL_TIME_HOURS = 8

default:

empHrs = 0; empHrs = 4

}
let empwage = empHrs * WAGE_PER_HOUR; empWage = 80, empHrs = 4, WAGE_PER_HOUR = 20

console.log("Emp Wage: " + empWage);


//UC3
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME :
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let empHrs = 0;
let empCheck = Math.floor(Math.random()*10) % 3 ;
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR ;
console.log("Emp Wage:" + empWage) ;

//UC4
const NUM_OF_WORKING_DAYS = 2;

let empHrs = 0;

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {

let empCheck = Math.floor(Math.random() * 10) % 3; 
empHrs += getWorkingHours(empCheck);

}

let empWage = empHrs * WAGE_PER_HOUR;

console.log("Total Hrs: +empHrs+ " Emp Wage: 11 + empWage);


// UC 5

const MAX_HRS_IN_MONTH = 100;

const NUM_OF_WORKING_DAYS = 10;

let totalEmpHrs = 0;

let totalWorkingDays = 0;

while (totalEmpHrs << MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {

totalWorkingDays++;

let empCheck= Math.floor(Math.random() * 10) % 3;

totalEmpHrs += getWorkingHours(empCheck);

}

let empwage = totalEmpHrs * WAGE_PER_HOUR;

console.log("UC5 Total Days: " + totalworkingDays + "Total Hrs: " + totalEmpHrs + "Emp Wage: " + empwage);


//UC6-Store the Daily Wage along with the Total Wage. (Save in an Array the Daily Wage)
function calcDailywage(empHrs) { 
    return empHrs * WAGE_PER_HOUR;
 }
const MAX_HRS_IN_MONTH = 160; 

const NUM_OF_WORKING_DAYS = 20;

let totalEmpHrs = 0; 

let totalWorkingDays = 0;

let empDailyWageArr = new Array();

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalworkingDays < NUM_OF_WORKING_DAYS) {

totalWorkingDays++;

let empCheck= Math.floor(Math.random() * 18) % 3;

let empHrs = getWorkingHours (empCheck);

totalEmpHrs += empHrs;

empDailywageArr.push(calcDailywage(empHrs));
}

let empWage = calcDailyWage(totalEmphrs); 
console.log("UC6 - Total Days:" + totalworkingDays +
 "Total Hrs:"+ totalEmpHrs+ "Emp Wage:"+ empwage);


 // Array Helper Functions
 // UC 7A-Calc total Wage using Array forEach traversal or reduce method

let totEmplWage = 8; 
function sum(dailyWage) {

totExpWage +=dailyWage;

} 
empDailyWageArr.forEach(sum); 
console.log("UC7A Total Days: "+totalWorkingDays + "Total Hrs:" + totalEmpHrs + "Emp Wage: "+ totEmpWage);

function totalWages (totalWage, dailyWage) 
{ 
    return totalWage + dailyWage;
} 
console.log("UC7A Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

// UC 7B Show the Day along with Daily Wage using Array map helper function

let dailyCntr = 0;

function mapDayWithWage(dailyWage) 
{  
    dailyCntr++ ;
  return dailyCntr + " = " + dailyWage; I
}

let mapDayWithWageArr = empDailywageArr.map(mapDayWithWage);
 console.log("UC7B Daily Wage Map"); 
 console.log(mapDayWithWageArr);

// UC 7C Show Days when Full time wage of 160 were earned

function fulltimeWage(dailyWage) 
{ 
    return dailyWage.includes("160");
} 
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);


// UC 7D Find the first occurrence when Full Time Wage was earned using find function function findFulltimeWage(dailywage) { return dailywage.includes ("160");
function findFulltimeWage(dailyWage)
{
return dailyWage.includes("160");
}
 console.log("UC 7D First time Fulltime wage was earned on Day: "+ mapDayWithWageArr.find(findFulltimeWage));


// UC 7E Check if Every Element of Full Time Wage is truely holding Full time wage function isAllFulltimewage (dailywage) { return dailywage.includes("160");
function isAllFulltimeWage(dailyWage)
{
return dailyWage.includes("160");
}
console.log("UC 7E Check All Element have Full Time Wage: "+ fullDayWageArr.every(isAllFulltimeWage));


// UC 7F Check if there is any Part Time Wage function isAnyPartTimeWage(dailywage) { return dailywage. includes ("80");
function isAnyPartTimeWage(dailyWage)
{
return dailyWage.includes("80");
}

console.log("UC 7F Check If Any Part Time Wage: "+ mapDayWithWageArr.some (isAnyPartTimeWage));

// UC 7G Find the number of days the Employee Worked function totalDaysWorked (numOfDays, dailywage) { if (dailywage > 0) return numOfDays+1; return numOfDays;
function totalDaysWorked(numOfDays, dailyWage)
{
    if (dailyWage>0 )
        return numOfDays+1;
}

console.log("UC 7G- Number of Days Emp Worked: "+ empDailyWageArr.reduce(totalDaysWorked, 0));


//UC-8 storing the day and daily wage along with the total wage in map

dailyWages = new Array();
let empDailyWageMap = new Map();

totalEmpHrs = 0;
numberOfTotalDays = 0;

while(totalEmpHrs <= maxWorkingHrs && numberOfTotalDays < maxWorkingDays){
    
    empCheck = Math.floor(Math.random()*10)%3;
    empHrs = getWorkingHours(empCheck);

    totalEmpHrs += empHrs;

    dailyWages.push(getWage(empHrs));

    numberOfTotalDays++;

    empDailyWageMap.set(numberOfTotalDays, getWage(empHrs));

}

console.log(empDailyWageMap);

console.log("Emp wage map total wage : "+Array.from(empDailyWageMap.values()).reduce((totalWage, wage)=> totalWage+wage, 0));


//UC-9 Arrow Functions

//creating a daily hrs map
let empDailyHrsMap = new Map();

numberOfTotalDays = 0;
totalEmpHrs = 0;

while(totalEmpHrs <= maxWorkingHrs && numberOfTotalDays < maxWorkingDays){
    
    empCheck = Math.floor(Math.random()*10)%3;
    empHrs = getWorkingHours(empCheck);

    totalEmpHrs += empHrs;
    numberOfTotalDays++;

    empDailyHrsMap.set(numberOfTotalDays, empHrs);
}



const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = Array.from(empDailyWageMap.values()).reduce(findTotal, 0);

console.log("Total working hours are : "+totalHours);
console.log("Total wage of employee is : "+totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

nonWorkingDays = empDailyHrsMap.forEach((value, key)=>{
    if(value == 0)
        nonWorkingDays.push(key);
    if(value == 4)
        partWorkingDays.push(key);
    else
        fullWorkingDays.push(key);
})

console.log("Full working days are : "+fullWorkingDays);
console.log("Part working days are : "+partWorkingDays);
console.log("No working days are : "+nonWorkingDays);


//UC-10 Storing Object of day, hours and wage inside an array

totalEmpHrs = 0;
numberOfTotalDays = 0;
let empDailyHrsAndWageArr = new Array();

while(totalEmpHrs <= maxWorkingHrs && numberOfTotalDays < maxWorkingDays){
    
    empCheck = Math.floor(Math.random()*10)%3;
    empHrs = getWorkingHours(empCheck);

    totalEmpHrs += empHrs;
    numberOfTotalDays++;

    empDailyHrsAndWageArr.push({
        dayNum : numberOfTotalDays,
        dailyHours : empHrs,
        dailyWage : getWage(empHrs),
        toString(){
            return '\nDay'+this.dayNum+" => Working Hours is "+this.dailyHours+" And Wage Earned = "+this.dailyWage
        }
    });

   
}

console.log("Daily hours worked and wage earned : "+empDailyHrsAndWageArr);


//UC-11 Applying Object operations using Arrow Functions

totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
totalSalary = Array.from(empDailyWageMap.values()).reduce(findTotal, 0);

console.log("Total working hours are : "+totalHours);
console.log("Total wage of employee is : "+totalSalary);

fullWorkingDays = [];
empDailyHrsMap.forEach((value, key)=>{
    if(value == 8)
        fullWorkingDays.push(key);
});

partWorkingDays = [];
empDailyHrsAndWageArr.forEach((obj)=>{
    if(obj.dailyHours == 4)
        partWorkingDays.push(obj.toString());
});

nonWorkingDays = [];

empDailyHrsMap.forEach((value, key)=>{
    if(value == 0)
        nonWorkingDays.push(key);
})

console.log("Full time working days are : "+fullWorkingDays);
console.log("Part time working days are : "+partWorkingDays);
console.log("No time working days are : "+nonWorkingDays);