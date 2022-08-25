import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryWhereInput } from './salary-where.input';
import { Type } from 'class-transformer';
import { SalaryOrderByWithAggregationInput } from './salary-order-by-with-aggregation.input';
import { SalaryScalarFieldEnum } from './salary-scalar-field.enum';
import { SalaryScalarWhereWithAggregatesInput } from './salary-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SalaryCountAggregateInput } from './salary-count-aggregate.input';
import { SalaryAvgAggregateInput } from './salary-avg-aggregate.input';
import { SalarySumAggregateInput } from './salary-sum-aggregate.input';
import { SalaryMinAggregateInput } from './salary-min-aggregate.input';
import { SalaryMaxAggregateInput } from './salary-max-aggregate.input';

@ArgsType()
export class SalaryGroupByArgs {

    @Field(() => SalaryWhereInput, {nullable:true})
    @Type(() => SalaryWhereInput)
    where?: SalaryWhereInput;

    @Field(() => [SalaryOrderByWithAggregationInput], {nullable:true})
    @Type(() => SalaryOrderByWithAggregationInput)
    orderBy?: Array<SalaryOrderByWithAggregationInput>;

    @Field(() => [SalaryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SalaryScalarFieldEnum>;

    @Field(() => SalaryScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => SalaryScalarWhereWithAggregatesInput)
    having?: SalaryScalarWhereWithAggregatesInput;

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
