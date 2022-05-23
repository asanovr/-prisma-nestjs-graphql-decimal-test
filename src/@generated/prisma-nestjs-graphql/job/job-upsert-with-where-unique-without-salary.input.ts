import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { JobUpdateWithoutSalaryInput } from './job-update-without-salary.input';
import { JobCreateWithoutSalaryInput } from './job-create-without-salary.input';

@InputType()
export class JobUpsertWithWhereUniqueWithoutSalaryInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    where!: JobWhereUniqueInput;

    @Field(() => JobUpdateWithoutSalaryInput, {nullable:false})
    @Type(() => JobUpdateWithoutSalaryInput)
    update!: JobUpdateWithoutSalaryInput;

    @Field(() => JobCreateWithoutSalaryInput, {nullable:false})
    @Type(() => JobCreateWithoutSalaryInput)
    create!: JobCreateWithoutSalaryInput;
}
