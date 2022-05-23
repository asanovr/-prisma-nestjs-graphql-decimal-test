import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { JobCreateWithoutSalaryInput } from './job-create-without-salary.input';

@InputType()
export class JobCreateOrConnectWithoutSalaryInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    where!: JobWhereUniqueInput;

    @Field(() => JobCreateWithoutSalaryInput, {nullable:false})
    @Type(() => JobCreateWithoutSalaryInput)
    create!: JobCreateWithoutSalaryInput;
}
