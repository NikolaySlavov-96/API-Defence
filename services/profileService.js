const UserMode = require("../models/UserModel");


const getUserById = async (userId) => {
    return await UserMode.findById(userId);
}

const editUserById = async (userId, data) => {
    const editUser = await UserMode.findById(userId);
    
    editUser.username = data.username;
    editUser.password = data.password;
    editUser.year = data.year;

    return await editUser.save();
}

const deleteUserById = async (userId) => {
    const userDelete = await UserMode.findById(userId);
    userDelete.isDelete = !userDelete.isDelete;
    return await userDelete.save();
}

module.exports = {
    getUserById,
    editUserById,
    deleteUserById,
}