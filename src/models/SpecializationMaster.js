import {
	Schema,
	model
} from 'mongoose';

const specializationMaster = new Schema({
  specializationName: { type: String, trim: true },
  createdAt: Date,
});

//custom queries
specializationMaster.statics.findOneOrCreateSpecializationMaster = (specializationName) => {
	specializationName = specializationName.toLocaleLowerCase();
	return new Promise((res, rej) => {
		return model('tag').findOne({
			specializationName,
		})
		.then(data => {
			if(!data) {
				return new model('specializationName')({
					specializationName: specializationName,
					createdAt: Date.now()
				})
				.save()
				.then(specializationMasterData => res(specializationMasterData));
			}
			return res(data);
		})
	});
};


// adding single index
specializationMaster.index({ specializationName: 1 });

model('specializationMaster', specializationMaster);
