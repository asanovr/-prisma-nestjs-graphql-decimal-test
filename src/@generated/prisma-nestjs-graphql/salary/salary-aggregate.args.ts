import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryWhereInput } from './salary-where.input';
import { Type } from 'class-transformer';
import { SalaryOrderByWithRelationInput } from './salary-order-by-with-relation.input';
import { SalaryWhereUniqueInput } from './salary-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SalaryCountAggregateInput } from './salary-count-aggregate.input';
import { SalaryAvgAggregateInput } from './salary-avg-aggregate.input';
import { SalarySumAggregateInput } from './salary-sum-aggregate.input';
import { SalaryMinAggregateInput } from './salary-min-aggregate.input';
import { SalaryMaxAggregateInput } from './salary-max-aggregate.input';

@ArgsType()
export class SalaryAggregateArgs {

    @Field(() => SalaryWhereInput, {nullable:true})
    @Type(() => SalaryWhereInput)
    where?: SalaryWhereInput;

    @Field(() => [SalaryOrderByWithRelationInput], {nullable:true})
    @Type(() => SalaryOrderByWithRelationInput)
    orderBy?: Array<SalaryOrderByWithRelationInput>;

    @Field(() => SalaryWhereUniqueInput, {nullable:true})
    @Type(() => SalaryWhereUniqueInput)
    cursor?: SalaryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SalaryCountAggregateInput, {nullable:true})
    @Type(() => SalaryCountAggregateInput)
    _count?: SalaryCountAggregateInput;

    @Field(() => SalaryAvgAggregateInput, {nullable:true})
    @Type(() => SalaryAvgAggregateInput)
    _avg?: SalaryAvgAggregateInput;

    @Field(() => SalarySumAggregateInput, {nullable:true})
    @Type(() => SalarySumAggregateInput)
    _sum?: SalarySumAggregateInput;

    @Field(() => SalaryMinAggregateInput, {nullable:true})
    @Type(() => SalaryMinAggregateInput)
    _min?: SalaryMinAggregateInput;

    @Field(() => SalaryMaxAggregateInput, {nullable:true})
    @Type(() => SalaryMaxAggregateInput)
    _max?: SalaryMaxAggregateInput;
}
