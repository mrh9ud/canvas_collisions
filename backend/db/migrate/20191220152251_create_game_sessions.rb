class CreateGameSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :game_sessions do |t|
      t.integer :score, default: 0
      t.string :missile_size, default: "small"
      t.integer :level, default: 1
      t.integer :user_id

      t.timestamps
    end
  end
end
