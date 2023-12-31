const Source = require("../models/SourceModel");
const UserMode = require("../models/UserModel");
const { createNewDate } = require("../util/parser");

const getAll = (query, limit, skipSource) => {
    return Source.find(query).limit(limit).skip(skipSource).populate('owner');
}

const getById = (idSource) => {
    return Source.findById(idSource).find({ isDelete: false });
}

const getByUserId = (owner) => {
    return Source.find({ owner, isDelete: false })
}

const create = async (dataSource) => {

    const { _id, articul, img, mark, model, release, description, owner, isDelete, createAt, lastUpdate } = await Source.create({
        articul: dataSource.articul,
        img: dataSource.img,
        mark: dataSource.mark,
        model: dataSource.model,
        release: dataSource.release,
        description: dataSource.description,
        createAt: createNewDate(),
        lastUpdate: createNewDate(),
        owner: dataSource.owner,
    });

    const ownerDate = await UserMode.findById({ _id: owner })

    return { _id, articul, img, mark, model, release, description, owner: ownerDate, isDelete, createAt, lastUpdate }
}

const updateById = async (idSource, dataSource) => {
    const oldData = await Source.findById(idSource);

    oldData.articul = dataSource.articul;
    oldData.img = dataSource.img;
    oldData.mark = dataSource.mark;
    oldData.model = dataSource.model;
    oldData.release = dataSource.release;
    oldData.description = dataSource.description;
    oldData.lastUpdate = createNewDate();

    const { _id, articul, img, mark, model, release, description, owner, isDelete } = await oldData.save();
    const ownerDate = await UserMode.findById({ _id: owner })

    return { _id, articul, img, mark, model, release, description, owner: ownerDate, isDelete }

}

const deleteById = async (idSource) => {
    const oldData = await Source.findById(idSource);

    oldData.lastUpdate = createNewDate();
    oldData.isDelete = !oldData.isDelete;

    return oldData.save();
}

module.exports = {
    getAll,
    getById,
    getByUserId,
    create,
    updateById,
    deleteById
}