const Movie = require("./model");

exports.addMovie = async (title, actor, director, language) => {
    try {
        const movieObj = {title: title, actor: actor, director: director, language: language};
        await Movie.create(movieObj);
        return "Success";
        // //below is the dry method
        // await Movie.create({title: title, actor: actor});
        // return "Success";

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

exports.list = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);
    }
}