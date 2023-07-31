import {InputType, Int, Field} from '@nestjs/graphql';
import {IsArray, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength} from "class-validator";

@InputType()
export class CreatePostInput {

    @IsString()
    @MinLength(5)
    @MaxLength(100)
    @IsNotEmpty()
    @Field()
    title: string;

    @IsString()
    @MaxLength(400)
    @Field({nullable: true})
    content: string;

    @IsInt()
    @Field()
    authorId: number;
}
