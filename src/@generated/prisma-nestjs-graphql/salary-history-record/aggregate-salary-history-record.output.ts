import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SalaryHistoryRecordCountAggregate } from './salary-history-record-count-aggregate.output';
import { SalaryHistoryRecordAvgAggregate } from './salary-history-record-avg-aggregate.output';
import { SalaryHistoryRecordSumAggregate } from './salary-history-record-sum-aggregate.output';
import { SalaryHistoryRecordMinAggregate } from './salary-history-record-min-aggregate.output';
import { SalaryHistoryRecordMaxAggregate } from './salary-history-record-max-aggregate.output';

@ObjectType()
export class AggregateSalaryHistoryRecord {

    @Field(() => SalaryHistoryRecordCountAggregate, {nullable:true})
    _count?: SalaryHistoryRecordCountAggregate;

    @Field(() => SalaryHistoryRecordAvgAggregate, {nullable:true})
    _avg?: SalaryHistoryRecordAvgAggregate;

    @Field(() => SalaryHistoryRecordSumAggregate, {nullable:true})
    _sum?: SalaryHistoryRecordSumAggregate;

    @Field(() => SalaryHistoryRecordMinAggregate, {nullable:true})
    _min?: SalaryHistoryRecordMinAggregate;

    @Field(() => SalaryHistoryRecordMaxAggregate, {nullable:true})
    _max?: SalaryHistoryRecordMaxAggregate;
}
