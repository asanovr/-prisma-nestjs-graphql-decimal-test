import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryRecordWhereInput } from './salary-history-record-where.input';
import { Type } from 'class-transformer';
import { SalaryHistoryRecordOrderByWithAggregationInput } from './salary-history-record-order-by-with-aggregation.input';
import { SalaryHistoryRecordScalarFieldEnum } from './salary-history-record-scalar-field.enum';
import { SalaryHistoryRecordScalarWhereWithAggregatesInput } from './salary-history-record-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SalaryHistoryRecordCountAggregateInput } from './salary-history-record-count-aggregate.input';
import { SalaryHistoryRecordAvgAggregateInput } from './salary-history-record-avg-aggregate.input';
import { SalaryHistoryRecordSumAggregateInput } from './salary-history-record-sum-aggregate.input';
import { SalaryHistoryRecordMinAggregateInput } from './salary-history-record-min-aggregate.input';
import { SalaryHistoryRecordMaxAggregateInput } from './salary-history-record-max-aggregate.input';

@ArgsType()
export class SalaryHistoryRecordGroupByArgs {

    @Field(() => SalaryHistoryRecordWhereInput, {nullable:true})
    @Type(() => SalaryHistoryRecordWhereInput)
    where?: SalaryHistoryRecordWhereInput;

    @Field(() => [SalaryHistoryRecordOrderByWithAggregationInput], {nullable:true})
    @Type(() => SalaryHistoryRecordOrderByWithAggregationInput)
    orderBy?: Array<SalaryHistoryRecordOrderByWithAggregationInput>;

    @Field(() => [SalaryHistoryRecordScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SalaryHistoryRecordScalarFieldEnum>;

    @Field(() => SalaryHistoryRecordScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => SalaryHistoryRecordScalarWhereWithAggregatesInput)
    having?: SalaryHistoryRecordScalarWhereWithAggregatesInput;

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
