import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryUpdateWithoutHistoryInput } from './salary-history-update-without-history.input';
import { Type } from 'class-transformer';
import { SalaryHistoryCreateWithoutHistoryInput } from './salary-history-create-without-history.input';

@InputType()
export class SalaryHistoryUpsertWithoutHistoryInput {

    @Field(() => SalaryHistoryUpdateWithoutHistoryInput, {nullable:false})
    @Type(() => SalaryHistoryUpdateWithoutHistoryInput)
    update!: SalaryHistoryUpdateWithoutHistoryInput;

    @Field(() => SalaryHistoryCreateWithoutHistoryInput, {nullable:false})
    @Type(() => SalaryHistoryCreateWithoutHistoryInput)
    create!: SalaryHistoryCreateWithoutHistoryInput;
}
