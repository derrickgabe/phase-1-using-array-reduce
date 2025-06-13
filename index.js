const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0);     
// The above line uses the reduce method to sum up all the elements in the batteryBatches array, starting from an initial value of 0.
// The result is stored in the totalBatteries variable, which will be 31 in this case.      
