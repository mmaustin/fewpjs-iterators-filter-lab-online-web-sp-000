//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(array, string){
  let d = [];
  array.filter(driver => {
    if(driver === string || driver === string.toLowerCase()){
      d.push(driver);
    }
  })
  return d;
}
findMatching(drivers, "Bobby")

function fuzzyMatch(array, string){
    let e = [];
    array.filter(driver => {
      if(driver.startsWith(string) === true){
      e.push(driver);
      }
    })
    return e;
  }
  fuzzyMatch(drivers, "Sa");

  function matchName(array, string){
    let b = [];
    array.filter(driver => {
      if(driver.name === string){
        b.push(driver);
      }
    })
    return b;
  }
  matchName(drivers, "Bobby");