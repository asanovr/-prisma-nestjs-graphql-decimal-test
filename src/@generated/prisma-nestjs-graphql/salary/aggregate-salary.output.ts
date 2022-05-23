import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SalaryCountAggregate } from './salary-count-aggregate.output';
import { SalaryAvgAggregate } from './salary-avg-aggregate.output';
import { SalarySumAggregate } from './salary-sum-aggregate.output';
import { SalaryMinAggregate } from './salary-min-aggregate.output';
import { SalaryMaxAggregate } from './salary-max-aggregate.output';

@ObjectType()
export class AggregateSalary {

    @Field(() => SalaryCountAggregate, {nullable:true})
    _count?: SalaryCountAggregate;

    @Field(() => SalaryAvgAggregate, {nullable:true})
    _avg?: SalaryAvgAggregate;

    @Field(() => SalarySumAggregate, {nullable:true})
    _sum?: SalarySumAggregate;

    @Field(() => SalaryMinAggregate, {nullable:true})
    _min?: SalaryMinAggregate;

    @Field(() => SalaryMaxAggregate, {nullable:true})
    _max?: SalaryMaxAggregate;
}
