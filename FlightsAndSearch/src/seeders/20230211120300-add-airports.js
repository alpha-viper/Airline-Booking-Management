'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Airports', [
        {
          name:'Kmepegowda International airport',
          cityId:3,
          createdAt: new Date(),
          updatedAt:new Date()
        },
        {
          name:'Mysuru International airport',
          cityId:3,
          createdAt: new Date(),
          updatedAt:new Date()
        },
        {
          name:'Mengaluru International airport',
          cityId:3,
          createdAt: new Date(),
          updatedAt:new Date()
        },
        {
          name:'Indira gandhi International airport',
          cityId:1,
          createdAt: new Date(),
          updatedAt:new Date()
        },
        {
          name:'Noida International airport',
          cityId:1,
          createdAt: new Date(),
          updatedAt:new Date()
        }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
