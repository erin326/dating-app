class ChangeColumnTypeLatLon < ActiveRecord::Migration[6.1]

  def up
    change_column :users, :latitude, :float, using: 'latitude::float'
    change_column :users, :longitude, :float, using: 'longitude::float'
  end

  def down
    change_column :users, :latitude, :decimal

    change_column :users, :longitude, :decimal
  end

end
