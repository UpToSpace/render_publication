const {StatusCodes} = require('http-status-codes');
const contactService = require('../services/contactService');

function getAll(req, res) {
    const contacts = contactService.getAll();

    res.render('contacts',
        {
            contacts,
            enabledContacts: true
        });
}

function getFormAdd(req, res) {
    const contacts = contactService.getAll();

    res.render('add',
        {
            contacts,
            enabledContacts: false
        }
    );
}

function add(req, res) {
    const newParamContact = req.body;

    const newContact = contactService.add(newParamContact);
    res.status(StatusCodes.OK).json(newContact);
}

function getFormUpdate(req, res) {
    const {idContact} = req.params;
    const contact = contactService.getOne(+idContact);
    const contacts = contactService.getAll();

    res.render('update',
        {
            contact,
            contacts,
            enabledContacts: false
        }
    );
}

function update(req, res) {
    const {idContact} = req.params;
    const updParamContact = req.body;

    const updContact = contactService.update(+idContact, updParamContact);
    res.status(StatusCodes.OK).json(updContact);
}

function deleteOne(req, res) {
    const {idContact} = req.params;

    contactService.deleteOne(+idContact);
    res.status(StatusCodes.NO_CONTENT).json();
}

module.exports = {
    getAll,
    getFormAdd, add,
    getFormUpdate, update,
    deleteOne
};