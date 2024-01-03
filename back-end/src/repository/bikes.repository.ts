import { User } from "../interfaces/general";
import { BikeModel } from "../models/bike.model";

export class BikesRepository {
  bikeModel: typeof BikeModel;

  constructor(bikeModel: typeof BikeModel) {
    this.bikeModel = bikeModel;
  }

  /**
   * Add a new task item
   * @param {*} bike The bike object to add
   */
  async save({
    userInputId,
    name,
    type,
    color,
    wheelSize,
    price,
    description,
  }: User): Promise<void> {
    const newTask = new this.bikeModel({
      userInputId,
      name,
      type,
      color,
      wheelSize,
      price,
      description,
    });
    await newTask.save();
  }

  /**
   * Find all bikes
   */
  async findAll() {
    const bikes = await this.bikeModel.find();

    return bikes;
  }

  /**
   * Find single bike by id
   * @param {*} id The id of the bike
   */
  async findOneById(id: string) {
    const bike = await this.bikeModel.findById(id);

    return bike;
  }

  // /**
  //  * Find  task by title
  //  * @param {*} title The title of the task
  //  * @param {*} userId The id of the user
  //  */
  // async findByTitle(title, userId) {
  //   const user = await TaskModel.findOne({ belongsTo: userId, title });

  //   return user;
  // }

  // /**
  //  * Updates task isDone to true value
  //  * @param {*} title The title object
  //  * @param {*} userID The id of the user
  //  */
  // async markDone(title, userId) {
  //   const task = await TaskModel.findOne({ title, belongsTo: userId });

  //   task.done = true;
  //   await task.save();
  // }

  // /**
  //  * Updates task isDone to true value
  //  * @param {*} title The title object
  //  * @param {*} userID The id of the user
  //  */
  // async update(oldTitle, newTitle, description, userId) {
  //   const task = await TaskModel.findOne({
  //     title: oldTitle,
  //     belongsTo: userId,
  //   });

  //   task.title = newTitle;
  //   task.description = description;

  //   await task.save();
  // }

  /**
   * deletes a task
   * @param {*} id The id of the bike
   */
  async delete(id: string): Promise<void> {
    await this.bikeModel.findOneAndDelete({ _id: id });
  }
}
