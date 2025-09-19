// Code your solution in this file
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction(drivers);
}

console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
