require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, deleteMovie, updateMovie, list } = require("./movie/function");

const app = async (yargsObj) => {
    try {
       if (yargsObj.add) {
            console.log(await addMovie(yargsObj.title, yargsObj.actor, yargsObj.director, yargsObj.language));
        }
        else if (yargsObj.delete) {
            console.log(await deleteMovie(yargsObj.title, yargsObj.actor, yargsObj.director, yargsObj.language));
        } 
        else if (yargsObj.update) {
            console.log(await updateMovie(yargsObj.title, yargsObj.actor, yargsObj.director, yargsObj.language));
        } 
        
        else if (yargsObj.list) {
            console.log(await list());
        
        } 
        else {
           console.log("incorrect command");
        }

    await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);