import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneJobArgs {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    where!: JobWhereUniqueInput;
}
