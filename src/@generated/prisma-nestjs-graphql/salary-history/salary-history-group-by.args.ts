import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryWhereInput } from './salary-history-where.input';
import { Type } from 'class-transformer';
import { SalaryHistoryOrderByWithAggregationInput } from './salary-history-order-by-with-aggregation.input';
import { SalaryHistoryScalarFieldEnum } from './salary-history-scalar-field.enum';
import { SalaryHistoryScalarWhereWithAggregatesInput } from './salary-history-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SalaryHistoryCountAggregateInput } from './salary-history-count-aggregate.input';
import { SalaryHistoryMinAggregateInput } from './salary-history-min-aggregate.input';
import { SalaryHistoryMaxAggregateInput } from './salary-history-max-aggregate.input';

@ArgsType()
export class SalaryHistoryGroupByArgs {

    @Field(() => SalaryHistoryWhereInput, {nullable:true})
    @Type(() => SalaryHistoryWhereInput)
    where?: SalaryHistoryWhereInput;

    @Field(() => [SalaryHistoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SalaryHistoryOrderByWithAggregationInput>;

    @Field(() => [SalaryHistoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SalaryHistoryScalarFieldEnum>;

    @Field(() => SalaryHistoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: SalaryHistoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SalaryHistoryCountAggregateInput, {nullable:true})
    _count?: SalaryHistoryCountAggregateInput;

    @Field(() => SalaryHistoryMinAggregateInput, {nullable:true})
    _min?: SalaryHistoryMinAggregateInput;

    @Field(() => SalaryHistoryMaxAggregateInput, {nullable:true})
    _max?: SalaryHistoryMaxAggregateInput;
}
