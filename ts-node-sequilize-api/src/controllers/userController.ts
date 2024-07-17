import { Request, Response } from "express";
import User from "../models/userModel";


const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error:any) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        res.status(201).json(user);
    } catch (error:any) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error:any) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const [updated] = await User.update(req.body, { where: { id: req.params.id } });

        if(updated){
            const updatedUser = await User.findByPk(req.params.id);
            res.status(200).json(updatedUser);
        }else {
            res.status(404).json({ error: "User not found" });
        }

    } catch (error:any) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};


const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({ where: { id } });

        if(deleted){
            res.status(200).json({ message: "User deleted successfully" });
        }else{
            res.status(404).json({ error: "User not found" });
        }

    } catch (error:any) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
};