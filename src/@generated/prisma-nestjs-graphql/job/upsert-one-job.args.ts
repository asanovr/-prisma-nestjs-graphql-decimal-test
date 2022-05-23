import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { JobCreateInput } from './job-create.input';
import { JobUpdateInput } from './job-update.input';

@ArgsType()
export class UpsertOneJobArgs {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    where!: JobWhereUniqueInput;

    @Field(() => JobCreateInput, {nullable:false})
    @Type(() => JobCreateInput)
    create!: JobCreateInput;

    @Field(() => JobUpdateInput, {nullable:false})
    @Type(() => JobUpdateInput)
    update!: JobUpdateInput;
}
