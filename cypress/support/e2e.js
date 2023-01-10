
/* It's importing the commands visual regression tracker. */
import {
    addVrtTrackCommand,
    addVrtStartCommand,
    addVrtStopCommand,
    addVrtTrackBufferCommand,
    addVrtTrackBase64Command,
  } from "@visual-regression-tracker/agent-cypress/dist/commands"
  
  addVrtStartCommand()
  addVrtStopCommand()
  addVrtTrackCommand()
  addVrtTrackBufferCommand()
  addVrtTrackBase64Command()
  
/* It's importing the commands.js file. */
import './commands'
