import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateManySalaryInput } from './job-create-many-salary.input';
import { Type } from 'class-transformer';

@InputType()
export class JobCreateManySalaryInputEnvelope {

    @Field(() => [JobCreateManySalaryInput], {nullable:false})
    @Type(() => JobCreateManySalaryInput)
    data!: Array<JobCreateManySalaryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
