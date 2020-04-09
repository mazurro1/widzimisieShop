import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import { Colors } from "../common"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  icon: {
    color: `${Colors.second} !important`,
  },
  completed: {
    color: `${Colors.second} !important`,
  },
}))

export const StepperComponent = ({ activeStep, steps }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel
              StepIconProps={{
                classes: {
                  active: classes.icon,
                  completed: classes.completed,
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}
