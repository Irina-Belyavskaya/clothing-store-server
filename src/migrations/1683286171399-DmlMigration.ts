import { MigrationInterface, QueryRunner } from "typeorm";
import * as bcrypt from 'bcrypt';

async function hashPassword(password: string) {
    const hashPassword = bcrypt.hash(password, 10);
    return hashPassword;
}

export class DmlMigration1683286171399 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `INSERT INTO "categories" (name, description, image_url) 
                    VALUES ('For women', 'Clothes for women', 'https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80');`
        ),
        await queryRunner.query(
          `INSERT INTO "categories" (name, description, image_url) 
                    VALUES ('For men', 'Clothes for men', 'https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');`
        ),
        await queryRunner.query(
          `INSERT INTO "user_roles" (type, name, permissions)
                  VALUES ('super-admin', 'super admin', '{}');`
        ),
        await queryRunner.query(
          `INSERT INTO "user_roles" (type, name, permissions)
                  VALUES ('client', 'user', '{"get-user-info", "update-user-info", "update-password", "get-all-products", "add-product-to-cart", "update-product-quantity","delete-product-from-cart", "get-all-orders", "create-order", "get-all-categories", "get-cart", "delete-cart-by-user-id",
                  "get-order-by-user-id"}')`
        )
        await queryRunner.query(
            `INSERT INTO "users" (email, password, status, role_id, role_type) 
                      VALUES ('admin@admin.ru', '${await hashPassword('admin12345')}', true, 1, 'super-admin')`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `DELETE FROM "categories"
                        WHERE name='Furniture'`,
        ),
          await queryRunner.query(
            `DELETE FROM "user_roles"
                        WHERE type='super-admin'`,
          )
        await queryRunner.query(
          `DELETE FROM "user_roles"
                        WHERE type='client'`,
        )

        await queryRunner.query(
          `DELETE FROM "users"
                        WHERE email='admin@admin.ru'`,
        )
    }

}