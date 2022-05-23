import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryWhereUniqueInput } from './salary-where-unique.input';

@ArgsType()
export class FindUniqueSalaryArgs {

    @Field(() => SalaryWhereUniqueInput, {nullable:false})
    where!: SalaryWhereUniqueInput;
}
