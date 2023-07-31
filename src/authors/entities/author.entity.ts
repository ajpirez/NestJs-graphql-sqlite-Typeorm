import {ObjectType, Field, Int} from '@nestjs/graphql';
import {Post} from "../../posts/entities/post.entity";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
@ObjectType()
export class Author {

    @Field()
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    name: string

    @Field(() => [Post], {nullable: true})
    @OneToMany(
        () => Post,
        post => post.author,
        { cascade: true,eager: true,nullable:true }
    )
    posts?: Post[]
}
