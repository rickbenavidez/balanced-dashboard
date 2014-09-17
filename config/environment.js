module.exports = function(environment) {
	var ENV;
	ENV = {
		environment: environment,
		baseURL: '/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {}
		},
		APP: {},
		BALANCED: {
			API: 'https://api.balancedpayments.com',
			AUTH: 'https://auth.balancedpayments.com',
			JUSTITIA: 'https://justitia.balancedpayments.com',
			WWW: 'https://www.balancedpayments.com',
			DOCS: 'https://docs.balancedpayments.com',
			DEBUG: environment !== "production",
			MIXPANEL: '',
			GOOGLE_ANALYTICS: ''
		}
	};
	if (environment === 'test') {
		ENV.baseURL = '/';
	}
	if (environment === 'production') {
		ENV.BALANCED.MIXPANEL = '991598fc644dd5d0894e6cb070154330';
		ENV.BALANCED.GOOGLE_ANALYTICS = 'UA-30733850-1';
	}
	return ENV;
};
