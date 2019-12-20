# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
GameSession.destroy_all

young = User.create(name: "young")

game1 = GameSession.create(score:50, user: young, missile_size:"small", level: 1)
game2 = GameSession.create(score: 120, user: young, missile_size: "medium", level: 2)

# [
#   {
#     id: 1,
#     name: 'matt',
#     game_sessions: [
#       {
#         score: 50,
#         user_id: 1,
#         level: 'easy',
#         missile_size: 'small'
#       }, 
#       {
#         score: 150,
#         user_id: 1,
#         level: 'medium',
#         missile_size: 'medium'
#       }
#     ]
#   }
# ]