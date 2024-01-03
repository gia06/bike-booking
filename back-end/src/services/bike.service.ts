import { User } from "../interfaces/general";
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
   * @param {*} id The id of the bike
   */
  async findOneById(id: string) {
    return await this.repository.findOneById(id);
  }

  // /**
  //  * Find  task by title
  //  * @param {*} title The title of the task
  //  * @param {*} userId The id of the user
  //  */
  // async findByTitle(title, userId) {
  //   return await tasksRepository.findByTitle(title, userId);
  // }

  // /**
  //  * Updates task isDone to true value
  //  * @param {*} title The title object
  //  * @param {*} userID The id of the user
  //  */
  // async markDone(title, userId) {
  //   await tasksRepository.markDone(title, userId);
  // }

  // /**
  //  * Updates task isDone to true value
  //  * @param {*} title The title object
  //  * @param {*} userID The id of the user
  //  */
  // async update(oldTitle, newTitle, description, userId) {
  //   await tasksRepository.update(oldTitle, newTitle, description, userId);
  // }

  /**
   * deletes a task
   * @param {*} title The title object
   * @param {*} userID The id of the user
   */
  async delete(id: string) {
    await this.repository.delete(id);
  }
}
