import { useEffect, useMemo, useState } from 'react';
import { Button } from 'react-foundation';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CampusContent } from '../../components/CampusContent';
import { ModuleList } from '../../components/ModuleList';
import { getCourseDetailApi } from '../../services/strands';
import { getCopy } from '../../copytable';

import './coursedetails.scss';

const courseCopy = getCopy('courseDetails');
const straindCopy = getCopy('learningStrands');

export const CourseDetails = () => {
  const { slug, courseId } = useParams();
  const [courseDetail, setCourseDetail] = useState();

  const breadcrumbs = useMemo(() => {
    const strand = straindCopy[slug];
    if (!courseCopy) {
      return [];
    }

    const _breadcrumbs = courseCopy.breadcrumbs.concat({
      label: 'Learning Strands',
      link: `/learning-strands/${slug}`,
    });
    if (!strand) {
      return _breadcrumbs;
    }
    return _breadcrumbs.concat({
      label: `${strand.chapter} ${strand.title}`,
    });
  }, [slug]);

  useEffect(() => {
    if (courseId) {
      (async () => {
        try {
          setCourseDetail(await getCourseDetailApi(courseId));
        } catch (error) {}
      })();
    }
  }, [courseId]);

  const handleClick = () => {
    window.open(courseDetail.sourceHref, '_blank');
  };

  return (
    <div className="campus-course-details">
      <div className="campus-container">
        <Breadcrumbs list={breadcrumbs} />
        <div className="campus-course-details__content">
          <div className="campus-course-details__content-left">
            <div className="campus-strand-title">
              <h2>{courseDetail?.title}</h2>
            </div>
            <div className="campus-course-details__section">
              <div className="campus-section-title">{courseCopy.overview}</div>
              <CampusContent contents={[courseDetail?.description || '']} />
            </div>
            {courseDetail?.outcomes && (
              <div className="campus-course-details__section">
                <div className="campus-section-title">
                  {courseCopy.outcomes}
                </div>
                <CampusContent contents={[courseDetail?.outcomes || '']} />
              </div>
            )}

            {courseDetail?.sourceHref && (
              <Button className="view-course" onClick={handleClick}>
                {courseCopy.button}
              </Button>
            )}
          </div>
          <div className="campus-course-details__content-right">
            <ModuleList
              modules={[
                { type: courseDetail?.type, duration: courseDetail?.duration },
              ]}
            />
          </div>

          {courseDetail?.sourceHref && (
            <Button className="view-course-mobile" onClick={handleClick}>
              {courseCopy.button}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
