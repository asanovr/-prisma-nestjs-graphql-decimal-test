import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SalaryCountOrderByAggregateInput } from './salary-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { SalaryAvgOrderByAggregateInput } from './salary-avg-order-by-aggregate.input';
import { SalaryMaxOrderByAggregateInput } from './salary-max-order-by-aggregate.input';
import { SalaryMinOrderByAggregateInput } from './salary-min-order-by-aggregate.input';
import { SalarySumOrderByAggregateInput } from './salary-sum-order-by-aggregate.input';

@InputType()
export class SalaryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currencyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SalaryCountOrderByAggregateInput, {nullable:true})
    @Type(() => SalaryCountOrderByAggregateInput)
    _count?: SalaryCountOrderByAggregateInput;

    @Field(() => SalaryAvgOrderByAggregateInput, {nullable:true})
    @Type(() => SalaryAvgOrderByAggregateInput)
    _avg?: SalaryAvgOrderByAggregateInput;

    @Field(() => SalaryMaxOrderByAggregateInput, {nullable:true})
    @Type(() => SalaryMaxOrderByAggregateInput)
    _max?: SalaryMaxOrderByAggregateInput;

    @Field(() => SalaryMinOrderByAggregateInput, {nullable:true})
    @Type(() => SalaryMinOrderByAggregateInput)
    _min?: SalaryMinOrderByAggregateInput;

    @Field(() => SalarySumOrderByAggregateInput, {nullable:true})
    @Type(() => SalarySumOrderByAggregateInput)
    _sum?: SalarySumOrderByAggregateInput;
}
