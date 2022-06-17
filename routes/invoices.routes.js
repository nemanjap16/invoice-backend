const router = require("express").Router();

// GET all invoices
router.get("/", (req, res) => {
  res.json({ message: "Get all invoices" });
});

// GET one invoice
router.get("/:id", (req, res) => {
  res.json({ message: "Get one invoice" });
});

// POST one invoice
router.post("/", (req, res) => {
  res.json({ message: "Post one invoice" });
});

// PUT one invoice
router.put("/:id", (req, res) => {
  res.json({ message: "Put one invoice" });
});

// DELETE one invoice
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete one invoice" });
});

// GET all invoices by user

module.exports = router;
