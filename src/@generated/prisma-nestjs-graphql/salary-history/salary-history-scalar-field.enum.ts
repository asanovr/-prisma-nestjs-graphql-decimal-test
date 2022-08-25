import { registerEnumType } from '@nestjs/graphql';

export enum SalaryHistoryScalarFieldEnum {
    id = "id",
    currencyId = "currencyId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SalaryHistoryScalarFieldEnum, { name: 'SalaryHistoryScalarFieldEnum', description: undefined })
