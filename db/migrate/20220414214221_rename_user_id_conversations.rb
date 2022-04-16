class RenameUserIdConversations < ActiveRecord::Migration[6.1]

  def up
    rename_column :conversations, :user_id, :sender_id
  end

  def down
    rename_column :conversations, :sender_id, :user_id
  end
  

end
