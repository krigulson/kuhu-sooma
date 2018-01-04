class CreatePlacesHistories < ActiveRecord::Migration[5.1]
  def change
    create_table :places_histories do |t|
      t.integer :place_id
      t.integer :user_id

      t.timestamps
    end
  end
end
