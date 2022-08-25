import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { SalaryHistoryRelationFilter } from '../salary-history/salary-history-relation-filter.input';

@InputType()
export class EmployeeWhereInput {

    @Field(() => [EmployeeWhereInput], {nullable:true})
    AND?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    OR?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    NOT?: Array<EmployeeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    salaryHistoryId?: StringNullableFilter;

    @Field(() => SalaryHistoryRelationFilter, {nullable:true})
    salaryHistory?: SalaryHistoryRelationFilter;
}
