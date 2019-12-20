class CreateGameSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :game_sessions do |t|
      t.integer :score
      t.string :missile_size
      t.string :difficulty_level
      t.integer :user_id

      t.timestamps
    end
  end
end
