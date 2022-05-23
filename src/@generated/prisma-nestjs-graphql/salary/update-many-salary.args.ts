import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryUpdateManyMutationInput } from './salary-update-many-mutation.input';
import { SalaryWhereInput } from './salary-where.input';

@ArgsType()
export class UpdateManySalaryArgs {

    @Field(() => SalaryUpdateManyMutationInput, {nullable:false})
    data!: SalaryUpdateManyMutationInput;

    @Field(() => SalaryWhereInput, {nullable:true})
    where?: SalaryWhereInput;
}
