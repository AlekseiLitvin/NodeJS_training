const parser = require("csvtojson");
const fs = require("fs");

const filePath = "./csv/task2.csv"
const resultFilePath = "./csv/task2_result.txt";

//version 1
parser()
    .fromFile(filePath)
    .on('data', (data) => {
        fs.appendFile(resultFilePath, data.toString(), err => {
            if (err) console.error("Error during file writing");
        })
    })
    .on('error', err => {
        console.error("Error during file read \n" + err)
    })
    .then(r => {
        console.log("Complete")
    })


//version 2, using streams
const readStream = fs.createReadStream(filePath);
const resultFilePathStream = "./csv/task2_result_stream.txt";

parser()
    .fromStream(readStream)
    .on("data", data => {
        fs.appendFile(resultFilePathStream, data.toString(), err => {
            if (err) console.error("Error during file writing");
        })
    })
    .then(r => {
        console.log("V2 Complete")
    })

