import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryRecordWhereInput } from './salary-history-record-where.input';
import { Type } from 'class-transformer';
import { SalaryHistoryRecordOrderByWithRelationInput } from './salary-history-record-order-by-with-relation.input';
import { SalaryHistoryRecordWhereUniqueInput } from './salary-history-record-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SalaryHistoryRecordCountAggregateInput } from './salary-history-record-count-aggregate.input';
import { SalaryHistoryRecordAvgAggregateInput } from './salary-history-record-avg-aggregate.input';
import { SalaryHistoryRecordSumAggregateInput } from './salary-history-record-sum-aggregate.input';
import { SalaryHistoryRecordMinAggregateInput } from './salary-history-record-min-aggregate.input';
import { SalaryHistoryRecordMaxAggregateInput } from './salary-history-record-max-aggregate.input';

@ArgsType()
export class SalaryHistoryRecordAggregateArgs {

    @Field(() => SalaryHistoryRecordWhereInput, {nullable:true})
    @Type(() => SalaryHistoryRecordWhereInput)
    where?: SalaryHistoryRecordWhereInput;

    @Field(() => [SalaryHistoryRecordOrderByWithRelationInput], {nullable:true})
    @Type(() => SalaryHistoryRecordOrderByWithRelationInput)
    orderBy?: Array<SalaryHistoryRecordOrderByWithRelationInput>;

    @Field(() => SalaryHistoryRecordWhereUniqueInput, {nullable:true})
    @Type(() => SalaryHistoryRecordWhereUniqueInput)
    cursor?: SalaryHistoryRecordWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SalaryHistoryRecordCountAggregateInput, {nullable:true})
    @Type(() => SalaryHistoryRecordCountAggregateInput)
    _count?: SalaryHistoryRecordCountAggregateInput;

    @Field(() => SalaryHistoryRecordAvgAggregateInput, {nullable:true})
    @Type(() => SalaryHistoryRecordAvgAggregateInput)
    _avg?: SalaryHistoryRecordAvgAggregateInput;

    @Field(() => SalaryHistoryRecordSumAggregateInput, {nullable:true})
    @Type(() => SalaryHistoryRecordSumAggregateInput)
    _sum?: SalaryHistoryRecordSumAggregateInput;

    @Field(() => SalaryHistoryRecordMinAggregateInput, {nullable:true})
    @Type(() => SalaryHistoryRecordMinAggregateInput)
    _min?: SalaryHistoryRecordMinAggregateInput;

    @Field(() => SalaryHistoryRecordMaxAggregateInput, {nullable:true})
    @Type(() => SalaryHistoryRecordMaxAggregateInput)
    _max?: SalaryHistoryRecordMaxAggregateInput;
}
