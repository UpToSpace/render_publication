let {contacts} = require('../contacts.json');
const fs = require('fs');
const path = require('path');

function getAll() {
    return contacts;
}

function getOne(idContact) {
    return contacts.find(c => c.id === idContact);
}

function add(newParamContact) {
    const nextId = contacts[contacts.length - 1].id + 1;
    const newContact = {id: nextId, ...newParamContact}
    contacts.push(newContact);
    fs.writeFileSync(path.join(__dirname, '../contacts.json'), JSON.stringify({ contacts }, null, 2), 'utf-8');
    return newContact;
}

function update(idContact, updContact) {
    const contact = contacts.find(c => c.id === idContact);
    contact.fullName = updContact.fullName;
    contact.phoneNumber = updContact.phoneNumber;
    fs.writeFileSync(path.join(__dirname, '../contacts.json'), JSON.stringify({ contacts }, null, 2), 'utf-8');
    return contact;
}

function deleteOne(idContact) {
    contacts = contacts.filter(c => c.id !== idContact);
    fs.writeFileSync(path.join(__dirname, '../contacts.json'), JSON.stringify({ contacts }, null, 2), 'utf-8');
}

module.exports = {
    getAll,
    getOne,
    add,
    update,
    deleteOne
}