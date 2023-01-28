import {isEmpty, isArray} from 'lodash';
import Course from '../course';
import PropTypes from 'prop-types';

const Courses = ( {courses} ) => {

	if ( isEmpty( courses ) && ! isArray( courses ) ) {
		return null;
	}

	return (
		<div>
			{
				courses.map( ( course, index ) => {
					return (
						<div key={`${course?.node?.id}-${index}` ?? ''}>
							<course course={course?.node}/>
						</div>
					);
				} )
			}
		</div>
	);
};

Courses.propTypes = {
	courses: PropTypes.array
};

Courses.defaultProps = {
	courses: []
};

export default Courses;
