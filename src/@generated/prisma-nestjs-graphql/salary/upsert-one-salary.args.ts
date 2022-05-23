import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryWhereUniqueInput } from './salary-where-unique.input';
import { Type } from 'class-transformer';
import { SalaryCreateInput } from './salary-create.input';
import { SalaryUpdateInput } from './salary-update.input';

@ArgsType()
export class UpsertOneSalaryArgs {

    @Field(() => SalaryWhereUniqueInput, {nullable:false})
    @Type(() => SalaryWhereUniqueInput)
    where!: SalaryWhereUniqueInput;

    @Field(() => SalaryCreateInput, {nullable:false})
    @Type(() => SalaryCreateInput)
    create!: SalaryCreateInput;

    @Field(() => SalaryUpdateInput, {nullable:false})
    @Type(() => SalaryUpdateInput)
    update!: SalaryUpdateInput;
}
