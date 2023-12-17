const { getCommentsByUserId } = require("../services/commentService");
const { getUserById, editUserById, deleteUserById } = require("../services/profileService")
const { getByUserId } = require("../services/sourceService");


const getUser = async (req, res) => {
    const { _id, username, email, year } = await getUserById(req.user._id);
    res.json({ _id, username, email, year });
}

const updateUser = async (req, res) => {
    const { _id, username, email, year, isDelete } = await editUserById(req.user._id, req.body);
    res.json({ _id, username, email, year, isDelete });
}

const deleteUser = async (req, res) => {
    await deleteUserById(req.user._id);
    res.status(204).end();
}

const allUserProduct = async (req, res) => {
    try {
        const all = await getByUserId(req.user._id);

        res.status(200).json(all);
    } catch (err) {
        res.status(400).json(err)
    }
}

const allCommentsInUser = async (req, res) => {
    try {
        const all = await getCommentsByUserId(req.user._id);
        res.status(200).json(all);
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports = {
    getUser,
    updateUser,
    deleteUser,
    allUserProduct,
    allCommentsInUser,
}