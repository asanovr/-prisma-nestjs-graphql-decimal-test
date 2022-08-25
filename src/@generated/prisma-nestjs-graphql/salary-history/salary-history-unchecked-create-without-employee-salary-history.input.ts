import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryRecordUncheckedCreateNestedManyWithoutSalaryHistoryInput } from '../salary-history-record/salary-history-record-unchecked-create-nested-many-without-salary-history.input';
import { Type } from 'class-transformer';

@InputType()
export class SalaryHistoryUncheckedCreateWithoutEmployeeSalaryHistoryInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    currencyId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SalaryHistoryRecordUncheckedCreateNestedManyWithoutSalaryHistoryInput, {nullable:true})
    @Type(() => SalaryHistoryRecordUncheckedCreateNestedManyWithoutSalaryHistoryInput)
    history?: SalaryHistoryRecordUncheckedCreateNestedManyWithoutSalaryHistoryInput;
}
