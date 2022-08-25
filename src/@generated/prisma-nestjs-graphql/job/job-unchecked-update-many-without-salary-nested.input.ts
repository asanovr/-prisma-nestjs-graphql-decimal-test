import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutSalaryInput } from './job-create-without-salary.input';
import { Type } from 'class-transformer';
import { JobCreateOrConnectWithoutSalaryInput } from './job-create-or-connect-without-salary.input';
import { JobUpsertWithWhereUniqueWithoutSalaryInput } from './job-upsert-with-where-unique-without-salary.input';
import { JobCreateManySalaryInputEnvelope } from './job-create-many-salary-input-envelope.input';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithWhereUniqueWithoutSalaryInput } from './job-update-with-where-unique-without-salary.input';
import { JobUpdateManyWithWhereWithoutSalaryInput } from './job-update-many-with-where-without-salary.input';
import { JobScalarWhereInput } from './job-scalar-where.input';

@InputType()
export class JobUncheckedUpdateManyWithoutSalaryNestedInput {

    @Field(() => [JobCreateWithoutSalaryInput], {nullable:true})
    @Type(() => JobCreateWithoutSalaryInput)
    create?: Array<JobCreateWithoutSalaryInput>;

    @Field(() => [JobCreateOrConnectWithoutSalaryInput], {nullable:true})
    @Type(() => JobCreateOrConnectWithoutSalaryInput)
    connectOrCreate?: Array<JobCreateOrConnectWithoutSalaryInput>;

    @Field(() => [JobUpsertWithWhereUniqueWithoutSalaryInput], {nullable:true})
    @Type(() => JobUpsertWithWhereUniqueWithoutSalaryInput)
    upsert?: Array<JobUpsertWithWhereUniqueWithoutSalaryInput>;

    @Field(() => JobCreateManySalaryInputEnvelope, {nullable:true})
    @Type(() => JobCreateManySalaryInputEnvelope)
    createMany?: JobCreateManySalaryInputEnvelope;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    set?: Array<JobWhereUniqueInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    disconnect?: Array<JobWhereUniqueInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    delete?: Array<JobWhereUniqueInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    connect?: Array<JobWhereUniqueInput>;

    @Field(() => [JobUpdateWithWhereUniqueWithoutSalaryInput], {nullable:true})
    @Type(() => JobUpdateWithWhereUniqueWithoutSalaryInput)
    update?: Array<JobUpdateWithWhereUniqueWithoutSalaryInput>;

    @Field(() => [JobUpdateManyWithWhereWithoutSalaryInput], {nullable:true})
    @Type(() => JobUpdateManyWithWhereWithoutSalaryInput)
    updateMany?: Array<JobUpdateManyWithWhereWithoutSalaryInput>;

    @Field(() => [JobScalarWhereInput], {nullable:true})
    @Type(() => JobScalarWhereInput)
    deleteMany?: Array<JobScalarWhereInput>;
}
