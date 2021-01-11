import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    [theme.breakpoints.down("sm")]: {
      width: 250,
    },
    margin: "auto",
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: "#314089",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const marks = [
  {
    value: 0,
    label: "0zł",
  },
  {
    value: 1500,
    label: "1500zł",
  },
];

export default function Calculator(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PrettoSlider
        valueLabelDisplay="on"
        aria-label="Kalkulator"
        defaultValue={20}
        marks={marks}
        min={1}
        max={1500}
        onChange={props.getValue}
      />
      <div className={classes.margin} />
    </div>
  );
}
