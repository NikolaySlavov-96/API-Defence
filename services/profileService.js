const UserMode = require("../models/UserModel");
const { createNewDate } = require("../util/parser");


const getUserById = async (userId) => {
    const data = await UserMode.findById(userId);
    if (data.isDelete) {
        return {};
    }
    return data;
}

const editUserById = async (userId, data) => {
    const editUser = await UserMode.findById(userId);

    editUser.username = data.username;
    // editUser.password = data.password;
    editUser.year = data.year;
    editUser.lastUpdate = createNewDate();

    return await editUser.save();
}

const deleteUserById = async (userId) => {
    const userDelete = await UserMode.findById(userId);
    userDelete.lastUpdate = createNewDate();
    userDelete.isDelete = !userDelete.isDelete;
    return await userDelete.save();
}

module.exports = {
    getUserById,
    editUserById,
    deleteUserById,
}