class GameSessionsController < ApplicationController
    def index
        render json: GameSession.all
    end

    def create
        game_session = GameSession.create(gs_params)
        render json: game_session.to_json(serialized_data)
    end

    def update
        game_session = GameSession.find(params[:id])
        game_session.update(gs_params)
        # render json: game_session.to_json(serialized_data)
    end
    
private
def gs_params
    params.require(:game_session).permit(:score, :missile_size, :level, :user_id)
end
    
def serialized_data
    {:only => [:id, :score, :missile_size, :level, :user_id],
    :include => [
        :user => {
            :except => [:created_at, :updated_at]
        }
        ]}
end
    
end