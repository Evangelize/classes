import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import People from './views/People';
import Member from './views/Member';
import Schedules from './views/classes/Schedules';
import Attendance from './views/classes/Attendance';
import AddClassDayTeacher from './views/classes/AddClassDayTeacher';
import AddClassStudents from './views/classes/AddClassStudents';
import EditDayAttendance from './views/classes/EditDayAttendance';
import Classes from './views/classes/Classes';
import Class from './views/classes/Class';
import ClassGroupings from './views/classes/ClassGroupings';
import ClassGroupingAcademicYears from './views/classes/ClassGroupingAcademicYears';
import AcademicYearDivisions from './views/classes/AcademicYearDivisions';
import DivisionClasses from './views/classes/DivisionClasses';
import DivisionClassesSelect from './views/classes/DivisionClassesSelect';
import MeetingDaysSelect from './views/classes/MeetingDaysSelect';

export default (settings) => {
  // console.log('createRoutes', settings.authenticated);
  const requireAuth = (nextState, replace, callback) => {
    // console.log('authenticated', settings.authenticated);
    if (!settings.authenticated) {
      replace('/login');
    }
    callback();
  };
  const redirect = (nextState, replace, callback) => {
    // console.log('authenticated', settings.authenticated);
    if (settings.authenticated) {
      replace('/dashboard');
    }
    callback();
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} onEnter={requireAuth} />
      <Route
        path="login"
        component={Login}
        onEnter={redirect}
      />
      <Route
        path="dashboard"
        component={Dashboard}
        onEnter={requireAuth}
      />
      <Route
        path="classes"
        component={Classes}
        onEnter={requireAuth}
      />
      <Route
        path="classes/:classId"
        component={Class}
        onEnter={requireAuth}
      />
      <Route
        path="classes/:classId/:yearId/students"
        component={AddClassStudents}
        onEnter={requireAuth}
      />
      <Route
        path="members"
        component={People}
        onEnter={requireAuth}
      />
      <Route
        path="members/:id"
        component={Member}
        onEnter={requireAuth}
      />
      <Route
        path="schedules"
        component={Schedules}
        onEnter={requireAuth}
      />
      <Route
        path="attendance"
        component={Attendance}
        onEnter={requireAuth}
      />
      <Route
        path="attendance/:divisionConfig/:date"
        component={EditDayAttendance}
      />
      <Route
        path="schedule/:divisionConfigId/:yearId/:classId/:day"
        component={AddClassDayTeacher}
        onEnter={requireAuth}
      />
      <Route
        path="schedule/manage"
        component={ClassGroupings}
        onEnter={requireAuth}
      />
      <Route
        path="schedule/:classGroupingId"
        component={ClassGroupingAcademicYears}
        onEnter={requireAuth}
      />
      <Route
        path="schedule/academicYear/:yearId"
        component={AcademicYearDivisions}
        onEnter={requireAuth}
      />
      <Route
        path="schedule/academicYear/:yearId/meetingDays"
        component={MeetingDaysSelect}
        onEnter={requireAuth}
      />
      <Route
        path="schedule/academicYearDivision/:divisionId"
        component={DivisionClasses}
        onEnter={requireAuth}
      />
      <Route
        path="schedule/academicYearDivision/:divisionId/select"
        component={DivisionClassesSelect}
        onEnter={requireAuth}
      />
    </Route>
  );
};
