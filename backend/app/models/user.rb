class User < ApplicationRecord
    has_many :game_sessions
    validates :name, presence: true, uniqueness: true
end
