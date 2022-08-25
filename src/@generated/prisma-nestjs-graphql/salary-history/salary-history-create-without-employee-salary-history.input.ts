import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryRecordCreateNestedManyWithoutSalaryHistoryInput } from '../salary-history-record/salary-history-record-create-nested-many-without-salary-history.input';
import { Type } from 'class-transformer';

@InputType()
export class SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    currencyId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SalaryHistoryRecordCreateNestedManyWithoutSalaryHistoryInput, {nullable:true})
    @Type(() => SalaryHistoryRecordCreateNestedManyWithoutSalaryHistoryInput)
    history?: SalaryHistoryRecordCreateNestedManyWithoutSalaryHistoryInput;
}
