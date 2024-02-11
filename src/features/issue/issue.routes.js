import express from "express";
import { filter, getIssues, raiseAnIssue, raisingIssuePage } from "./issue.controller.js";

const issueRouter = express.Router();

issueRouter.get("/:projectId", getIssues)   // for getting all raised issues here

issueRouter.get("/raiseIssuePage/:projectId", raisingIssuePage)  // for raising issue page will render

issueRouter.post("/:projectId", raiseAnIssue);  // submitting issue on a specific project

issueRouter.post("/filter/:projectId", filter) // filtering issues on a specific label for a project


export default issueRouter;
