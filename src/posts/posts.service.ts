import {Injectable} from '@nestjs/common';
import {CreatePostInput} from './dto/create-post.input';
import {UpdatePostInput} from './dto/update-post.input';
import {Post} from "./entities/post.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";


@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>
    ) {
    }

    create(createPostInput: CreatePostInput): Promise<Post> {
        const newPost: Post = this.postRepository.create(createPostInput);
        return this.postRepository.save(newPost);
    }

    async findAll(): Promise<Post[]> {
        return this.postRepository.find({relations: ['author']});
    }

    findOne(id: number) {
        return this.postRepository.findOne({
            where: {
                id
            }
        });
    }

    update(id: number, updatePostInput: UpdatePostInput) {
        return `This action updates a #${id} post`;
    }

    async remove(id: number) {
        const post = await this.findOne(id)
        await this.postRepository.delete(id);
        return post
    }
}
