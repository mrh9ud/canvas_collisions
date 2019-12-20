class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :level
      t.string :missile_size
      t.string :level_difficulty
      t.integer :score

      t.timestamps
    end
  end
end
