import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryWhereInput } from './salary-where.input';
import { Type } from 'class-transformer';

@InputType()
export class SalaryRelationFilter {

    @Field(() => SalaryWhereInput, {nullable:true})
    @Type(() => SalaryWhereInput)
    is?: SalaryWhereInput;

    @Field(() => SalaryWhereInput, {nullable:true})
    @Type(() => SalaryWhereInput)
    isNot?: SalaryWhereInput;
}
