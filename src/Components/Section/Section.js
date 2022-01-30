import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({title = "", children}) {
    return (
        <section className={s.section} >
            <p className={s.section_title}>{title}</p>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string,
}

export default Section;