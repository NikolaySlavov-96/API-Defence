const Source = require("../models/SourceModel");

const getAll = () => {
    const query = { isDelete: false };
    return Source.find(query);
}

const getById = (idSource) => {
    return Source.findById(idSource).find({ isDelete: false });
}

const create = (dataSource) => {
    const data = new Date();

    return Source.create({
        articul: dataSource.articul,
        mark: dataSource.mark,
        model: dataSource.model,
        release: dataSource.release,
        description: dataSource.description,
        createAt: data,
        lastUpdate: data,
        owner: dataSource.owner,
    });
}

const updateById = async (idSource, dataSource) => {
    const oldData = await Source.findById(idSource);

    oldData.articul = dataSource.articul;
    oldData.mark = dataSource.mark;
    oldData.model = dataSource.model;
    oldData.release = dataSource.release;
    oldData.description = dataSource.description;
    oldData.lastUpdate = new Date();


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