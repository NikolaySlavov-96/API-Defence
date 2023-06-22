const Source = require("../models/SourceModel");

const getAll = () => {
    const query = { isDelete: false };
    return Source.find(query);
}

const getById = (idSource) => {
    // adding and quesry isDelete
    return Source.findById(idSource);
}

const create = (dataSource) => {
    // To Do adding fields
    const { articul } = dataSource;
    return Source.create({ articul });
}

const updateById = async (idSource, dataSource) => {
    // const oldData = await Source.findById(idSource);
    const oldData = idSource; //check result
    // To Do other opetaration 
    oldData.name = dataSource.name;

    return await oldData.save();
}

const deleteById = async (idSource) => {
    const oldData = await Source.findById(idSource);

    oldData.isDelete = !oldData.isDelete;

    return oldData.save();
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}