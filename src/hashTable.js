class TimeTable {
  set = (key, value) => {};
  getItem = (key) => {
    return "";
  };
}

const timeTable = new Map();
// First do Seconds to ...
timeTable.set(JSON.stringify(["seconds", "minutes"]), 1 / 60);
timeTable.set(JSON.stringify(["seconds", "hours"]), 1 / 3600);
timeTable.set(JSON.stringify(["seconds", "days"]), 1 / 86400);
timeTable.set(JSON.stringify(["seconds", "weeks"]), 1 / 604800);
timeTable.set(JSON.stringify(["seconds", "months"]), 1 / 2.628e6);
timeTable.set(JSON.stringify(["seconds", "months"]), 1 / 2.628e6);
console.log(timeTable);
