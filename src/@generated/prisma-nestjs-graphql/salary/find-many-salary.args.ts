import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryWhereInput } from './salary-where.input';
import { Type } from 'class-transformer';
import { SalaryOrderByWithRelationInput } from './salary-order-by-with-relation.input';
import { SalaryWhereUniqueInput } from './salary-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SalaryScalarFieldEnum } from './salary-scalar-field.enum';

@ArgsType()
export class FindManySalaryArgs {

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

    @Field(() => [SalaryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SalaryScalarFieldEnum>;
}
