const Movie = require("./model");

exports.addMovie = async (title, actor, director, language) => {
    try {
        // const movieObj = {title: title, actor: actor, director: director, language: language};
        // await Movie.create(movieObj);
        // return "Success";
        //below is the dry method
        await Movie.create({title: title, actor: actor, director: director, language: language});
        return "Success";

    } catch (error) {
        console.log(error);
    }
}

exports.deleteMovie = async (title, actor, director, language) => {
    try {
        await Movie.deleteOne({title: title, actor: actor, director: director, language: language});
        return "Deleted Successfully";

    } catch (error) {
        console.log(error);
    }
}

exports.updateMovie = async (title, actor, director, language) => {
    try {
        await Movie.updateOne(
            {title: title},
            { $set: { actor: actor, director: director, language: language}}
        );
        return "Updated Successfully";
        
    } catch (error) {
        console.log(error);
    }
}

exports.findMovie = async (title, actor, director, language) => {
    const filter = {}
    if (title) { filter.title = title }
    if (actor) { filter.actor = actor }
    if (director) { filter.director = director }
    if (language) { filter.language = language }

    const findMovie = {}
    if (title) { findMovie.title = title }
    if (actor) { findMovie.actor = actor }
    if (director) { findMovie.director = director }
    if (language) { findMovie.language = language }

    try {
        return await Movie.findOne(
            { ...filter },
            { ...findMovie }
        )
    } catch (error) {
        console.log(error, "I can't find anything")
    }
}

exports.listMovie = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);
    }
}