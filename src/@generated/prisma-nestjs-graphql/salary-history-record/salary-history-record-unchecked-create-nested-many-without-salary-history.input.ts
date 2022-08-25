import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryRecordCreateWithoutSalaryHistoryInput } from './salary-history-record-create-without-salary-history.input';
import { Type } from 'class-transformer';
import { SalaryHistoryRecordCreateOrConnectWithoutSalaryHistoryInput } from './salary-history-record-create-or-connect-without-salary-history.input';
import { SalaryHistoryRecordCreateManySalaryHistoryInputEnvelope } from './salary-history-record-create-many-salary-history-input-envelope.input';
import { SalaryHistoryRecordWhereUniqueInput } from './salary-history-record-where-unique.input';

@InputType()
export class SalaryHistoryRecordUncheckedCreateNestedManyWithoutSalaryHistoryInput {

    @Field(() => [SalaryHistoryRecordCreateWithoutSalaryHistoryInput], {nullable:true})
    @Type(() => SalaryHistoryRecordCreateWithoutSalaryHistoryInput)
    create?: Array<SalaryHistoryRecordCreateWithoutSalaryHistoryInput>;

    @Field(() => [SalaryHistoryRecordCreateOrConnectWithoutSalaryHistoryInput], {nullable:true})
    @Type(() => SalaryHistoryRecordCreateOrConnectWithoutSalaryHistoryInput)
    connectOrCreate?: Array<SalaryHistoryRecordCreateOrConnectWithoutSalaryHistoryInput>;

    @Field(() => SalaryHistoryRecordCreateManySalaryHistoryInputEnvelope, {nullable:true})
    @Type(() => SalaryHistoryRecordCreateManySalaryHistoryInputEnvelope)
    createMany?: SalaryHistoryRecordCreateManySalaryHistoryInputEnvelope;

    @Field(() => [SalaryHistoryRecordWhereUniqueInput], {nullable:true})
    @Type(() => SalaryHistoryRecordWhereUniqueInput)
    connect?: Array<SalaryHistoryRecordWhereUniqueInput>;
}
