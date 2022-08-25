import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryWhereUniqueInput } from './salary-history-where-unique.input';
import { Type } from 'class-transformer';
import { SalaryHistoryCreateWithoutHistoryInput } from './salary-history-create-without-history.input';

@InputType()
export class SalaryHistoryCreateOrConnectWithoutHistoryInput {

    @Field(() => SalaryHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SalaryHistoryWhereUniqueInput)
    where!: SalaryHistoryWhereUniqueInput;

    @Field(() => SalaryHistoryCreateWithoutHistoryInput, {nullable:false})
    @Type(() => SalaryHistoryCreateWithoutHistoryInput)
    create!: SalaryHistoryCreateWithoutHistoryInput;
}
