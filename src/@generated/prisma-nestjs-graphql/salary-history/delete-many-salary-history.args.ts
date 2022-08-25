import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryWhereInput } from './salary-history-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySalaryHistoryArgs {

    @Field(() => SalaryHistoryWhereInput, {nullable:true})
    @Type(() => SalaryHistoryWhereInput)
    where?: SalaryHistoryWhereInput;
}
