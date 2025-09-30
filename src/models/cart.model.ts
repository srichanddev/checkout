import { BelongsTo, ForeignKey, Table, Column, Model, DataType } from 'sequelize-typescript';
import { Product } from './product.model';

@Table({ tableName: 'cart_items' })
export class CartItem extends Model {
  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  productId!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  quantity!: number;

  @BelongsTo(() => Product)
  product!: Product;
}