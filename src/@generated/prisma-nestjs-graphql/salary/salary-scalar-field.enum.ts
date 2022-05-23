import { registerEnumType } from '@nestjs/graphql';

export enum SalaryScalarFieldEnum {
    id = "id",
    currencyId = "currencyId",
    from = "from",
    to = "to",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SalaryScalarFieldEnum, { name: 'SalaryScalarFieldEnum', description: undefined })
