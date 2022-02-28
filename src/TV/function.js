const TV = require("./model");

exports.addTvShow = async (name, type, channel) => {
    try {
        await TV.create({name: name, type: type, channel: channel});
        return "Success";

    } catch (error) {
        console.log(error);
    }
}

exports.deleteTvShow = async (name, type, channel) => {
    try {
        await TV.deleteOne({name: name, type: type, channel: channel});
        return "Deleted Successfully";

    } catch (error) {
        console.log(error);
    }
}

exports.updateTvShow = async (name, type, channel) => {
    try {
        await TV.updateOne(
            { name: name },
            { $set: { type: type, channel: channel}}
        );
        return "Updated Successfully";
        
    } catch (error) {
        console.log(error);
    }
}

exports.findTvShow = async (name, type, channel) => {
    const filter = {}
    if (name) { filter.name = name }
    if (type) { filter.type = type }
    if (channel) { filter.channel = channel }

    const findTvShow = {}
    if (name) { findTvShow.name = name }
    if (type) { findTvShow.type = type }
    if (channel) { findTvShow.channel = channel }

    try {
        return await TV.findOne(
            { ...filter },
            { ...findTvShow }
        )
    } catch (error) {
        console.log(error, "I can't find anything")
    }
}

exports.listTvShow = async () => {
    try {
        return await TV.find({});
    } catch (error) {
        console.log(error);
    }
}