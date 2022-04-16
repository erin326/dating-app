class CreateUserConversations < ActiveRecord::Migration[6.1]
  def change
    create_table :user_conversations do |t|
      t.integer :conversation_id
      t.integer :user_id
      t.timestamps
    end
  end
end
