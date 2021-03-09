# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create(
  [
    {
      name: "User",
      second_name: "Test",
      email: "test@user.com",
      password: 'password',
      password_confirmation: 'password',
      type: "User"
    },
    {
      name: "Admin",
      second_name: "User",
      password: 'admin_assword',
      password_confirmation: 'admin_assword',
      email: "admin@user.com",
      type: "User::Admin"
    }
  ])
