const api = global.app.appRouter;

api.model('associatesMasters')
	.register([{
		action: 'POST',
		method: 'createAssociatesMaster',
		url: '/create',
	}, {
		action: 'GET',
		method: 'getAssociatesMaster',
		url: '/:associatesMasterId',
	}, {
		action: 'GET',
		method: 'getAssociatesMasters',
		url: '/',
	}]);