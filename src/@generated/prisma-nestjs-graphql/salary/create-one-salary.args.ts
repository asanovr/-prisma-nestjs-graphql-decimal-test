import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryCreateInput } from './salary-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSalaryArgs {

    @Field(() => SalaryCreateInput, {nullable:false})
    @Type(() => SalaryCreateInput)
    data!: SalaryCreateInput;
}
