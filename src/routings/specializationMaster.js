const api = global.app.appRouter;

api.model('specializationMasters')
	.register([{
		action: 'POST',
		method: 'createSpecializationMaster',
		url: '/create',
	}, {
		action: 'GET',
		method: 'getSpecializationMasters',
		url: '/',
	}]);