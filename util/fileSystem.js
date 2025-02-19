const fs =require('fs');
const path = require('path');

const readFile=(pathFile) =>{
    return fs.readFileSync(pathFile,'utf-8')
} ;
const writeFile=(pathFile) =>{
    return fs.writeFileSync(pathFile,'utf-8')
};

const parseFile = (json) => {
    return JSON.parse(json); 
};

const stringifiFile = (objeto) => {
    return  json.stringifiFile(objeto)
};

const saveJson = (file = "", array = []) => {
    fs.writeFileSync(path.join(__dirname,file),JSON.stringify(array,null,2),'utf-8')
    return null
}
const readJson = (file = "") => {
    return JSON.parse(fs.readFileSync(path.join(__dirname,file),'utf-8'))
}



module.exports = {
    readFile,
    writeFile,
    parseFile,
    stringifiFile,
    saveJson,
    readJson
}