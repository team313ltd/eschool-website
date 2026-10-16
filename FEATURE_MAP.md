# Product feature map — from user-supplied eSchool v3.5.0 package

## 1. Student app (Flutter eSchool codebase)

**Verified code modules:** `home/homeScreen.dart`, `home/widgets/homeContainer.dart`, `subjectDetails/`, `chapterDetails/`, `topicDetailsScreen.dart`, `assignment/assignmentScreen.dart`, `home/widgets/homeAssignmentContainer.dart`, `home/widgets/homeTimetableContainer.dart`, `exam/`, `exam/onlineExam/`, `resultScreen.dart`, `fees/`, `chat/`, `academicCalendar/`, `reports/`, `gallery/`, `noticeBoardScreen.dart`, `notificationsScreen.dart`, `leave/`, `studentProfileScreen.dart`.

**Demonstrated:** home, subjects, homework list, submission, attendance, timetable, exams, results, fees, chat, notices, reports, calendar.

**Possible additions from source:** subject details and chapter/topic level learning resources, online exam question interaction, gallery and media, complete payments and transaction history, leave requests, full notifications and profile.

## 2. Parent app (same Flutter app; parent login and role-specific dashboard)

**Verified code modules:** `parentHomeScreen.dart`, `childDetailsScreen.dart`, `childAttendanceScreen.dart`, `childAssignmentsScreen.dart`, `childResultsScreen.dart`, `childTimeTableScreen.dart`, `childTeachers.dart`, `fees/feesStatusScreen.dart`, `fees/feesDetailsScreen.dart`, `chat/`, `leave/`, `academicCalendar/`, `parentProfileScreen.dart`.

**Demonstrated:** parent home and children, child detail, attendance, assignments, results, fees, timetable, teacher chat, notices, leave requests, calendar.

**Critical UI distinction:** parent starts with **My Children** rather than a student's direct home dashboard.

## 3. Teacher app (separate Flutter eSchoolTeacher codebase)

**Verified code modules:** `home/homeScreen.dart`, `home/tabs/homeContainer/homeContainer.dart`, `class/`, `attendanceScreen.dart`, `assignments/`, `assignment/`, `add&editAssignmentScreen.dart`, `home/tabs/timeTableContainer.dart`, `lessonsScreen.dart`, `topicsScreen.dart`, `addOrEditLessonScreen.dart`, `addOrEditTopicScreen.dart`, `announcementsScreen.dart`, `exam/`, `result/`, `leave/`, `studentLeaves/`, `chat/`, `academicCalendar/`, `teacherAttendence/`.

**Real bottom navigation:** Home, Schedule, Profile, Settings.

**Real home Explore Academics:** Assignments, Announcements, Chapters/Lessons, Topics, Academic Calendar, Attendance, Exams, Add Result (where class teacher), Manage Leaves, Student Leaves (where class teacher).

**Demonstrated:** home, classes, attendance, assignments, creation, submissions, timetable, lessons, notices, results, leave requests, student leaves, chat, calendar.

**Important:** Some teaching modules are conditional on the teacher's assigned class and permissions.

## 4. Teacher web portal (Laravel)

**Verified code templates:** `resources/views/dashboard/teacher.blade.php` includes teacher-specific stat cards, attendance, timetable, teacher leaves, exams, assignments and noticeboard. Shared web routes are protected by role/auth and the sidebar uses permission checks (`@can`).

**Demonstrated:** teacher dashboard, timetable, attendance, assignments, submissions, lessons, exams, leave requests and announcements.

**Important:** The actual Laravel teacher role and permissions must be reviewed for the customized deployment. The original package contains administrator pages in the same server; those are not included in this showcase and should never be granted to school users.

## Business boundaries

- Provider owns the system administration and ongoing configuration.
- School personnel only use the four named experiences.
- Changes requiring admin actions go through provider support.
- The interactive website explains the four experiences, not the back-office features.

## Fidelity status

Color values, available names, feature structure and selected icon assets are source-grounded; HTML visual arrangement, mock content, and sample responses remain original simulations. Pixel-perfect recreation requires comparison against actual Flutter renders (screenshots or running emulator). No real payments/messages/data alterations are carried out.
