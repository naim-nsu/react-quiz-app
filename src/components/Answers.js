import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";
export default function Answers({ options = [], handleChange, input }) {
  return input ? (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox
          className={classes.answer}
          key={index}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  ) : (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox
          className={`${classes.answer} ${
            option.correct
              ? classes.correct
              : option.checked
              ? classes.wrong
              : null
          }`}
          key={index}
          text={option.title}
          defaultChecked={option.checked}
          disabled
        />
      ))}
    </div>
  );
}
