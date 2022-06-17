const router = require("express").Router();
const {
  getInvoices,
  getInvoice,
  postInvoice,
  putInvoice,
  deleteInvoice,
} = require("../controllers/invoice.controllers");

// GET all invoices
router.get("/", getInvoices);

// GET one invoice
router.get("/:id", getInvoice);

// POST one invoice
router.post("/", postInvoice);

// PUT one invoice
router.put("/:id", putInvoice);

// DELETE one invoice
router.delete("/:id", deleteInvoice);

// GET all invoices by user

module.exports = router;
