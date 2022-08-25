import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryUpdateManyMutationInput } from './salary-history-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SalaryHistoryWhereInput } from './salary-history-where.input';

@ArgsType()
export class UpdateManySalaryHistoryArgs {

    @Field(() => SalaryHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => SalaryHistoryUpdateManyMutationInput)
    data!: SalaryHistoryUpdateManyMutationInput;

    @Field(() => SalaryHistoryWhereInput, {nullable:true})
    @Type(() => SalaryHistoryWhereInput)
    where?: SalaryHistoryWhereInput;
}
