import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SalaryHistoryOrderByWithRelationInput } from '../salary-history/salary-history-order-by-with-relation.input';

@InputType()
export class SalaryHistoryRecordOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    salaryHistoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    year?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to?: keyof typeof SortOrder;

    @Field(() => SalaryHistoryOrderByWithRelationInput, {nullable:true})
    salaryHistory?: SalaryHistoryOrderByWithRelationInput;
}
