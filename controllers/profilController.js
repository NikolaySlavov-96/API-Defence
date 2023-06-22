const { getUserById, editUserById, deleteUserById } = require("../services/profileService")


const getUser = async (req, res) => {
    const userDate = await getUserById(req.user._id);
    res.json(userDate);
}

const updateUser = async (req, res) => {
    const updateUser = await editUserById(req.user._id, req.body);
    res.json(updateUser);
}

const deleteUser = async (req, res) => {
    await deleteUserById(req.user.id);
    res.status(204).end();
}

module.exports = {
    getUser,
    updateUser,
    deleteUser,
}