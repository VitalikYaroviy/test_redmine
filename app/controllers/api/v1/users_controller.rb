module Api::V1
  class UsersController < ApplicationController
    def index
      users = User.all
      render json: { users: users }, status: 201
    end
  end
end