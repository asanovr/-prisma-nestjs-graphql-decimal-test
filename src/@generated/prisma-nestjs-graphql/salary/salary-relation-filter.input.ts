import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryWhereInput } from './salary-where.input';

@InputType()
export class SalaryRelationFilter {

    @Field(() => SalaryWhereInput, {nullable:true})
    is?: SalaryWhereInput;

    @Field(() => SalaryWhereInput, {nullable:true})
    isNot?: SalaryWhereInput;
}
