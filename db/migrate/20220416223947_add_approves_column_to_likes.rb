class AddApprovesColumnToLikes < ActiveRecord::Migration[6.1]
  def change
    add_column :likes, :user_approves, :boolean
    add_column :likes, :like_account_approves, :boolean

  end
end
