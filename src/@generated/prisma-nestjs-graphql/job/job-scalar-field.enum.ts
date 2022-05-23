import { registerEnumType } from '@nestjs/graphql';

export enum JobScalarFieldEnum {
    id = "id",
    companyId = "companyId",
    title = "title",
    salaryId = "salaryId",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(JobScalarFieldEnum, { name: 'JobScalarFieldEnum', description: undefined })
