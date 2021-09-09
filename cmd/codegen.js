const { codegen } = require('swagger-axios-codegen')

codegen({
  methodNameMode: 'operationId',
  // source: require('../swagger.json'),
  remoteUrl: 'http://localhost:3000/api/docs-json',
  // remoteUrl: 'https://erp-dev.tima.vn/api/docs-json',
  // remoteUrl: 'https://erp.tima.vn/api/docs-json',
  // remoteUrl: 'http://172.16.1.38:4000/docs-json',
  outputDir: './services',
  strictNullChecks: true,
  useCustomerRequestInstance: true,
  modelMode: 'interface',
  extendDefinitionFile: './services/customerDefinition.ts',
  extendGenericType: ['JsonResult'],
  sharedServiceOptions: true,
  useStaticMethod: true,
  openApi: '3.0.0',
})
