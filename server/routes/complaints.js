const express = require('express');
const router = express.Router();
const {
  getComplaints,
  getComplaint,
  createComplaint,
  updateComplaint,
  deleteComplaint,
  getComplaintsInRadius,
  getStats
} = require('../controllers/complaintController');
const { protect, authorize } = require('../middleware/auth');

// All routes require authentication
router.use(protect);

router.route('/')
  .get(getComplaints)
  .post(createComplaint);

router.route('/stats')
  .get(authorize('admin'), getStats);

router.route('/radius/:lng/:lat/:distance')
  .get(getComplaintsInRadius);

router.route('/:id')
  .get(getComplaint)
  .put(updateComplaint)
  .delete(deleteComplaint);

module.exports = router;