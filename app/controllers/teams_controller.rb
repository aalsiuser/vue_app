class TeamsController < ApplicationController
  def index
  end
  def show
    # binding.pry   
    @abc = 1
    # render json: @abc     
  end
  def create
    # binding.pry
    add_row = Team.create(content:params[:data])
  end
  def edit
  end 
  def new
  end
end
