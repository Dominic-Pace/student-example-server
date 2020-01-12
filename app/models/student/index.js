import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  dateOfBirth: {
    type: Date,
  },
  firstName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female'],
  },
  lastName: {
    type: String,
    required: true,
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  },
  versionKey: false
});

module.exports = mongoose.model('Student', StudentSchema);
