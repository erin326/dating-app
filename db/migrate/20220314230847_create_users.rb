class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username 
      t.string :password_digest 
      t.string :gender
      t.string :bio 
      t.integer :age
      t.string :gender_interest
      t.string :liked_people 
      t.timestamps
    end
  end
end
