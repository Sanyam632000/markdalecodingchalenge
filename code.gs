function myFunction(){
  //Get Google Sheet Using URL (Change the url to the url of google sheet which you want to use)
var sheetUrl = "https://docs.google.com/spreadsheets/d/1BdMKOsE_d9H3U2dlTBXhS8reiwuiomnPYloSCBWdq2w/edit#gid=0";
var sheet = SpreadsheetApp.openByUrl(sheetUrl);
var range = sheet.getDataRange();
let timehorizon = 0
let risktolerance = 0

//Text-Value to Numeric-Value Mapping for risk-tolerance
var riskTolerance = {
    "low": 1,
    "medium": 2,
    "high": 3
  };
  
  //Text-Value to Numeric-Value Mapping for time-horizon
  var timeHorizon = {
    "short-term":1,
    "long-term":2
  };

 
//Loop through each cell in google sheet
  
  for(var j=1;j<=range.getNumColumns();j++){
    var cell = range.getCell(1,j)
    var currentCellValue = cell.getValue();
  
    if(currentCellValue == "Time Horizon"){
      timehorizon = j
    }
    else if(currentCellValue == "Risk Tolerance"){
      risktolerance = j
    }
  }


//Converting text value to numeric value for time horizon column
  for(var i=2; i<=range.getNumRows(); i++){
    var timeHorizoncell = range.getCell(i,timehorizon)
    var currentCell = timeHorizoncell.getValue();
  
    if(currentCell in timeHorizon){
       var numericValueForTimeHorizon = timeHorizon[currentCell];
       timeHorizoncell.setValue(numericValueForTimeHorizon)
      }
  }


//Converting text value to numeric value for risk tolerance column
   for(var k=2; k<=range.getNumRows(); k++){
    var riskTolerancecell = range.getCell(k,risktolerance)
    var currentRiskToleranceCell = riskTolerancecell.getValue();
   
    if(currentRiskToleranceCell in riskTolerance){     
       var numericValueForRiskTolerance = riskTolerance[currentRiskToleranceCell];
       riskTolerancecell.setValue(numericValueForRiskTolerance)
      }
  }
    
  

 
//This is second option to convert text value to numeric value using nested for loop

   /*for (var i = 1; i <= range.getNumRows(); i++) {
    for (var j = 1; j <= range.getNumColumns(); j++) {

      var cell = range.getCell(i, j);
      var currentCellValue = cell.getValue();

        // Check if the cell value is in the risk-tolerance table
      if (currentCellValue in riskTolerance) {
          // If cell value is in risk-tolerance table then convert the string to number based on risk-tolerance table
        var numericValueForRiskTolerance = riskTolerance[currentCellValue];

          // Set the cell value to the numeric value
        cell.setValue(numericValueForRiskTolerance);
      }
        //Check if the cell value is in the time-horizon table
      else if(currentCellValue in timeHorizon){
        var numericValueForTimeHorizon = timeHorizon[currentCellValue];
        cell.setValue(numericValueForTimeHorizon)
      }


    }
  } */

}