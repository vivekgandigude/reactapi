import pkg from "express";
const { Router } = pkg;

import contactcontroller from "./controllers/contactcontroller.js";

const router = Router();
router.get("/api/getContacts", contactcontroller.getContacts);
router.get("/api/getFilms", contactcontroller.getFilms);
router.get("/api/getFilmsYearWise", contactcontroller.getFilmsYearWise);
router.get("/api/getLastestFilm", contactcontroller.getLastestFilm);
router.get("/api/getEmployeeDetails", contactcontroller.getEmployeeDetails);
router.post("/api/saveContact", contactcontroller.saveContact);
router.post("/api/updateEmpDetails", contactcontroller.updateEmpDetails);
router.post("/api/updateListItem", contactcontroller.updateListItem);
router.post("/api/createTestListItem", contactcontroller.createTestListItem);
router.delete("/api/deleteEmployee", contactcontroller.deleteEmployee);
router.delete("/api/deleteListItem", contactcontroller.deleteListItem);
router.get("/api/getAllTestListItems", contactcontroller.getAllTestListItems);
router.get("/api/getAllTestListItem", contactcontroller.getAllTestListItem);
router.get(
  "/api/getTestListAccesToken",
  contactcontroller.getTestListAccesToken
);
export default router;
