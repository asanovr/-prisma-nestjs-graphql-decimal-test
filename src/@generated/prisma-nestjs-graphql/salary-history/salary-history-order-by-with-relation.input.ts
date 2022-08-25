import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SalaryHistoryRecordOrderByRelationAggregateInput } from '../salary-history-record/salary-history-record-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { EmployeeOrderByWithRelationInput } from '../employee/employee-order-by-with-relation.input';

@InputType()
export class SalaryHistoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currencyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SalaryHistoryRecordOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SalaryHistoryRecordOrderByRelationAggregateInput)
    history?: SalaryHistoryRecordOrderByRelationAggregateInput;

    @Field(() => EmployeeOrderByWithRelationInput, {nullable:true})
    employeeSalaryHistory?: EmployeeOrderByWithRelationInput;
}
