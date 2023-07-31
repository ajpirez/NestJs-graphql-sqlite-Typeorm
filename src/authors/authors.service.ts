import {Injectable} from '@nestjs/common';
import {CreateAuthorInput} from './dto/create-author.input';
import {UpdateAuthorInput} from './dto/update-author.input';
import {InjectRepository} from "@nestjs/typeorm";
import {Author} from "./entities/author.entity";
import {Repository} from "typeorm";
import {Post} from "../posts/entities/post.entity";

@Injectable()
export class AuthorsService {

    constructor(
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>,
    ) {
    }

    async create(createAuthorInput: CreateAuthorInput): Promise<Author> {
        const newAuthor: Author = this.authorRepository.create(createAuthorInput);
        return this.authorRepository.save(newAuthor);
    }

    findAll(): Promise<Author[]> {
        return this.authorRepository.find();
    }

    findOne(id: number): Promise<Author> {
        return this.authorRepository.findOne({
            where: {
                id
            }
        })
    }

    update(id: number, updateAuthorInput: UpdateAuthorInput) {
        return `This action updates a #${id} author`;
    }

    remove(id: number) {
        return `This action removes a #${id} author`;
    }
}
