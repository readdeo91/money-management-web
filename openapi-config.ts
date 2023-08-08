import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
    schemaFile: 'http://localhost:8080/api/v3/api-docs',
    apiFile: './src/store/moneyManagementApi.ts',
    apiImport: 'moneyManagementPlaceHolderApi',
    outputFile: './src/store/moneyManagementApiGenerated.ts',
    exportName: 'moneyManagementApi',
    hooks: true,
    tag: true
}

export default config