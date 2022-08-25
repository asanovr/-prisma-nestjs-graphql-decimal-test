import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryCreateInput } from './salary-history-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSalaryHistoryArgs {

    @Field(() => SalaryHistoryCreateInput, {nullable:false})
    @Type(() => SalaryHistoryCreateInput)
    data!: SalaryHistoryCreateInput;
}
