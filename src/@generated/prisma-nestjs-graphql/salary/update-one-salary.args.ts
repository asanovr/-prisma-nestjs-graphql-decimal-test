import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryUpdateInput } from './salary-update.input';
import { SalaryWhereUniqueInput } from './salary-where-unique.input';

@ArgsType()
export class UpdateOneSalaryArgs {

    @Field(() => SalaryUpdateInput, {nullable:false})
    data!: SalaryUpdateInput;

    @Field(() => SalaryWhereUniqueInput, {nullable:false})
    where!: SalaryWhereUniqueInput;
}
