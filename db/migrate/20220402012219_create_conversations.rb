class CreateConversations < ActiveRecord::Migration[6.1]
  def change
    create_table :conversations do |t|
      t.references :sender, null: false, references: :users
      t.references :recipient, null: false, references: :users

      t.timestamps

    end
    
  end
end
