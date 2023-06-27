function errorParser(err) {
    if (err.name === 'ValidationError') {
        return Object.values(err.errors).map(v => v.message).join('\n');
    } else if (Array.isArray(err)) {
        return err.map(e => e.msg).join('\n');
    } else {
        return err.message;
    }
}

function createNewDate() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return date;
}

module.exports = {
    errorParser,
    createNewDate
}