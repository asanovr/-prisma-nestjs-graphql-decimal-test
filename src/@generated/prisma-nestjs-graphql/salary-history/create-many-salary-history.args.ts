import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryCreateManyInput } from './salary-history-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySalaryHistoryArgs {

    @Field(() => [SalaryHistoryCreateManyInput], {nullable:false})
    @Type(() => SalaryHistoryCreateManyInput)
    data!: Array<SalaryHistoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
