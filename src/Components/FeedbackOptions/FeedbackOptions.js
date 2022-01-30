import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <div className={s.button_block}>
            {options.map(option => (
                <button
                    key={option}
                    type='button'
                    className={s.button_good}
                    onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </button>
            ))}
        </div> 
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;