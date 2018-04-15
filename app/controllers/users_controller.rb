class UsersController < ApplicationController
  def create
    binding.pry
    user = User.new(user_params)
    if user.save
      user.invite!
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end
end
