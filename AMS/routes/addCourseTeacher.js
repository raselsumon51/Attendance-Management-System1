const express = require('express');
const app = express();
const router = express.Router();

const User = require('../models/user');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// router.get('/', function (req, res) {
//     res.render('dashboard/admin', {
//         page: "addCourseTeacher"
//     });
// })

// router.get('/', function (req, res) {
//     res.render('dashboard/admin', {
//         page: "addCourseTeacher"
//     });
// })

//  / courses / teachers


// router.post('/create', function (req, res) {
//     ///res.send("Create teacher");
//     const { teacher_email, teacher_pass } = req.body;
//     let teacher;
//     createTeacher();

//     async function createTeacher() {
//         try {
//             teacher = new User({ role: "teacher", email: teacher_email, password: teacher_pass });
//             await teacher.save();
//             // courses = await Course.find();
//             res.send("Teacher created");
//             console.log(teacher);
//         } catch (error) {
//             console.log(error);
//         }
//     }
// })

module.exports = router;