class UsersController < ApplicationController
    def index
        users = User.all
        render json: users.to_json(:only => [:id, :name],
            :include => [
                :game_sessions => {
                    :except => [:created_at, :updated_at]
                }
            ])
    end

    def create
        @user = User.create(params.require(:users).permit(:name))
    end
end
