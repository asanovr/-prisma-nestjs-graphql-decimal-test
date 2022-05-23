import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryCreateInput } from './salary-create.input';

@ArgsType()
export class CreateOneSalaryArgs {

    @Field(() => SalaryCreateInput, {nullable:false})
    data!: SalaryCreateInput;
}
