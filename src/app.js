require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, deleteMovie, updateMovie, findMovie, listMovie } = require("./movie/function"); //linking the movies functons
const { addTvShow, deleteTvShow, updateTvShow, findTvShow, listTvShow } = require("./TV/function"); //linking the tv functions

const app = async (yargsObj) => {
    try {
        //CRUD operations for movies
       if (yargsObj.addMo) {
            console.log(await addMovie(yargsObj.title, yargsObj.actor, yargsObj.director, yargsObj.language));
        }
        else if (yargsObj.deleteMo) {
            console.log(await deleteMovie(yargsObj.title, yargsObj.actor, yargsObj.director, yargsObj.language));
        } 
        else if (yargsObj.updateMo) {
            console.log(await updateMovie(yargsObj.title, yargsObj.actor, yargsObj.director, yargsObj.language));
        } 
        else if (yargsObj.findMo) {
            console.log(await findMovie(yargsObj.title, yargsObj.actor, yargsObj.director, yargsObj.language));
        }   
        else if (yargsObj.listMo) {
            console.log(await listMovie());
        }

        //CRUD operations for Tv show
        else if (yargsObj.addTv) {
            console.log(await addTvShow(yargsObj.name, yargsObj.type, yargsObj.channel));
        }
        else if (yargsObj.deleteTv) {
            console.log(await deleteTvShow(yargsObj.name, yargsObj.type, yargsObj.channel));

        } 
        else if (yargsObj.updateTv) {
            console.log(await updateTvShow(yargsObj.name, yargsObj.type, yargsObj.channel));

        } 
        else if (yargsObj.findTv) {
            console.log(await findTvShow(yargsObj.name, yargsObj.type, yargsObj.channel));
        }   
        else if (yargsObj.listTv) {
            console.log(await listTvShow());
        
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