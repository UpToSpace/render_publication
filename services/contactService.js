const contactRepository = require('../repositories/contactRepository')

function getAll() {
    return contactRepository.getAll();
}

function getOne(idContact) {
    return contactRepository.getOne(idContact);
}

function add(newParamContact) {
    return contactRepository.add(newParamContact);
}

function update(idContact, updContact) {
    return contactRepository.update(idContact, updContact);
}

function deleteOne(idContact) {
    return contactRepository.deleteOne(idContact);
}

module.exports = {
    getAll,
    getOne,
    add,
    update,
    deleteOne
};