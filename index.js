// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
  const newArr = []
  newArr.push(arr[0])
  newArr.push(arr[1])
  return newArr
}

const returnLastTwoDrivers = function (arr) {
  const newArr = arr.slice()
  x = (newArr.slice(arr.length - 2))
  return x
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num) {
  return function (fare) {
    return fare * num
  }
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare)
}

const fetchSpecifiedDrivers = function(arr, fun) {
  return fun(arr)
}
