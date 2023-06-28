const { query } = require("express");
const Source = require("../models/SourceModel");

const getFindValue = async (req, res) => {
    const findData = req.query.where.split('=');
    const nameFild = findData[0].toString();
    const valueFilt = findData[1];
    const query = {}
    query[nameFild] = valueFilt;

    const searchResult = await Source.find(query);

    res.json(searchResult);
}

module.exports = {
    getFindValue,

}