class ChangeColumnType < ActiveRecord::Migration[6.1]
  def up
    change_column :users, :liked_people, :integer, using: 'liked_people::integer'
  end

  def down
    change_column :users, :liked_people, :string
  end

  
end
