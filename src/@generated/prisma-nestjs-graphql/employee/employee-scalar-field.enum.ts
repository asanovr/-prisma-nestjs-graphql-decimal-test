import { registerEnumType } from '@nestjs/graphql';

export enum EmployeeScalarFieldEnum {
    id = "id",
    salaryHistoryId = "salaryHistoryId"
}


registerEnumType(EmployeeScalarFieldEnum, { name: 'EmployeeScalarFieldEnum', description: undefined })
