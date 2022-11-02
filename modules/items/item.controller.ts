import Item from "./item.model";
import { Request, Response } from "express";
import { ITEM_TYPES } from "../../utils/constants";
import mongoose from "mongoose";

export const createItem = async (req: Request, res: Response) => {
  try {
    const { type, description, date, title } = req.body;
    const newItem = await Item.create({
      type,
      description,
      date,
      title,
    });

    return res.status(201).json(newItem);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const getAllItems = async (req: Request, res: Response) => {
  try {
    const { page, limit } = req.query;
    const pageNo = parseInt(page as string) - 1 || 0;
    const max = parseInt(limit as string) || 5;

    const items = await Item.find()
      .skip(pageNo * max)
      .limit(max)
      .sort({ createdAt: "desc" });

    const totalCount = await Item.countDocuments();

    return res.status(200).json({ items, totalCount });
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.send(400).send("Id not found");
    }

    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).send("No record found");
    }

    return res.status(200).json(item);
  } catch (error: any) {
    return res.status(500).json(error);
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.send(400).send("Id not found");
    }

    const item = await Item.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    if (!item) {
      res.status(400).send("Item not found");
    }

    return res.status(200).json(item);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { type, description, date, title } = req.body;

    if (!id) {
      return res.send(400).send("Id not found");
    }

    const item = await Item.updateOne(
      { _id: id },
      { type, description, date, title }
    );

    if (!item) {
      res.status(400).send("Item not found");
    }

    return res.status(200).json(item);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const getItemTypes = async (req: Request, res: Response) => {
  try {
    res.json(Object.values(ITEM_TYPES));
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};
