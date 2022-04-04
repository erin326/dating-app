class ChangeColumn < ActiveRecord::Migration[6.1]
  def change
    def up
      change_column :users, :liked_people, :integer, using: 'ARRAY[liked_people]::INTEGER[]'
    end
  
    def down
      change_column :users, :liked_people, :string
    end
  
  end
end
