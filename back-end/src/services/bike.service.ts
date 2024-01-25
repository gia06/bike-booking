import { Status, User } from "../interfaces/general";
import { BikeModel } from "../models/bike.model";
import { BikesRepository } from "../repository/bikes.repository";

export class BikesService {
  repository: BikesRepository;

  constructor(repository: BikesRepository) {
    this.repository = repository;
  }

  /**
   * Add a new task item
   * @param {*} task The task object to add
   */
  async save({
    userInputId,
    name,
    type,
    color,
    wheelSize,
    price,
    description,
  }: User) {
    await this.repository.save({
      userInputId,
      name,
      type,
      color,
      wheelSize,
      price,
      description,
    });
  }

  /**
   * Find all bikes
   */
  async findAll() {
    return await this.repository.findAll();
  }

  /**
   * Find bike by id
   * @param {*} id The UserInputId of the bike
   */
  async findOneByUserInputId(id: string) {
    return await this.repository.findOneByUserInputId(id);
  }

  /**
   * Update status of single bike by id
   * @param {*} id The userInputId of the bike
   * @param {*} status The new status of the bike
   */
  async updateStatus(bike: typeof BikeModel, status: Status) {
    await this.repository.updateStatus(bike, status);
  }

  /**
   * Find bike by id
   * @param {*} id The id of the bike
   */
  async findOneById(id: string) {
    return await this.repository.findOneById(id);
  }

  /**
   * deletes a task
   * @param {*} title The title object
   * @param {*} userID The id of the user
   */
  async delete(id: string) {
    await this.repository.delete(id);
  }
}
