import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SalaryHistoryRecordCountOrderByAggregateInput } from './salary-history-record-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { SalaryHistoryRecordAvgOrderByAggregateInput } from './salary-history-record-avg-order-by-aggregate.input';
import { SalaryHistoryRecordMaxOrderByAggregateInput } from './salary-history-record-max-order-by-aggregate.input';
import { SalaryHistoryRecordMinOrderByAggregateInput } from './salary-history-record-min-order-by-aggregate.input';
import { SalaryHistoryRecordSumOrderByAggregateInput } from './salary-history-record-sum-order-by-aggregate.input';

@InputType()
export class SalaryHistoryRecordOrderByWithAggregationInput {

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

    @Field(() => SalaryHistoryRecordCountOrderByAggregateInput, {nullable:true})
    @Type(() => SalaryHistoryRecordCountOrderByAggregateInput)
    _count?: SalaryHistoryRecordCountOrderByAggregateInput;

    @Field(() => SalaryHistoryRecordAvgOrderByAggregateInput, {nullable:true})
    @Type(() => SalaryHistoryRecordAvgOrderByAggregateInput)
    _avg?: SalaryHistoryRecordAvgOrderByAggregateInput;

    @Field(() => SalaryHistoryRecordMaxOrderByAggregateInput, {nullable:true})
    @Type(() => SalaryHistoryRecordMaxOrderByAggregateInput)
    _max?: SalaryHistoryRecordMaxOrderByAggregateInput;

    @Field(() => SalaryHistoryRecordMinOrderByAggregateInput, {nullable:true})
    @Type(() => SalaryHistoryRecordMinOrderByAggregateInput)
    _min?: SalaryHistoryRecordMinOrderByAggregateInput;

    @Field(() => SalaryHistoryRecordSumOrderByAggregateInput, {nullable:true})
    @Type(() => SalaryHistoryRecordSumOrderByAggregateInput)
    _sum?: SalaryHistoryRecordSumOrderByAggregateInput;
}
