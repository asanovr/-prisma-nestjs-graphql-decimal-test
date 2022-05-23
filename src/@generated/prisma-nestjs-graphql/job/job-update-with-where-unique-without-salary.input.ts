import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { JobUpdateWithoutSalaryInput } from './job-update-without-salary.input';

@InputType()
export class JobUpdateWithWhereUniqueWithoutSalaryInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    where!: JobWhereUniqueInput;

    @Field(() => JobUpdateWithoutSalaryInput, {nullable:false})
    @Type(() => JobUpdateWithoutSalaryInput)
    data!: JobUpdateWithoutSalaryInput;
}
