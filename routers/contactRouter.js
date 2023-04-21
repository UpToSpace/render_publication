const {Router} = require('express');
const contactController = require('../controllers/contactController');

const router = Router();

router.get('/', contactController.getAll);
router.get('/add', contactController.getFormAdd)
router.post('/add', contactController.add)
router.get('/update/:idContact', contactController.getFormUpdate)
router.put('/update/:idContact', contactController.update)
router.delete('/delete/:idContact', contactController.deleteOne);

module.exports = router;