import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryCreateWithoutHistoryInput } from './salary-history-create-without-history.input';
import { Type } from 'class-transformer';
import { SalaryHistoryCreateOrConnectWithoutHistoryInput } from './salary-history-create-or-connect-without-history.input';
import { SalaryHistoryUpsertWithoutHistoryInput } from './salary-history-upsert-without-history.input';
import { SalaryHistoryWhereUniqueInput } from './salary-history-where-unique.input';
import { SalaryHistoryUpdateWithoutHistoryInput } from './salary-history-update-without-history.input';

@InputType()
export class SalaryHistoryUpdateOneRequiredWithoutHistoryNestedInput {

    @Field(() => SalaryHistoryCreateWithoutHistoryInput, {nullable:true})
    @Type(() => SalaryHistoryCreateWithoutHistoryInput)
    create?: SalaryHistoryCreateWithoutHistoryInput;

    @Field(() => SalaryHistoryCreateOrConnectWithoutHistoryInput, {nullable:true})
    @Type(() => SalaryHistoryCreateOrConnectWithoutHistoryInput)
    connectOrCreate?: SalaryHistoryCreateOrConnectWithoutHistoryInput;

    @Field(() => SalaryHistoryUpsertWithoutHistoryInput, {nullable:true})
    @Type(() => SalaryHistoryUpsertWithoutHistoryInput)
    upsert?: SalaryHistoryUpsertWithoutHistoryInput;

    @Field(() => SalaryHistoryWhereUniqueInput, {nullable:true})
    @Type(() => SalaryHistoryWhereUniqueInput)
    connect?: SalaryHistoryWhereUniqueInput;

    @Field(() => SalaryHistoryUpdateWithoutHistoryInput, {nullable:true})
    @Type(() => SalaryHistoryUpdateWithoutHistoryInput)
    update?: SalaryHistoryUpdateWithoutHistoryInput;
}
