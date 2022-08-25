import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutSalaryInput } from './job-create-without-salary.input';
import { Type } from 'class-transformer';
import { JobCreateOrConnectWithoutSalaryInput } from './job-create-or-connect-without-salary.input';
import { JobCreateManySalaryInputEnvelope } from './job-create-many-salary-input-envelope.input';
import { JobWhereUniqueInput } from './job-where-unique.input';

@InputType()
export class JobCreateNestedManyWithoutSalaryInput {

    @Field(() => [JobCreateWithoutSalaryInput], {nullable:true})
    @Type(() => JobCreateWithoutSalaryInput)
    create?: Array<JobCreateWithoutSalaryInput>;

    @Field(() => [JobCreateOrConnectWithoutSalaryInput], {nullable:true})
    @Type(() => JobCreateOrConnectWithoutSalaryInput)
    connectOrCreate?: Array<JobCreateOrConnectWithoutSalaryInput>;

    @Field(() => JobCreateManySalaryInputEnvelope, {nullable:true})
    @Type(() => JobCreateManySalaryInputEnvelope)
    createMany?: JobCreateManySalaryInputEnvelope;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    connect?: Array<JobWhereUniqueInput>;
}
