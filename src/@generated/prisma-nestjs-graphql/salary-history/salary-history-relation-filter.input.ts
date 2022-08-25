import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryWhereInput } from './salary-history-where.input';

@InputType()
export class SalaryHistoryRelationFilter {

    @Field(() => SalaryHistoryWhereInput, {nullable:true})
    is?: SalaryHistoryWhereInput;

    @Field(() => SalaryHistoryWhereInput, {nullable:true})
    isNot?: SalaryHistoryWhereInput;
}
