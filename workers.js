const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];
const WorthyWorkers = [];

function getWorthyWorkers(workersArr) {
    for(i=0; i<workersArr.length; i++) {
        if (workersArr[i].salary>1000) {
            WorthyWorkers.push(workersArr[i].name)
        }
    }
    return WorthyWorkers

    
}

console.log(getWorthyWorkers(workers))