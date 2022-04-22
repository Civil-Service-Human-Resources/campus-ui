import { Link } from 'react-router-dom';
import './CourseList.scss';

export const CourseList = ({ courses, strandSlug }) => {
  return (
    <div className="campus-course-list">
      {courses.map((course) => (
        <div key={course.id} className="campus-course-list__item">
          <h4>
            <Link to={`/strand/${strandSlug}/course/${course.id}`}>
              {course.title}
            </Link>
          </h4>
          <p
            dangerouslySetInnerHTML={{ __html: course.shortDescription || '' }}
          />
        </div>
      ))}
    </div>
  );
};
