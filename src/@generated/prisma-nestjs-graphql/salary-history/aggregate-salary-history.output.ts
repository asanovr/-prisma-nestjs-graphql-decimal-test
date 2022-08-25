import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SalaryHistoryCountAggregate } from './salary-history-count-aggregate.output';
import { SalaryHistoryMinAggregate } from './salary-history-min-aggregate.output';
import { SalaryHistoryMaxAggregate } from './salary-history-max-aggregate.output';

@ObjectType()
export class AggregateSalaryHistory {

    @Field(() => SalaryHistoryCountAggregate, {nullable:true})
    _count?: SalaryHistoryCountAggregate;

    @Field(() => SalaryHistoryMinAggregate, {nullable:true})
    _min?: SalaryHistoryMinAggregate;

    @Field(() => SalaryHistoryMaxAggregate, {nullable:true})
    _max?: SalaryHistoryMaxAggregate;
}
