import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryWhereInput } from './salary-history-where.input';
import { Type } from 'class-transformer';
import { SalaryHistoryOrderByWithRelationInput } from './salary-history-order-by-with-relation.input';
import { SalaryHistoryWhereUniqueInput } from './salary-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SalaryHistoryScalarFieldEnum } from './salary-history-scalar-field.enum';

@ArgsType()
export class FindFirstSalaryHistoryArgs {

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

    @Field(() => [SalaryHistoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SalaryHistoryScalarFieldEnum>;
}
