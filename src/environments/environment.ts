// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	sessionKeyName: '12345',
	exampleJWT:
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.' +
		'eyJpc3MiOiJUZWxlZsOzbmljYSIsImlhdCI6MTU4MDQ4NDI2MSwiZXhwIjoxODk2MDE3MDYxLCJhdWQiOiIiLCJzdWIiO' +
		'iIiLCJOYW1lIjoiSm9zZSIsIkxhc3ROYW1lIjoiTmFwYSIsIkVtYWlsIjoiam5hcGFseW5AZXZlcmlzLmNvbSJ9.9SVybIU1Hq' +
		'g7swzpFvCofbAPNbxNAFS3YOjdriaysl4',
	API_BASE: 'http://localhost:3000/crm/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.