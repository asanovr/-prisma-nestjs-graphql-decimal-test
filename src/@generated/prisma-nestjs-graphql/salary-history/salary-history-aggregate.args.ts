import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryWhereInput } from './salary-history-where.input';
import { Type } from 'class-transformer';
import { SalaryHistoryOrderByWithRelationInput } from './salary-history-order-by-with-relation.input';
import { SalaryHistoryWhereUniqueInput } from './salary-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SalaryHistoryCountAggregateInput } from './salary-history-count-aggregate.input';
import { SalaryHistoryMinAggregateInput } from './salary-history-min-aggregate.input';
import { SalaryHistoryMaxAggregateInput } from './salary-history-max-aggregate.input';

@ArgsType()
export class SalaryHistoryAggregateArgs {

    @Field(() => SalaryHistoryWhereInput, {nullable:true})
    @Type(() => SalaryHistoryWhereInput)
    where?: SalaryHistoryWhereInput;

    @Field(() => [SalaryHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SalaryHistoryOrderByWithRelationInput>;

    @Field(() => SalaryHistoryWhereUniqueInput, {nullable:true})
    cursor?: SalaryHistoryWhereUniqueInput;

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
