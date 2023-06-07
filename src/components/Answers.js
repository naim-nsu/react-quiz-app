import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";
export default function Answers() {
  return (
    <Checkbox className={classes.answer} text="A New Hope 1" id="option2" />
  );
}
