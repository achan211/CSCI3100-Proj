// PROGRAM – Program to store var
// PROGRAMMER: So, Chi Fung
// CALLING SEQUENCE: return the JSX element, then call useffect. 
// VERSION 1: written 4-2-2020
// REVISION 1.1: written 4-5-2020
// PURPOSE: Program to store var
// DATA STRUCTURES: array list

let UserCourseListReducer = (state, action) =>{
    switch (action.type) {
        case 'ADD_COURSE':
          return action.payload;
        default:
          throw new Error();
      }
}
export default UserCourseListReducer