const express = require('express');
const router = express.Router();
const {getAllUsers,createUsers,updateUsers,getUsersById,deleteUser}= require('../Services/userServices');



router.route('/').get(getAllUsers); 

router.route('/').post(createUsers);

router.route('/:id').get(getUsersById);
router.route('/:id').put(updateUsers);

router.route('/:id').delete(deleteUser);

module.exports = router;
