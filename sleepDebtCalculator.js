const getSleepHours = day => {
   if (day === 'monday') {
    return 8;
   } else if (day === 'tuesday') {
    return 7;
   } else if (day === 'wednesday') {
    return 8;
   } else if (day === 'thursday') {
    return 8;
    } else if (day ==='friday') {
    return 8; 
    } else if (day ==='saturday') {
    return 9;
    } else if (day ==='sunday') {
    return 10; 
    }
     };
     console.log(getSleepHours('friday')); // should print the # hours assigned to friday
const getActualSleepHours = () =>  
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 
//sum of all sleep hours 
const getIdealSleepHours = idealHours => idealHours * 7 ;
//ideal hours multiplied by 7
console.log (getActualSleepHours());
console.log (getIdealSleepHours());
//prints both all sleep hours and ideal weekly 
const calculateSleepDebt = () => {
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
  console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week.');
  //should print how many hours we overslept 
} else if (actualSleepHours > idealSleepHours) {
  console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week.');
  //should print how many hours we overslept
} else if (actualSleepHours < idealSleepHours) {
console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
// should print how many more hours we needed
} else {
  return 'you are sleeping like a bear';
}
};
calculateSleepDebt(); 
//shoud print sleep debt