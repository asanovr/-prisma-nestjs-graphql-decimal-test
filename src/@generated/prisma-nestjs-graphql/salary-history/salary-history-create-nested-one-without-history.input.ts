import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryCreateWithoutHistoryInput } from './salary-history-create-without-history.input';
import { Type } from 'class-transformer';
import { SalaryHistoryCreateOrConnectWithoutHistoryInput } from './salary-history-create-or-connect-without-history.input';
import { SalaryHistoryWhereUniqueInput } from './salary-history-where-unique.input';

@InputType()
export class SalaryHistoryCreateNestedOneWithoutHistoryInput {

    @Field(() => SalaryHistoryCreateWithoutHistoryInput, {nullable:true})
    @Type(() => SalaryHistoryCreateWithoutHistoryInput)
    create?: SalaryHistoryCreateWithoutHistoryInput;

    @Field(() => SalaryHistoryCreateOrConnectWithoutHistoryInput, {nullable:true})
    @Type(() => SalaryHistoryCreateOrConnectWithoutHistoryInput)
    connectOrCreate?: SalaryHistoryCreateOrConnectWithoutHistoryInput;

    @Field(() => SalaryHistoryWhereUniqueInput, {nullable:true})
    @Type(() => SalaryHistoryWhereUniqueInput)
    connect?: SalaryHistoryWhereUniqueInput;
}
