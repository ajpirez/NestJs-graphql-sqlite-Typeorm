import {InputType, Int, Field} from '@nestjs/graphql';
import {IsArray, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength} from "class-validator";
import {Entity} from "typeorm";
import {CreatePostInput} from "../../posts/dto/create-post.input";

@Entity()
@InputType()
export class CreateAuthorInput {
    @IsString()
    @MinLength(5)
    @MaxLength(100)
    @IsNotEmpty()
    @Field()
    name: string;
}


