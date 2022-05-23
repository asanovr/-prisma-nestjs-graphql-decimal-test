import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryWhereUniqueInput } from './salary-where-unique.input';
import { SalaryCreateInput } from './salary-create.input';
import { SalaryUpdateInput } from './salary-update.input';

@ArgsType()
export class UpsertOneSalaryArgs {

    @Field(() => SalaryWhereUniqueInput, {nullable:false})
    where!: SalaryWhereUniqueInput;

    @Field(() => SalaryCreateInput, {nullable:false})
    create!: SalaryCreateInput;

    @Field(() => SalaryUpdateInput, {nullable:false})
    update!: SalaryUpdateInput;
}
