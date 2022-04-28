// Created by: Grace S
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates commute cost per month
 */
function calculate() {
 
  // gets user inputs from text fields and adds them into formulas
  let dailyCommute = parseFloat(document.getElementById('dailyCommute').value)
  let workingDays = parseFloat(document.getElementById('workingDays').value)
  let kilometresGallon = parseFloat(document.getElementById('kilometresGallon').value)
  let fuel = parseFloat(document.getElementById('fuel').value)
  let payment = parseFloat(document.getElementById('payment').value)
  let parking = parseFloat(document.getElementById('parking').value)
  
  // calculate the user inputs into formulas
  let distanceKilometres = (workingDays * dailyCommute)
  let gallonsFuel = (distanceKilometres / kilometresGallon)
  let moneyFuel = ((fuel * distanceKilometres) / kilometresGallon)
  let total = (payment + moneyFuel + parking)
  let yearTotal = 12*(payment + moneyFuel + parking)
  
  
  // display the after user input is entered into formulas
  document.getElementById('kilometreDistance').innerHTML = 'My Distance travelled per month is: ' + distanceKilometres.toFixed(2)  + ' km.'

  document.getElementById('gallonsOfFuel').innerHTML = 'Gallons of Fuel: ' + gallonsFuel.toFixed(2)  + ' gallons'

  document.getElementById('priceFuel').innerHTML = 'Spent on Fuel: $ ' + moneyFuel.toFixed(2)

  document.getElementById('total').innerHTML = 'My Cost of Commuting: $ ' + total.toFixed(2) + '/month'

  document.getElementById('yearlyTotal').innerHTML = '($ ' + yearTotal.toFixed(2) + '/year)'
  
}
