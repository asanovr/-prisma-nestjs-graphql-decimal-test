import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryWhereUniqueInput } from './salary-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneSalaryArgs {

    @Field(() => SalaryWhereUniqueInput, {nullable:false})
    @Type(() => SalaryWhereUniqueInput)
    where!: SalaryWhereUniqueInput;
}
