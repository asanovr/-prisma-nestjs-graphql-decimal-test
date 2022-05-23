import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryCreateManyInput } from './salary-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySalaryArgs {

    @Field(() => [SalaryCreateManyInput], {nullable:false})
    @Type(() => SalaryCreateManyInput)
    data!: Array<SalaryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
