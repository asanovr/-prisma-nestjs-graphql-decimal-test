import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SalaryHistoryCountOrderByAggregateInput } from './salary-history-count-order-by-aggregate.input';
import { SalaryHistoryMaxOrderByAggregateInput } from './salary-history-max-order-by-aggregate.input';
import { SalaryHistoryMinOrderByAggregateInput } from './salary-history-min-order-by-aggregate.input';

@InputType()
export class SalaryHistoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currencyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SalaryHistoryCountOrderByAggregateInput, {nullable:true})
    _count?: SalaryHistoryCountOrderByAggregateInput;

    @Field(() => SalaryHistoryMaxOrderByAggregateInput, {nullable:true})
    _max?: SalaryHistoryMaxOrderByAggregateInput;

    @Field(() => SalaryHistoryMinOrderByAggregateInput, {nullable:true})
    _min?: SalaryHistoryMinOrderByAggregateInput;
}
