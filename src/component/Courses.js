import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Courses = (props) => {

    const CourseName = [
      {name: 'Photoshop', price : '30$', instractor: 'John Doe'},
      {name: 'Illustrator', price : '40$', instractor: 'Mr Mikel'},
      {name: 'Adobe premier', price : '50$', instractor: 'Kelin'},
      {name: 'HTML', price : '200$', instractor: 'Shely'},
      {name: 'CSS', price : '10$', instractor: 'Salin'},
      {name: 'javaScript', price : '35$', instractor: 'Rehman'},
      {name: 'React', price : '45$', instractor: 'Rehman'},
      {name: 'Angular', price : '55$', instractor: 'Jamil'},  
      {name: 'PHP', price : '65$', instractor: 'Annna'},
      {name: 'java', price : '45$', instractor: 'Kevin'},
      {name: 'Laravel', price : '65$', instractor: 'Doglar'},
      {name: 'Python', price : '75$', instractor: 'Richardo'}
  ]
    return (
      <div className="App">
        {
          CourseName.map(course=><div className=""><Courses enrollCourse={course}></Courses></div>)
        }
        
      </div>
    );
  }

export default Courses;