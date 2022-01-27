import {
	Schema,
	model
} from 'mongoose';

const associatesMaster = new Schema({
  associateName: { type: String, trim: true },
  associatePhone: { type: String, trim: true },
  associateAddress: { type: String, trim: true },
  associateSpecializeIn: [{
    type: Schema.Types.ObjectId,
    ref: 'specializationMaster',
  }],
  createdAt: Date,
});

// adding single index
associatesMaster.index({ associateName: 1 });

model('associatesMaster', associatesMaster);
