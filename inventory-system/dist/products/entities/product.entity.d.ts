import { Category } from '../../categories/entities/category.entity';
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    categoryId: string;
    category: Category;
    createdAt: Date;
    updatedAt: Date;
}
