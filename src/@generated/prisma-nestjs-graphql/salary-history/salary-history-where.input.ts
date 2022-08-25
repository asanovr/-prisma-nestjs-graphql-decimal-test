import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SalaryHistoryRecordListRelationFilter } from '../salary-history-record/salary-history-record-list-relation-filter.input';
import { Type } from 'class-transformer';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';

@InputType()
export class SalaryHistoryWhereInput {

    @Field(() => [SalaryHistoryWhereInput], {nullable:true})
    AND?: Array<SalaryHistoryWhereInput>;

    @Field(() => [SalaryHistoryWhereInput], {nullable:true})
    OR?: Array<SalaryHistoryWhereInput>;

    @Field(() => [SalaryHistoryWhereInput], {nullable:true})
    NOT?: Array<SalaryHistoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    currencyId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => SalaryHistoryRecordListRelationFilter, {nullable:true})
    @Type(() => SalaryHistoryRecordListRelationFilter)
    history?: SalaryHistoryRecordListRelationFilter;

    @Field(() => EmployeeRelationFilter, {nullable:true})
    employeeSalaryHistory?: EmployeeRelationFilter;
}
