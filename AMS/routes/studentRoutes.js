const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const Student = require('../models/Student.model');
const Student1 = require('../models/Student1.model');
const { getRegistrationPage, postRegistrationData, saveEnrollData, editStudent, updateStudent, getAllStudents, getLoginForm, loginStudent, logoutStudent, getDashboard } = require('../controllers/students.controller');
const { dashboard } = require('../controllers/teachers.controller');
const app = express();
const router = express.Router();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// router.get('/all', function (req, res) {
//     getStudents();
//     async function getStudents() {
//         try {
//             res.json(await Student.find());
//         } catch (error) {
//             console.log(error);
//         }
//     }
// })

// router.get('/login', function (req, res) {
//     res.render('student/student-login-form', {
//         page: ""
//     });
// })

// router.post('/login', async function (req, res) {
//     try {
//         let { email, pswd } = req.body;
//         const student = await Student1.find({ email: email, password: pswd });
//         console.log(student[0]._id);
//         if (student.length != 0) {
//             req.session.student_email = email;
//             req.session.student_id = student[0]._id;
//             res.redirect('/student/dashboard');
//         }
//         else
//             res.send("Email and password are not matched or You are not a Student!");
//     } catch (error) {
//         console.log(error)
//     }
// })

// router.get('/logout', (req, res) => {
//     req.session.destroy((err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.redirect('/student/login');
//         }
//     });
// });

// router.get('/dashboard', function (req, res) {
//     if (!req.session.student_email) {
//         res.redirect('/student/login');
//     }
//     else {
//         res.render('student/student-index', {
//             student_email: req.session.student_email,
//             page: "",
//             student_id: req.session.student_id,
//             pageTitle: 'Dashboard Page',
//             layout: './layouts/student'
//         });
//     }
// })

router.get('/all', getAllStudents);
router.get('/login', getLoginForm);
router.post('/login', loginStudent);
router.get('/logout', logoutStudent);
router.get('/dashboard', getDashboard);

router.get('/registration', getRegistrationPage)
router.post('/register', postRegistrationData)
router.get('/enroll', saveEnrollData)
router.get('/:id/edit', editStudent)
router.post('/:id/update', updateStudent)


module.exports = router;