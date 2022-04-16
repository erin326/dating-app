class RenameLatLonColumns < ActiveRecord::Migration[6.1]
   def up
    rename_column :users, :latitude, :lat
    rename_column :users, :longitude, :lon

  
  end
  def down
    rename_column :users, :lat, :latitude
    rename_column :users, :lon, :longitude


  end
end
