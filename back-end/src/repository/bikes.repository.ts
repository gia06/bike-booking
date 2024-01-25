import { Status, User } from "../interfaces/general";
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
   * @param {*} id The userInputId of the bike
   */
  async findOneByUserInputId(id: string) {
    const bike = await this.bikeModel.findOne({ userInputId: id });

    return bike;
  }

  /**
   * Find single bike by id
   * @param {*} id The id of the bike
   */
  async findOneById(id: string) {
    const bike = await this.bikeModel.findById(id);

    return bike;
  }

  /**
   * Update status of single bike by id
   * @param {*} id The userInputId of the bike
   * @param {*} status The new status of the bike
   */
  async updateStatus(bike: typeof BikeModel, status: Status) {
    await bike.updateOne({ status });
  }

  /**
   * deletes a task
   * @param {*} id The id of the bike
   */
  async delete(id: string): Promise<void> {
    await this.bikeModel.findOneAndDelete({ _id: id });
  }
}
