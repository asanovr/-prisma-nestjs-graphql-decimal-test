import { registerEnumType } from '@nestjs/graphql';

export enum SalaryHistoryRecordScalarFieldEnum {
    id = "id",
    salaryHistoryId = "salaryHistoryId",
    year = "year",
    from = "from",
    to = "to"
}


registerEnumType(SalaryHistoryRecordScalarFieldEnum, { name: 'SalaryHistoryRecordScalarFieldEnum', description: undefined })
