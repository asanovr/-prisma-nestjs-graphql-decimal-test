import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryUpdateManyMutationInput } from './salary-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SalaryWhereInput } from './salary-where.input';

@ArgsType()
export class UpdateManySalaryArgs {

    @Field(() => SalaryUpdateManyMutationInput, {nullable:false})
    @Type(() => SalaryUpdateManyMutationInput)
    data!: SalaryUpdateManyMutationInput;

    @Field(() => SalaryWhereInput, {nullable:true})
    @Type(() => SalaryWhereInput)
    where?: SalaryWhereInput;
}
