import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface UserAttributes{
    id: number;
    name: string;
    email: string;
    password: string;
}

interface USerCreationAttributes extends Optional<UserAttributes, "id">{}

class User
extends Model<UserAttributes, USerCreationAttributes>
implements UserAttributes
{
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;

}

// Initialize the User model

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "users",
        sequelize,
    }
);

export default User;
