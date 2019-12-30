class UsersController < ApplicationController
    def index
        users = User.all
        render json: users.to_json(serialized_data)
    end

    def create
        user = User.create(params.require(:users).permit(:name))
        render json: user.to_json(serialized_data)
    end


private

    def serialized_data
        {:only => [:id, :name],
                :include => [
                    :game_sessions => {
                        :except => [:created_at, :updated_at]
                    }
                ]}
    end

end