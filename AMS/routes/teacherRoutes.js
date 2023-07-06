
const express = require('express');
const { updateTeacher, saveUpdateTeacher, saveUpdatedTeacher, createTeacher, loginForm, logout, login, dashboard, createNewTeacher, allTeachers } = require('../controllers/teachers.controller');
const app = express();
const router = express.Router();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


router.get('/add', createTeacher);
router.post('/add', createNewTeacher);

router.get('/login', loginForm);
router.post('/login', login);

router.get('/logout', logout);
router.get('/dashboard', dashboard);
router.get('/', allTeachers);
router.get('/:id/update', updateTeacher);
router.post('/:id/update', saveUpdatedTeacher);
module.exports = router;
