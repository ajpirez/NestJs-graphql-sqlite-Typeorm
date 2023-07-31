import {ObjectType, Field, Int} from '@nestjs/graphql';
import {Column, PrimaryGeneratedColumn, Entity, ManyToOne} from 'typeorm'
import {Author} from "../../authors/entities/author.entity";


@Entity()
@ObjectType()
export class Post {
    @PrimaryGeneratedColumn()
    @Field(() => Int, {description: 'Example field (placeholder)'})
    id: number;

    @Column()
    @Field()
    title: string

    @Column({type: 'text', nullable: true})
    @Field(({nullable: true}))
    content?: string

    @Column()
    @Field(()=>Int)
    authorId: number

    @Field(() => Author)
    @ManyToOne(
        () => Author,
        author => author.posts,
        {onDelete: 'CASCADE'}
    )
    author: Author
}
