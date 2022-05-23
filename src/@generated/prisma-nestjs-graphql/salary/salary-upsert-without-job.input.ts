import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryUpdateWithoutJobInput } from './salary-update-without-job.input';
import { Type } from 'class-transformer';
import { SalaryCreateWithoutJobInput } from './salary-create-without-job.input';

@InputType()
export class SalaryUpsertWithoutJobInput {

    @Field(() => SalaryUpdateWithoutJobInput, {nullable:false})
    @Type(() => SalaryUpdateWithoutJobInput)
    update!: SalaryUpdateWithoutJobInput;

    @Field(() => SalaryCreateWithoutJobInput, {nullable:false})
    @Type(() => SalaryCreateWithoutJobInput)
    create!: SalaryCreateWithoutJobInput;
}
