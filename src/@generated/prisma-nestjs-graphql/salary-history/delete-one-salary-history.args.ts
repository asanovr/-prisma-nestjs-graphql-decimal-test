import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryWhereUniqueInput } from './salary-history-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneSalaryHistoryArgs {

    @Field(() => SalaryHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SalaryHistoryWhereUniqueInput)
    where!: SalaryHistoryWhereUniqueInput;
}
